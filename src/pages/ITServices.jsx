import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import ComputerIcon from "@mui/icons-material/Computer";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CloudIcon from "@mui/icons-material/Cloud";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";

// const services = [
//   {
//     icon: <ComputerIcon sx={{ fontSize: 48 }} />,
//     title: "Web Development",
//     description: "Custom web applications for your business.",
//     features: ["Responsive Design", "PWA", "E-commerce", "Custom CMS"],
//   },
//   {
//     icon: <IntegrationInstructionsIcon sx={{ fontSize: 48 }} />,
//     title: "Middleware Solutions",
//     description: "Seamless system integration.",
//     features: [
//       "API Development",
//       "System Integration",
//       "Data Migration",
//       "Legacy Modernization",
//     ],
//   },
//   {
//     icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
//     title: "Tech Support",
//     description: "24/7 technical support.",
//     features: [
//       "Help Desk",
//       "Remote Support",
//       "On-site Assistance",
//       "Maintenance",
//     ],
//   },
//   {
//     icon: <CloudIcon sx={{ fontSize: 48 }} />,
//     title: "Cloud Services",
//     description: "Scalable cloud solutions.",
//     features: ["Cloud Migration", "AWS & Azure", "DevOps", "Serverless"],
//   },
//   {
//     icon: <SecurityIcon sx={{ fontSize: 48 }} />,
//     title: "Cybersecurity",
//     description: "Protect your digital assets.",
//     features: [
//       "Security Audits",
//       "Penetration Testing",
//       "Compliance",
//       "Training",
//     ],
//   },
// ];
const services = [
  {
    icon: <ComputerIcon sx={{ fontSize: 64 }} />,
    title: "Web Development",
    description:
      "Create powerful, scalable web applications tailored to your business needs.",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 64 }} />,
    title: "Middleware Solutions",
    description:
      "Seamlessly connect your systems and enable efficient data flow across platforms.",
    features: [
      "API Development & Integration",
      "Enterprise Service Bus (ESB)",
      "Data Synchronization",
      "Legacy System Integration",
      "Microservices Architecture",
      "Message Queue Implementation",
    ],
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 64 }} />,
    title: "Technical Support",
    description:
      "Round-the-clock support to ensure your systems run smoothly and efficiently.",
    features: [
      "24/7 Help Desk Support",
      "System Monitoring",
      "Performance Tuning",
      "Bug Fixes & Updates",
      "Security Patches",
      "Training & Documentation",
    ],
  },
  {
    icon: <CloudIcon sx={{ fontSize: 64 }} />,
    title: "Cloud Services",
    description:
      "Leverage cloud technology for scalability, reliability, and cost efficiency.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps Implementation",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Security",
    ],
  },
  {
    icon: <MobileFriendlyIcon sx={{ fontSize: 64 }} />,
    title: "Mobile Development",
    description:
      "Build engaging mobile applications for iOS and Android platforms.",
    features: [
      "Native App Development",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "In-App Analytics",
    ],
  },
  {
    icon: <StorageIcon sx={{ fontSize: 64 }} />,
    title: "Database Management",
    description:
      "Design and optimize databases for performance, security, and scalability.",
    features: [
      "Database Design",
      "Performance Optimization",
      "Data Migration",
      "Backup & Recovery",
      "Database Security",
      "NoSQL & SQL Solutions",
    ],
  },
];
const ITServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>IT Services - Pranalyticx</title>
        <meta
          name="description"
          content="Explore Pranalyticx IT services including web development, middleware, cloud, and cybersecurity."
        />
      </Helmet>
      <Layout>
        <Box
          sx={{
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            backgroundImage: `linear-gradient(rgba(3, 17, 104, 0.85), rgba(20, 118, 174, 0.8)), url(/images/it-services.jpg)`,
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
                  IT Services
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Comprehensive technology solutions for your business
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
        <Box sx={{ py: 10, bgcolor: "background.default" }}>
          <Container maxWidth="xl">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ color: "primary.dark" }}
              >
                Our IT Solutions
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <motion.div
                    style={{ flex: 1, height: "100%" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        p: 3,
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: 6,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <CardContent>
                        <Box sx={{ color: "primary.main", mb: 2 }}>
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{ mb: 2, color: "primary.dark" }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 3 }}
                        >
                          {service.description}
                        </Typography>
                        <List dense>
                          {service.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircleIcon
                                  sx={{ color: "secondary.main", fontSize: 20 }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box sx={{ py: 8, bgcolor: "primary.dark", textAlign: "center" }}>
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 3, color: "white" }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                title="Request consultation"
              >
                Request Consultation
              </Button>
            </motion.div>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default ITServices;
