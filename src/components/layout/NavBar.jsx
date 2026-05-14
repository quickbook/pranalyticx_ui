import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Padding } from "@mui/icons-material";

const ContactButton = ({ btnText, visibility }) => (
  <Button
    component={RouterLink}
    to="/contact"
    variant="contained"
    color="secondary"
    title="Get in touch"
    endIcon={<SendRoundedIcon />}
    sx={{
      //ml: 2,
      display:
        visibility === "mobile"
          ? { xs: "flex", md: "none" }
          : { xs: "none", md: "flex" },
      px: 2,
      py: 1,
      borderRadius: "999px",
      fontWeight: 600,
      textTransform: "none",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
      },
    }}
  >
    {btnText}
  </Button>
);

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "IT Services", path: "/it-services" },
  { label: "EduTech Solutions", path: "/edutech" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white", color: "text.primary" }}>
      <Container
      component={"nav"}
        maxWidth="xl"
        sx={{ padding: { xs: "0 4px 0 8px", md: "0 16px" } }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  bgcolor: "primary.dark",
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
                variant="h6"
                sx={{
                  background: `linear-gradient(135deg, #1476ae 10%, #031168 60%, #ff5a6e 90%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  fontFamily: "serif",
                }}
              >
                Pranalyticx
              </Typography>
            </Box>
          </RouterLink>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                title={`Navigate to ${item.label}`}
                sx={{
                  color: isActive(item.path)
                    ? "primary.dark"
                    : "text.secondary",
                  //fontWeight: isActive(item.path) ? 600 : 500,
                  fontWeight: 600,
                  "&:hover": { bgcolor: "primary.light", color: "white" },
                  borderBottom: isActive(item.path) ? "2px solid" : "none",
                  borderColor: "primary.dark",
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <ContactButton btnText="Get In Touch" visibility="desktop" />

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="close navigation menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    color: isActive(item.path)
                      ? "primary.main"
                      : "text.primary",
                    fontWeight: isActive(item.path) ? 600 : 400,
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <ContactButton btnText="Get In Touch" visibility="mobile" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
