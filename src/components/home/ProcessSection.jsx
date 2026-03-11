import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  { number: 1, title: 'Discovery', description: 'Understanding your needs' },
  { number: 2, title: 'Strategy', description: 'Creating a roadmap' },
  { number: 3, title: 'Design', description: 'Crafting user experiences' },
  { number: 4, title: 'Development', description: 'Building solutions' },
  { number: 5, title: 'Launch', description: 'Deploying & optimizing' },
];

const ProcessSection = () => (
  <Box component="section" sx={{ py: 10, bgcolor: 'white' }}>
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h2" sx={{ mb: 2, color: 'primary.dark' }}>Our Process</Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>Five steps to transform your vision into reality</Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {steps.map((step, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={index}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
              <Paper elevation={0} sx={{ textAlign: 'center', p: 3, bgcolor: 'transparent' }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, mx: 'auto', mb: 2 }}>{step.number}</Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, color: 'primary.dark' }}>{step.title}</Typography>
                <Typography variant="body2" color="text.secondary">{step.description}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ProcessSection;
