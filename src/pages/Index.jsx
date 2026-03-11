import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import HeroCarousel from '../components/home/HeroCarousel';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import { useEffect } from 'react';
import CircularServicesSection from '../components/home/CircularServicesSection';

const Index = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Pranalyticx - Innovation & Excellence in Technology</title>
        <meta
          name="description"
          content="Pranalyticx offers cutting-edge IT solutions, web development, middleware solutions, tech support, and EduTech platforms to help businesses and educational institutions achieve their goals."
        />
        <meta
          name="keywords"
          content="IT solutions, web development, middleware, tech support, edutech, software development, digital transformation"
        />
        <link rel="canonical" href="https://pranalyticx.com" />
      </Helmet>
      <Layout>
        <HeroCarousel />
        <ServicesSection />
        <CircularServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
      </Layout>
    </>
  );
};

export default Index;
