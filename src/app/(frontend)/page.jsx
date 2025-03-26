import React from 'react'
import Layouts from '../../layouts/Layouts.js'

import { getSortedPostsData } from '../../lib/posts.js'
import { getSortedProjectsData } from '../../lib/projects.js'

import PartnersSection from '../../components/sections/Partners.jsx'
import ServicesSection from '../../components/sections/Services.jsx'
import HowItWorksSection from '../../components/sections/HowItWorks.jsx'
import SkillsSection from '../../components/sections/Skills.jsx'
import ContactSection from '../../components/sections/Contact.jsx'
import Divider from '../../components/sections/Divider.jsx'

import LatestProjectsSlider from '../../components/sliders/LatestProjects.jsx'
import LatestPostsSlider from '../../components/sliders/LatestPosts.jsx'
import HeroSlideshowSlider from '../../components/sliders/HeroSlideshow.jsx'
import TestimonialSlider from '../../components/sliders/Testimonial.jsx'

export default async function Page() {
  const { posts, projects } = await getData();

  return (
    <Layouts transparent>
      <HeroSlideshowSlider />
      <PartnersSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <LatestProjectsSlider projects={projects} />
      <HowItWorksSection />
      <SkillsSection />
      <Divider />
      <LatestPostsSlider posts={posts} />
      <TestimonialSlider />
      <ContactSection />
    </Layouts>
  )
}


async function getData() {
  // Make sure these functions are either async or wrapped with Promise.resolve if they're synchronous
  const posts = await getSortedPostsData();
  const projects = await getSortedProjectsData();

  return {
    posts,
    projects
  };
}