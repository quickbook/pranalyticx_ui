import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import ComputerIcon from '@mui/icons-material/Computer';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';

const services = [
  { icon: <ComputerIcon sx={{ fontSize: 48 }} />, title: 'Web Development', description: 'Custom web applications built with modern technologies.' },
  { icon: <IntegrationInstructionsIcon sx={{ fontSize: 48 }} />, title: 'Middleware Solutions', description: 'Seamless integration between your business applications.' },
  { icon: <SupportAgentIcon sx={{ fontSize: 48 }} />, title: 'Tech Support', description: '24/7 technical support to keep systems running smoothly.' },
  { icon: <SchoolIcon sx={{ fontSize: 48 }} />, title: 'EduTech Platform', description: 'Modern learning solutions for schools and institutions.' },
];

const ServicesSection = () => (
  <Box component="section" sx={{ py: 10, bgcolor: 'background.default' }}>
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h2" sx={{ mb: 2, color: 'primary.dark' }}>Our Services</Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>Comprehensive solutions designed to drive your business forward</Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <motion.div style={{height: "100%"}} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 40px rgba(20, 118, 174, 0.15)' } }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, color: 'primary.dark' }}>{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{service.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ServicesSection;
