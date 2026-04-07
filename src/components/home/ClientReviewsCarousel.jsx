import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";

// Import slick styles (make sure installed)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Ravi Kumar",
    company: "EduTech Academy",
    rating: 5,
    message:
      "The team delivered a highly scalable learning management system tailored to our needs. The UI is intuitive, and the backend integrations have significantly improved our student management and reporting workflows.",
    date: "March 18, 2026",
  },
  {
    id: 2,
    name: "Anita Sharma",
    company: "NextGen IT Solutions",
    rating: 5,
    message:
      "Their expertise in middleware integration helped us connect multiple services seamlessly. API performance and security implementation exceeded our expectations.",
    date: "February 25, 2026",
  },
  {
    id: 3,
    name: "Mohammed Arif",
    company: "SmartSchool Systems",
    rating: 4,
    message:
      "We partnered with them for a complete website redesign and backend modernization. The platform is now faster, more responsive, and much easier for our staff to use.",
    date: "January 30, 2026",
  },
  {
    id: 4,
    name: "Priya Reddy",
    company: "Digital Learning Hub",
    rating: 5,
    message:
      "Excellent work on our education portal. Features like course management, user authentication, and analytics dashboards were implemented flawlessly.",
    date: "December 22, 2025",
  },
  {
    id: 5,
    name: "Karthik Varma",
    company: "CloudBridge Technologies",
    rating: 5,
    message:
      "Their team built a robust web application with smooth API integrations and modern UI. The project was delivered on time with great attention to scalability and maintainability.",
    date: "November 14, 2025",
  },
  ,
  {
    id: 6,
    name: "Sneha Iyer",
    company: "LearnSphere Online",
    rating: 5,
    message:
      "From requirements to deployment, the process was smooth and transparent. The team built a feature-rich e-learning platform with secure authentication, video delivery, and performance tracking.",
    date: "October 5, 2025",
  },
  {
    id: 7,
    name: "Rahul Mehta",
    company: "APIWorks Pvt Ltd",
    rating: 4,
    message:
      "Strong technical expertise in API design and middleware orchestration. They helped us modernize legacy systems and improve system reliability with clean architecture.",
    date: "September 18, 2025",
  },
];

const ClientReviewsCarousel = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "background.light" }}>
      <Helmet>
        <title>Client Reviews</title>
      </Helmet>

      <Typography
        variant="h4"
        align="center"
        sx={{ color: "text.primary", fontWeight: 600, mb: 6 }}
      >
        What Our Clients Say
      </Typography>

      <Slider {...settings}>
        {reviews.map((review, index) => {
          const isExpanded = expanded[index];
          const isLong = review.message.length > 120; // heuristic for ~3 lines

          return (
            <Box key={index} sx={{ px: 2,py: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    minHeight: 240,
                    borderRadius: "20px",
                    //background: "#c6dafc",
                    color: "text.primary",
                    height: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    "&:hover": {
                      boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
                      transform: "translateY(-5px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar sx={{ mr: 2 }}>{review.name.charAt(0)}</Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {review.name}
                        </Typography>
                        <Typography variant="body2" color="gray">
                          {review.company}
                        </Typography>
                      </Box>
                    </Box>

                    <Rating value={review.rating} readOnly sx={{ mb: 2 }} />

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: isExpanded ? "unset" : 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      "{review.message}"
                    </Typography>

                    {isLong && (
                      <Button
                        size="small"
                        onClick={() => toggleExpand(index)}
                        sx={{ textTransform: "none", p: 0, minWidth: "auto" }}
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </Button>
                    )}

                    <Typography
                      variant="caption"
                      color="gray"
                      display="block"
                      mt={1}
                    >
                      {review.date}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default ClientReviewsCarousel;
