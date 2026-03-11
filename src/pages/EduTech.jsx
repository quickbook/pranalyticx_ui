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
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DevicesIcon from "@mui/icons-material/Devices";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";

const features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: "Learning Management System",
    description: "Comprehensive LMS platform.",
    features: [
      "Course Management",
      "Student Tracking",
      "Assignments",
      "Grading",
    ],
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
    title: "Digital Curriculum",
    description: "Interactive digital content.",
    features: [
      "Interactive Lessons",
      "Video Content",
      "Quizzes",
      "Progress Tracking",
    ],
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 48 }} />,
    title: "Virtual Classrooms",
    description: "Real-time virtual solutions.",
    features: ["Live Classes", "Screen Sharing", "Breakout Rooms", "Recording"],
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 48 }} />,
    title: "Analytics & Reporting",
    description: "Data-driven insights.",
    features: [
      "Dashboards",
      "Custom Reports",
      "Predictive Analytics",
      "Parent Portal",
    ],
  },
];

const EduTech = () => {
  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>EduTech Platform - Pranalyticx</title>
        <meta
          name="description"
          content="Discover Pranalyticx EduTech solutions - LMS, digital curriculum, virtual classrooms, and analytics."
        />
      </Helmet>
      <Layout>
        <Box
          sx={{
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            backgroundImage: `linear-gradient(rgba(3, 17, 104, 0.85), rgba(20, 118, 174, 0.8)), url(/images/edutech.jpg)`,
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
                  EduTech Platform
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Modern learning solutions for schools
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
                EduTech Solutions
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
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
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{ mb: 2, color: "primary.dark" }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 3 }}
                        >
                          {feature.description}
                        </Typography>
                        <List dense>
                          {feature.features.map((item, idx) => (
                            <ListItem key={idx} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircleIcon
                                  sx={{ color: "secondary.main", fontSize: 20 }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={item} />
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
        <Box sx={{ py: 10, bgcolor: "white" }}>
          <Container maxWidth="xl">
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/images/edutech.jpg"
                    alt="Students using educational technology"
                    title="EduTech in action"
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
                    Transform Education
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 4, lineHeight: 1.8 }}
                  >
                    Our platform makes learning more engaging, accessible, and
                    effective.
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="secondary"
                    size="large"
                    title="Schedule demo"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default EduTech;
