import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";

/* ─── Animation variants ─────────────────────────────────────── */
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const fadeInRight = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── Slide data ─────────────────────────────────────────────── */
const slides = [
  {
    title: "Innovation & Excellence in Technology",
    subtitle:
      "We assist businesses and educational institutions achieve their goals through cutting-edge IT solutions and modern learning platforms.",
    image: "/images/hero-tech-team.jpg",
    alt: "Professional tech team collaborating on innovative solutions",
  },
  {
    title: "Data-Driven Analytics Solutions",
    subtitle:
      "Transform your business with powerful analytics and insights. Make informed decisions backed by real-time data.",
    image: "/images/hero-analytics.jpg",
    alt: "Business analytics dashboard showing data visualizations",
  },
  {
    title: "Collaborative Team Excellence",
    subtitle:
      "Our expert team works together to deliver exceptional results. Partner with us for your digital transformation journey.",
    image: "/images/hero-collaboration.jpg",
    alt: "Diverse team members collaborating in a modern office environment",
  },
  {
    title: "Building Foundational Robotics & Engineering Competencies",
    subtitle:
      "This program establishes technical literacy at foundational levels, enabling students to understand how real-world automation systems are powered and structured.",
    image: "/images/hero-education.jpeg",
    alt: "Students engaging with interactive educational technology in a classroom",
  },
  {
    title: "AI-Powered Eye Tracking Literacy Enhancement Platform",
    subtitle:
      "Eye-tracking with AI creates personalized literacy pathways, boosting comprehension and vocabulary. Teachers track progress through real-time analytics dashboards.",
    image: "/images/hero-eyetracking.jpg",
    alt: "Students engaging with interactive educational technology in a classroom",
  },
];

/* ─── Custom arrow buttons ───────────────────────────────────── */
const ArrowButton = ({ direction, onClick }) => (
  <IconButton
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    sx={{
      display: { xs: "none", md: "flex" },
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      ...(direction === "prev"
        ? { left: { xs: 8, md: 16 } }
        : { right: { xs: 8, md: 16 } }),
      width: { xs: 0, md: 50 },
      height: { xs: 0, md: 50 },
      //bgcolor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(6px)",
      //border: "1.5px solid rgba(255, 255, 255, 0.4)",
      color: "white",
      transition: "all 0.25s ease",
      "&:hover": {
        bgcolor: "rgba(255, 255, 255, 0.3)",
        borderColor: "white",
        transform: "translateY(-50%) scale(1.08)",
      },
    }}
  >
    {direction === "prev" ? (
      <ChevronLeft sx={{ fontSize: { xs: 22, md: 35 } }} />
    ) : (
      <ChevronRight sx={{ fontSize: { xs: 22, md: 35 } }} />
    )}
  </IconButton>
);

/* ─── Component ──────────────────────────────────────────────── */
const HeroCarousel = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false, // We use custom arrows below
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          "& ul": { margin: 0, padding: 0 },
          "& li button:before": {
            color: "white",
            opacity: 0.5,
            fontSize: "10px",
          },
          "& li.slick-active button:before": {
            color: "white",
            opacity: 1,
          },
        }}
      >
        <ul>{dots}</ul>
      </Box>
    ),
  };

  return (
    <Box component={"article"} sx={{ position: "relative" }}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <Box key={index}>
            <motion.div {...fadeInUp}>
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: "500px", md: "600px" },
                  display: "flex",
                  alignItems: "center",
                  backgroundImage: `linear-gradient(rgba(3, 17, 104, 0.6), rgba(20, 118, 174, 0.2)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={slide.alt}
              >
                <Container maxWidth="lg">
                  <Box sx={{ maxWidth: "650px", py: 8 }}>
                    <motion.div {...fadeInRight}>
                      <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: { xs: "2rem", md: "3rem" },
                          mb: 3,
                          lineHeight: 1.2,
                        }}
                      >
                        {slide.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          opacity: 0.9,
                          mb: 4,
                          fontWeight: 400,
                          lineHeight: 1.6,
                        }}
                      >
                        {slide.subtitle}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Button
                          component={RouterLink}
                          to="/contact"
                          variant="contained"
                          color="secondary"
                          size="large"
                          title="Get started with our services"
                        >
                          Get Started
                        </Button>
                        <Button
                          component={RouterLink}
                          to="/about"
                          variant="outlined"
                          size="large"
                          title="Learn more about Pranalyticx"
                          sx={{
                            color: "white",
                            borderColor: "white",
                            "&:hover": {
                              borderColor: "white",
                              bgcolor: "rgba(255,255,255,0.1)",
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </motion.div>
                  </Box>
                </Container>
              </Box>
            </motion.div>
          </Box>
        ))}
      </Slider>

      {/* Custom navigation arrows rendered outside Slider for reliable positioning */}
      <ArrowButton
        direction="prev"
        onClick={() => sliderRef.current?.slickPrev()}
      />
      <ArrowButton
        direction="next"
        onClick={() => sliderRef.current?.slickNext()}
      />
    </Box>
  );
};

export default HeroCarousel;
