import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import { Box, Container, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

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
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index}>
            <motion.div {...fadeInUp}>
            <Box
              sx={{
                position: "relative",
                minHeight: { xs: "500px", md: "600px" },
                display: "flex",
                alignItems: "center",
                backgroundImage: `linear-gradient(rgba(3, 17, 104, 0.7), rgba(20, 118, 174, 0.5)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
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
    </Box>
  );
};

export default HeroCarousel;
