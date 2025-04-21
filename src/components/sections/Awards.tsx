import React from 'react';
import Content from "../../data/sections/awards.json";

interface TitleParts {
  first: string;
  second: string;
  third: string;
}

interface Button {
  label: string;
  link: string;
}

interface AwardItem {
  name: string;
  text: string;
  boxClass?: string; // Added during processing
}

interface AwardsContent {
  bg_image: string;
  subtitle: string;
  title: TitleParts;
  description: string;
  button: Button;
  items: AwardItem[];
}

const AwardsSection: React.FC = () => {
  // Type assertion to ensure Content has the expected structure
  const typedContent = Content as AwardsContent;
  
  const awardsItems: AwardItem[] = [];

  typedContent.items.forEach((item, index) => {
    let itemClass = 'mil-awards-box mil-gradient-bg';
    if ((index+1) % 2 === 0) { // Changed == to === for strict equality
      itemClass += ' mil-box-2';
    }
    if (index === (typedContent.items.length - 1)) { // Changed == to === for strict equality
      itemClass += ' mil-pb-60-adapt';
    }
    let newobj: AwardItem = { ...item, boxClass: itemClass };
    awardsItems.push(newobj);
  });

  return (
    <section className="mil-awards">
      <div className="row m-0">
        <div className="col-xl-6 p-0 mil-relative">
          <img
            src={typedContent.bg_image}
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
          <div className="mil-overlay" />
          <div className="mil-fake-container">
            <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
              {typedContent.subtitle}
            </span>
            <h2 className="mil-light mil-mb-30">
              {typedContent.title.first} <span className="mil-accent">{typedContent.title.second}</span> {typedContent.title.third}
            </h2>
            <p className="mil-light-soft mil-mb-30">
              {typedContent.description}
            </p>
            <a href={typedContent.button.link} className="mil-link">
              <span className="mil-light">{typedContent.button.label}</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-xl-6 p-0">
          <div className="row m-0">
            {awardsItems.map((item, key) => (
              <div className="col-md-6 col-xl-6 p-0" key={`award-${key}`}>
                <div className={item.boxClass}>
                  <div className="mil-icon-box mil-center">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <img src="img/icons/md/6l.svg" alt="icon" />
                    </div>
                    <h5 className="mil-light mil-mb-20">{item.name}</h5>
                    <p className="mil-text-sm mil-light-soft">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>      
  );
};

export default AwardsSection;