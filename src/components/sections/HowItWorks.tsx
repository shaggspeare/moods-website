import React from 'react';
import Content from "../../data/sections/how-it-works.json";

interface TitleParts {
  first: string;
  second: string;
  third: string;
}

interface Button {
  label: string;
  link: string;
}

interface HowItWorksItem {
  name: string;
  icon: string;
  text: string;
}

interface HowItWorksContent {
  title: TitleParts;
  subtitle: string;
  items: HowItWorksItem[];
  button1: Button;
  button2: Button;
}

const HowItWorksSection: React.FC = () => {
  // Type assertion to ensure Content has the expected structure
  const typedContent = Content as HowItWorksContent;
  
  return (
    <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "20%" }} />
      <div
        className="mil-deco"
        style={{ bottom: 0, left: "30%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          {typedContent.subtitle}
        </span>
        <h2 className="mil-mb-90">
          {typedContent.title.first} <span className="mil-accent">{typedContent.title.second}</span> {typedContent.title.third}
        </h2>
        <div className="row">
          {typedContent.items.map((item, key) => (
            <div className="col-md-6 col-xl-3" key={`how-it-works-i-${key}`}>
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <h5>{item.name}</h5>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <a href={typedContent.button1.link} className="mil-link mil-mb-30">
              <span>{typedContent.button1.label}</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <a href={typedContent.button2.link} className="mil-button mil-border mil-mb-30">
                <span>{typedContent.button2.label}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;