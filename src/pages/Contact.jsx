import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
  Grid,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { pranalyticsAbout } from "../commonfiles/pranalyticsAbout";
import { ContactInfoApi } from "../commonfiles/api";

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
    title: "Our Address",
    details: [pranalyticsAbout.address],
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 32 }} />,
    title: "Phone",
    details: [pranalyticsAbout.phone],
  },
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    title: "Email",
    details: [pranalyticsAbout.email],
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
    title: "Hours",
    details: [pranalyticsAbout.timings],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);
    ContactInfoApi.sendContactMessage(formData)
      .then(() => {
        setSnackbar({
          open: true,
          message: "Thank you! We will get back to you soon.",
          severity: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        setSnackbar({
          open: true,
          message: "Failed to send message. Please try again later.",
          severity: "error",
        });
        setIsSubmitting(false);
      })
  };

  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Pranalyticx</title>
        <meta
          name="description"
          content="Contact Pranalyticx for IT solutions and EduTech services."
        />
      </Helmet>
      <Layout>
        <Box
          sx={{
            minHeight: "350px",
            display: "flex",
            alignItems: "center",
            backgroundImage: `linear-gradient(rgba(3, 17, 104, 0.85), rgba(20, 118, 174, 0.8)), url(/images/contact.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ maxWidth: 600, color: "white", py: 8 }}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{ mb: 2, fontWeight: 700 }}
                >
                  Contact Us
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Get in touch with our team
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
        <Box sx={{ py: 10, bgcolor: "background.default" }}>
          <Container maxWidth="xl">
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h2"
                      sx={{ mb: 4, color: "primary.dark" }}
                    >
                      Send Us a Message
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </Grid>
                        <Grid size={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subject: e.target.value,
                              })
                            }
                            required
                          />
                        </Grid>
                        <Grid size={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            required
                          />
                        </Grid>
                        <Grid size={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="large"
                            title="Send message"
                            disabled={isSubmitting}
                            startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ mb: 4, color: "primary.dark" }}
                >
                  Contact Info
                </Typography>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card sx={{ p: 2, mb: 2 }}>
                      <CardContent sx={{ display: "flex", gap: 2, py: 1 }}>
                        <Box sx={{ color: "primary.main" }}>{info.icon}</Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ color: "primary.dark" }}
                          >
                            {info.title}
                          </Typography>
                          {info.details.map((detail, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              color="text.secondary"
                            >
                              {detail}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert
            severity={snackbar.severity}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Layout>
    </>
  );
};

export default Contact;
