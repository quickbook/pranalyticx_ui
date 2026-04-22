import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Stack,
  Grid,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { pranalyticsAbout } from "../../commonfiles/pranalyticsAbout";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#111111", color: "white", pt: 8, pb: 4 }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              {/* <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontFamily: "Poppins",
                }}
              >
                P
              </Box> */}
              <Box
                component="img"
                sx={{ height: 38 }}
                alt="Pranalyticx Logo"
                src="/logo.png"
              />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Poppins", fontWeight: 700 }}
              >
                Pranalyticx
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              We assist businesses and educational institutions achieve their
              goals through cutting-edge IT solutions and modern learning
              platforms.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                title="Facebook"
                sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                title="Twitter"
                sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                title="LinkedIn"
                sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                title="Instagram"
                sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins" }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "IT Services", path: "/it-services" },
                { label: "EduTech", path: "/edutech" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  title={`Go to ${item.label}`}
                  sx={{
                    color: "white",
                    opacity: 0.8,
                    textDecoration: "none",
                    "&:hover": { opacity: 1, color: "secondary.main" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins" }}>
              Services
            </Typography>
            <Stack spacing={1}>
              {[
                "Web Development",
                "Middleware Solutions",
                "Tech Support",
                "EduTech Platform",
                "Custom Software",
              ].map((service) => (
                <Typography key={service} variant="body2" sx={{ opacity: 0.8 }}>
                  {service}
                </Typography>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins" }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon sx={{ color: "secondary.main" }} />
                <Typography variant="body2">
                  {pranalyticsAbout.address}
                </Typography>
              </Box>
              <Link
                href={"tel:" + pranalyticsAbout.phone}
                title="Call us"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                <PhoneIcon sx={{ color: "secondary.main" }} />
                <Typography variant="body2">
                  {pranalyticsAbout.phone}
                </Typography>
              </Link>
              <Link
                href={"tel:" + pranalyticsAbout.altPhone}
                title="Call us"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                <PhoneIcon sx={{ color: "secondary.main" }} />
                <Typography variant="body2">
                  {pranalyticsAbout.altPhone}
                </Typography>
              </Link>
              <Link
                href={"mailto:" + pranalyticsAbout.email}
                title="Email us"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                <EmailIcon sx={{ color: "secondary.main" }} />
                <Typography variant="body2">
                  {pranalyticsAbout.email}
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 6,
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Pranalyticx. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
