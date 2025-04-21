import React from 'react';
import Link from "next/link";
import Content from "../../data/sections/call-to-action.json";

interface TitleParts {
  first: string;
  second: string;
  third: string;
}

interface CallToActionContent {
  bg_image: string;
  title: TitleParts;
  subtitle: string;
  button: string;
  link: string;
}

const CallToActionSection: React.FC = () => {
  // Type assertion to ensure Content has the expected structure
  const typedContent = Content as CallToActionContent;
  
  return (
    <section className="mil-call-to-action mil-p-120-120">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, left: "12%" }}
      />
      <img
        src={typedContent.bg_image}
        className="mil-background-image"
        style={{ objectPosition: "center" }}
        alt="image"
      />
      <div className="mil-overlay" />
      <div className="container">
        <div className="mil-cta-content">
          <span className="mil-suptitle mil-light-soft mil-suptitle-2 mil-mb-30">
            {typedContent.subtitle}
          </span>
          <h2 className="mil-h1 mil-light mil-mb-30">
            {typedContent.title.first} <span className="mil-accent">{typedContent.title.second}</span> {typedContent.title.third}
          </h2>
          <Link href={typedContent.link} className="mil-link">
            <span className="mil-light">{typedContent.button}</span>
            <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;