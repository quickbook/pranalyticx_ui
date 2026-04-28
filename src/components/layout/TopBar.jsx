import { Box, Container, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { pranalyticsAbout } from '../../commonfiles/pranalyticsAbout';

const TopBar = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        bgcolor: 'primary.main',
        color: 'white',
        py: 0.5,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Link
              href={"mailto:" + pranalyticsAbout.email}
              title="Send us an email"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.75rem',
                '&:hover': { color: 'secondary.main' },
              }}
            >
              <EmailIcon sx={{ fontSize: 16 }} />
              <Typography variant="body3">{pranalyticsAbout.email}</Typography>
            </Link>
            <Link
              href={"tel:" + pranalyticsAbout.phone}
              title="Call us"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.75rem',
                '&:hover': { color: 'secondary.main' },
              }}
            >
              <PhoneIcon sx={{ fontSize: 16 }} />
              <Typography variant="body3">{pranalyticsAbout.phone}</Typography>
            </Link>
            {/* <Link
              href={"tel:" + pranalyticsAbout.altPhone}
              title="Call us"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.75rem',
                '&:hover': { color: 'secondary.main' },
              }}
            >
              <PhoneIcon sx={{ fontSize: 16 }} />
              <Typography variant="body3">{pranalyticsAbout.altPhone}</Typography>
            </Link> */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                fontSize: '0.75rem',
              }}
            >
              <LocationOnIcon sx={{ fontSize: 16 }} />
              <Typography variant="body3">{pranalyticsAbout.address}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1}}>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Facebook"
              sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
            >
              <FacebookIcon sx={{ fontSize: 20, pt: 0.5 }} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Twitter"
              sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
            >
              <TwitterIcon sx={{ fontSize: 20, pt: 0.5 }} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect on LinkedIn"
              sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
            >
              <LinkedInIcon sx={{ fontSize: 20, pt: 0.5 }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;
