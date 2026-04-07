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
import { a } from "framer-motion/client";

const reviews = [
  {
    name: "John Doe (test)",
    company: "Aqua Farms Ltd.",
    rating: 5,
    message:
      "Excellent service and seamless experience. Highly recommended! The team was very responsive and delivered everything on time with great quality.",
    date: "March 12, 2026",
  },
  {
    name: "Sarah Williams (test)",
    company: "BlueWater Co.",
    rating: 4,
    message: "Very professional team and great support throughout the project.",
    date: "February 28, 2026",
  },
  {
    name: "Michael Lee  (test)",
    company: "FishTech Solutions",
    rating: 5,
    message:
      "The platform is intuitive and helped streamline our operations. We saw a significant improvement in efficiency and data handling after adopting this solution. asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa sasasasa sasasasa asasasasas",
    date: "January 15, 2026",
  },
  {
    name: "Emily Davis (test)",
    company: "Ocean Harvest",
    rating: 5,
    message: "Amazing UI and smooth performance. Loved working with this team.",
    date: "December 20, 2025",
  },
  {
    name: "David Brown (test)",
    company: "GreenPond Systems",
    rating: 4,
    message:
      "Reliable and efficient. Delivered exactly what we needed with excellent communication and attention to detail.",
    date: "November 10, 2025",
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
            <Box key={index} sx={{ px: 2 }}>
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
