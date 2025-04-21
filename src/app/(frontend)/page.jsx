import React from 'react'
import Layouts from '../../layouts/Layouts'

import { getSortedPostsData } from '../../lib/posts'
import { getSortedProjectsData } from '../../lib/projects'

import PartnersSection from '../../components/sections/Partners'
import ServicesSection from '../../components/sections/Services'
import HowItWorksSection from '../../components/sections/HowItWorks'
import SkillsSection from '../../components/sections/Skills'
import ContactSection from '../../components/sections/Contact'
import Divider from '../../components/sections/Divider'
import EventsSlider from "../../components/sliders/Events"
import LatestProjectsSlider from '../../components/sliders/LatestProjects'
import LatestPostsSlider from '../../components/sliders/LatestPosts'
import HeroSlideshowSlider from '../../components/sliders/HeroSlideshow'
import TestimonialSlider from '../../components/sliders/Testimonial'
import AboutSection from '../../components/sections/About'
import { WorkWithUsSection } from '../../components/sections/WorkWithUs'
import { WhatWeDeliver } from '../../components/sections/WhatWeDeliver'
import Service2Reviews from '../../components/sliders/Service2Reviews'
import { AboutOverview } from '../../components/sections/AboutOverview'
import FAQ from '../../components/sections/FAQ'
export default async function Page() {
  const { posts, projects } = await getData()

  return (
    <Layouts transparent>
      <HeroSlideshowSlider />
      <AboutSection />
      <WorkWithUsSection />
      <LatestProjectsSlider projects={projects} />
      <EventsSlider />
      <WhatWeDeliver />
      <Service2Reviews />
      <AboutOverview />
      <FAQ />
      {/*<PartnersSection />*/}
      {/*<Divider />*/}
      {/*<ServicesSection />*/}
      {/*<HowItWorksSection />*/}
      {/*<SkillsSection />*/}
      {/*<Divider />*/}
      {/*<LatestPostsSlider posts={posts} />*/}
      {/*<TestimonialSlider />*/}
      <ContactSection />
    </Layouts>
  )
}

async function getData() {
  // Make sure these functions are either async or wrapped with Promise.resolve if they're synchronous
  const posts = await getSortedPostsData()
  const projects = await getSortedProjectsData()

  return {
    posts,
    projects,
  }
}
