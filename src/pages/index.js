import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact Me" />
      </Page>
    </>
  );
}
