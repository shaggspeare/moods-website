import React from 'react';
import Content from "../../data/sections/skills.json";

interface TitleParts {
  first: string;
  second: string;
  third: string; // Contains HTML markup
}

interface Button {
  label: string;
  link: string;
}

interface SkillItem {
  label: string;
  value: string; // Using string as it's used in both string concatenation and as a number
}

interface SkillsContent {
  title: TitleParts;
  subtitle: string;
  description: string;
  items: SkillItem[];
  button: Button;
}

const SkillsSection: React.FC = () => {
  // Type assertion to ensure Content has the expected structure
  const typedContent = Content as SkillsContent;
  
  return (
    <section className="mil-skills mil-p-120-90">
      <div className="container">
        <div className="row align-items-end mil-mb-90">
          <div className="col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {typedContent.subtitle}
            </span>
            <h2>
              {typedContent.title.first} <span className="mil-accent">{typedContent.title.second}</span> <span dangerouslySetInnerHTML={{__html: typedContent.title.third}} />
            </h2>
          </div>
          <div className="col-xl-6">
            <p className="mil-mt-60-adapt">
              {typedContent.description}
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          {typedContent.items.map((item, key) => (
            <div className="col-md-6 col-xl-3" key={`skills-i-${key}`}>
              <h6 className="mil-mb-30">{item.label}</h6>
              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div className="mil-skill-prog" style={{ width: item.value+"%" }} />
                </div>
                <div className="mil-text-sm">{item.value}%</div>
              </div>
            </div>
          ))}

          <div className="col-md-6 col-xl-3 mil-text-center">
            <a href={typedContent.button.link} className="mil-link mil-mb-30">
              <span>{typedContent.button.label}</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;