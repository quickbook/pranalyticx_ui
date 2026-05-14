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
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DevicesIcon from "@mui/icons-material/Devices";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
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

/* ─── Program sections data ─────────────────────────────────────── */
const sections = [
  {
    tag: "Education Program",
    title: "Building Foundational Engineering Competencies",
    subtitle:
      "A structured program that equips students with the technical literacy to confidently engage with real-world automation and engineering systems from the ground up.",
    bullets: [
      {
        heading: "Industry-relevant hardware exposure",
        detail:
          "Hands-on experience with sensors, controllers, and automation components used in real manufacturing environments.",
      },
      {
        heading: "STEM-aligned curriculum",
        detail:
          "Coursework mapped to national engineering and technology standards, ensuring students are exam-ready and industry-aware.",
      },
      {
        heading: "Project-based learning",
        detail:
          "Students design and build working prototypes, bridging the gap between classroom theory and applied engineering practice.",
      },
      {
        heading: "Educator progress dashboard",
        detail:
          "Real-time tools that help teachers monitor individual student milestones and intervene early when support is needed.",
      },
    ],
    image: "/images/hero-education.jpeg",
    alt: "Students working with engineering automation systems in a classroom",
    reverse: false,
  },
  {
    tag: "AI Platform",
    title: "AI-Powered Literacy Enhancement Platform",
    subtitle:
      "Eye-tracking combined with adaptive AI creates deeply personalised reading experiences — and gives teachers the real-time insights they need to accelerate every learner.",
    bullets: [
      {
        heading: "Eye-tracking reading analysis",
        detail:
          "Identifies exactly where students struggle — skipped words, regressions, slow fixations — and adapts difficulty in real time.",
      },
      {
        heading: "Personalised AI learning pathways",
        detail:
          "Every student gets a unique content sequence tailored to their comprehension level, vocabulary gaps, and reading pace.",
      },
      {
        heading: "Gamified engagement loops",
        detail:
          "Rewards, streaks, and adaptive challenges keep students motivated and coming back daily without external pressure.",
      },
      {
        heading: "Live teacher analytics",
        detail:
          "Dashboards surface actionable class-wide and individual data so educators can focus time where it matters most.",
      },
    ],
    image: "/images/hero-eyetracking.jpg",
    alt: "Student using AI-powered eye-tracking literacy platform",
    reverse: true,
  },
];

/* ─── Bullet row ─────────────────────────────────────────────── */
const BulletRow = ({ heading, detail, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <Box sx={{ display: "flex", gap: 2, mb: 2.5 }}>
      <CheckCircleRoundedIcon
        sx={{ color: "#1476AE", fontSize: 20, mt: "3px", flexShrink: 0 }}
      />
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.95rem",
            color: "#031168",
            mb: 0.4,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{ fontSize: "0.9rem", color: "#5A6880", lineHeight: 1.65 }}
        >
          {detail}
        </Typography>
      </Box>
    </Box>
  </motion.div>
);

/* ─── Section ────────────────────────────────────────────────── */
const ProgramSection = ({ section }) => {
  const { tag, title, subtitle, bullets, image, alt, reverse } = section;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, md: 4 },
        bgcolor: reverse ? "#F5F7FA" : "#fff",
        borderBottom: "2px solid #d5d5d5",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
          }}
        >
          {/* ── Image ── */}
          <Box sx={{ order: { xs: 1, md: reverse ? 2 : 1 } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  boxShadow: "0 24px 64px rgba(3,17,104,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.7s ease",
                    "&:hover": { transform: "scale(1.04)" },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 55%, rgba(3,17,104,0.18) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* ── Content ── */}
          <Box sx={{ order: { xs: 2, md: reverse ? 1 : 2 } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <Chip
                label={tag}
                size="small"
                sx={{
                  mb: 2.5,
                  bgcolor: "rgba(20,118,174,0.1)",
                  color: "#1476AE",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(20,118,174,0.2)",
                  borderRadius: "6px",
                  height: 26,
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.65rem", md: "2rem", lg: "2.2rem" },
                  color: "#031168",
                  lineHeight: 1.2,
                  mb: 2,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.97rem", md: "1.05rem" },
                  color: "#5A6880",
                  lineHeight: 1.75,
                  mb: 4,
                  pl: 2,
                  borderLeft: "3px solid #1476AE",
                }}
              >
                {subtitle}
              </Typography>

              <Box>
                {bullets.map((b, i) => (
                  <BulletRow
                    key={i}
                    heading={b.heading}
                    detail={b.detail}
                    delay={0.08 * i}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const EduTech = () => {
  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover Pranalyticx EduTech solutions - LMS, digital curriculum, virtual classrooms, and analytics."
        />
        <title>EduTech Solutions - Pranalyticx</title>
        <meta
          name="keywords"
          content="Robotics, AI Literacy, Eye Tracking, EduTech, educational technology, learning management system, digital curriculum, virtual classrooms, education analytics"
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
                  EduTech Solutions
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
                Our EduTech Solutions
              </Typography>
            </Box>
            <Box sx={{ mb: 6, borderBottom: "4px solid #E0E0E0" }}>
              {sections.map((section, i) => (
                <ProgramSection key={i} section={section} />
              ))}
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
