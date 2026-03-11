import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import CircularServicesSection from "../components/home/CircularServicesSection";
import TeamSection from "../components/about/TeamSection";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useEffect } from "react";

const stats = [
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    number: "100+",
    label: "Happy Clients",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    number: "200+",
    label: "Projects Completed",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40 }} />,
    number: "15+",
    label: "Countries Served",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    number: "10+",
    label: "Years Experience",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us - Pranalyticx | Our Story and Mission</title>
        <meta
          name="description"
          content="Learn about Pranalyticx - a leading IT solutions provider with 10+ years of experience."
        />
      </Helmet>
      <Layout>
        <Box
          sx={{
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            backgroundImage: `linear-gradient(rgba(3, 17, 104, 0.85), rgba(20, 118, 174, 0.8)), url(/images/about-team.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="lg">
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
                  About Pranalyticx
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Your trusted partner in digital transformation
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
        <Box sx={{ py: 10, bgcolor: "background.default" }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/images/about-team.jpg"
                    alt="Pranalyticx team collaborating"
                    title="Our dedicated team"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    }}
                  />
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{ mb: 3, color: "primary.dark" }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.8 }}
                  >
                    At Pranalyticx, we are dedicated to empowering businesses
                    with innovative technology solutions.
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="secondary"
                    size="large"
                    title="Get in touch"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ py: 8, bgcolor: "primary.main" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        textAlign: "center",
                        bgcolor: "transparent",
                        color: "white",
                        boxShadow: "none",
                      }}
                    >
                      <CardContent>
                        <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <CircularServicesSection />
        <TeamSection />
      </Layout>
    </>
  );
};

export default About;
