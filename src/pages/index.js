import React from "react";

import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import ExperienceSection from "../components/ExperienceSection";


export default function IndexPage() {
  return (
    <>
      <Seo title="Sushant's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ExperienceSection sectionId="experience" heading="Experience" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact Me" />
      </Page>
    </>
  );
}
