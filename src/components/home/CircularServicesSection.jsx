import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WebIcon from "@mui/icons-material/Web";
import PeopleIcon from "@mui/icons-material/People";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import GroupsIcon from "@mui/icons-material/Groups";

const services = [
  {
    icon: <ComputerIcon sx={{ fontSize: 32 }} />,
    title: "Software Development",
    color: "#ff2741",
    angle: 240,
    description: "Custom software solutions tailored to your business needs.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
    title: "IT Support & Helpdesk",
    color: "#1476ae",
    angle: -60,
    description:
      "24/7 technical support and helpdesk services to keep your business running smoothly.",
  },
  {
    icon: <WebIcon sx={{ fontSize: 32 }} />,
    title: "Web Development & Design",
    color: "#ff2741",
    angle: 0,
    description:
      "Custom websites and web applications built with modern technologies.",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 32 }} />,
    title: "Offshore Staffing",
    color: "#1476ae",
    angle: 60,
    description:
      "Access skilled professionals to extend your team capabilities.",
  },
  {
    icon: <TravelExploreIcon sx={{ fontSize: 32 }} />,
    title: "Internet Marketing",
    color: "#1476ae",
    angle: 180,
    description:
      "SEO, social media, and digital marketing to grow your online presence.",
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 32 }} />,
    title: "Mobile App Development",
    color: "#ff2741",
    angle: 120,
    description: "Native and cross-platform mobile apps for iOS and Android.",
  },
];

const CircularServicesSection = () => {
  const radius = 140;

  return (
    <Box component={"article"} sx={{ pt: 10, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ mb: 2, color: "primary.dark", fontWeight: 700 }}
          >
            Technology Services
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
          >
            Comprehensive solutions tailored to your business needs
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            maxWidth: 1120,
            mx: "auto",
            minHeight: 500,
          }}
        >
          {/* Center Circle with Icon Ring */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 360,
              height: 360,
            }}
          >
            {/* Center Circle */}
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(20, 118, 174, 0.3)",
                  zIndex: 2,
                }}
              >
                <GroupsIcon sx={{ fontSize: 44, color: "white" }} />
              </Box>
            </motion.div>

            {/* Circular Path */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: radius * 2 + 40,
                height: radius * 2 + 40,
                borderRadius: "50%",
                border: "2px dashed",
                borderColor: "grey.300",
              }}
            />

            {/* Service Icons on Circle */}
            {services.map((service, index) => {
              const angleRad = (service.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Box
                      title={service.title}
                      sx={{
                        width: 56,
                        height: 56,
                        mt: {
                          md: 0,
                          xs:
                            service.title === "Offshore Staffing" ||
                            service.title === "Mobile App Development"
                              ? 6
                              : 0,
                        },
                        borderRadius: "50%",
                        bgcolor: service.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        boxShadow: `0 4px 20px ${service.color}40`,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.15)",
                        },
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mt: 1,
                        display: { xs: "block", md: "none" },
                        fontSize: "0.8rem",
                        textAlign: "center",
                        maxWidth: 80,
                        fontWeight: 600,
                        color: "primary.dark",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </motion.div>
                </Box>
              );
            })}
          </Box>

          {/* Left Side Info Boxes */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              gap: 4,
              width: 300,
            }}
          >
            {services
              .filter((_, i) => [0, 4, 5].includes(i))
              .map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  <Box sx={{ textAlign: "right" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: service.color, mb: 0.5 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ lineHeight: 1.4, display: "block" }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
          </Box>

          {/* Right Side Info Boxes */}
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              gap: 4,
              width: 300,
            }}
          >
            {services
              .filter((_, i) => [1, 2, 3].includes(i))
              .map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: service.color, mb: 0.5 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ lineHeight: 1.4, display: "block" }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CircularServicesSection;
