import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SpeedIcon from "@mui/icons-material/Speed";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const features = [
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />,
    title: "Proven Expertise",
    description: "10+ years in the industry",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Fast Delivery",
    description: "Agile development process",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: "Quality Code",
    description: "Best practices and standards",
  },
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 40 }} />,
    title: "24/7 Support",
    description: "Always here to help",
  },
];

const WhyChooseUsSection = () => (
  <Box
    component="section"
    sx={{ py: 10, bgcolor: "white", color: "primary.dark" }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
              Why Choose Pranalyticx?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, opacity: 0.9, lineHeight: 1.8 }}
            >
              We combine technical expertise with a deep understanding of
              business needs to deliver solutions that drive real results.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="secondary"
              size="large"
              title="Start your project with us"
            >
              Start Your Project
            </Button>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <motion.div
                  style={{ flex: 1, height: "100%" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      height: "100%",
                      p: 3,
                      bgcolor: "rgba(94, 149, 252, 0.2)",
                      color: "primary.dark",
                      textAlign: "center",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Box sx={{ color: "secondary.main", mb: 1 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default WhyChooseUsSection;
