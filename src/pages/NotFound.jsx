import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import Layout from "../components/layout/Layout";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Pranalyticx</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Helmet>
      <Layout>
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            py: 10,
          }}
        >
          <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "8rem",
                fontWeight: 700,
                color: "primary.main",
                mb: 2,
              }}
            >
              404
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              sx={{ mb: 2, color: "primary.dark" }}
            >
              Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              The page you're looking for doesn't exist or has been moved.
            </Typography>
            <Button
              component={RouterLink}
              to="/"
              variant="contained"
              color="secondary"
              size="large"
              title="Return to homepage"
            >
              Return to Home
            </Button>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default NotFound;
