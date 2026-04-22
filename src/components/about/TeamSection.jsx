import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const teamMembers = [
  {
    name: "Subramanyam V",
    role: "Head of Development",
    image: "/images/profile-pic-dummy.png",
    bio: "Visionary leader with 10+ years in IT consulting and digital transformation.",
    linkedin: "#",
    twitter: "#",
    email: "info@pranalyticx.com",
  },
  // {
  //   name: "Harshini K",
  //   role: "CEO",
  //   image: "/images/profile-pic-dummy.png",
  //   bio: "Expert in management and emerging technologies with a passion for innovation.",
  //   linkedin: "#",
  //   twitter: "#",
  //   email: "info@pranalyticx.com",
  // },
  {
    name: "Harshini K",
    role: "EduTech Director",
    image: "/images/profile-pic-dummy.png",
    bio: "Passionate educator bridging technology and learning for modern institutions.",
    linkedin: "#",
    twitter: "#",
    email: "info@pranalyticx.com",
  },
  {
    name: "Akhil G",
    role: "Development Lead",
    image: "/images/profile-pic-dummy.png",
    bio: "Full-stack developer leading our talented engineering team to deliver excellence.",
    linkedin: "#",
    twitter: "#",
    email: "info@pranalyticx.com",
  },
  {
    name: "Swetha M",
    role: "Digital Marketing Analyst",
    image: "/images/profile-pic-dummy.png",
    bio: "Creative marketer driving impactful campaigns with data-driven insights and strategic thinking.",
    linkedin: "#",
    twitter: "#",
    email: "info@pranalyticx.com",
  },
  // {
  //   name: "Madhuri K",
  //   role: "EduTech Director",
  //   image: "/images/profile-pic-dummy.png",
  //   bio: "Passionate educator bridging technology and learning for modern institutions.",
  //   linkedin: "#",
  //   twitter: "#",
  //   email: "info@pranalyticx.com",
  // },
];

const TeamSection = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
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
            Meet Our Team
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
          >
            Dedicated professionals committed to delivering excellence and
            innovation
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <motion.div
                style={{ flex: 1, height: "100%" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 3,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box sx={{ pt: 4, pb: 2 }}>
                    <Avatar
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      title={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        border: "4px solid",
                        borderColor: "primary.main",
                        boxShadow: "0 4px 20px rgba(20, 118, 174, 0.3)",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "primary.dark" }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "secondary.main", fontWeight: 600, mb: 1 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, minHeight: 60 }}
                    >
                      {member.bio}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                    >
                      <IconButton
                        href={member.linkedin}
                        title={`${member.name}'s LinkedIn`}
                        size="small"
                        sx={{ color: "primary.main" }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        href={member.twitter}
                        title={`${member.name}'s Twitter`}
                        size="small"
                        sx={{ color: "primary.main" }}
                      >
                        <TwitterIcon />
                      </IconButton>
                      <IconButton
                        href={`mailto:${member.email}`}
                        title={`Email ${member.name}`}
                        size="small"
                        sx={{ color: "primary.main" }}
                      >
                        <EmailIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
