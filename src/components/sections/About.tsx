import React from 'react';
import Content from "../../data/sections/about.json";

interface ListItem {
  value: string;
}

interface Speaker {
  image: string;
  alt: string;
}

interface Rating {
  label: string;
  value: string;
}

interface AboutContent {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  list: ListItem[];
  speakers: Speaker[];
  rating: Rating;
}

const AboutSection: React.FC = () => {
  // Type assertion to ensure Content has the expected structure
  const typedContent = Content as AboutContent;
  
  return (
    <section className="mil-about mil-p-120-60">
      {/*<div className="mil-deco" style={{ top: 0, right: "10%" }} />*/}
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-5 col-xl-5">
            <div className="mil-about-illustration mil-mb-60">
              <div className="mil-image-frame">
                <img src={typedContent.image} alt={typedContent.title} />
              </div>
              {/*<div className="mil-window">*/}
              {/*  <ul className="mil-speakers">*/}
              {/*    {typedContent.speakers.map((item, key) => (*/}
              {/*    <li className="mil-speaker" key={key}>*/}
              {/*      <img src={item.image} alt={item.alt} />*/}
              {/*    </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*  <div className="mil-window-bottom">*/}
              {/*    <h3>{typedContent.rating.value}</h3>*/}
              {/*    <div>*/}
              {/*      <ul className="mil-stars">*/}
              {/*        <li>*/}
              {/*          <i className="fas fa-star" />*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*          <i className="fas fa-star" />*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*          <i className="fas fa-star" />*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*          <i className="fas fa-star" />*/}
              {/*        </li>*/}
              {/*        <li className="mil-empty">*/}
              {/*          <i className="fas fa-star" />*/}
              {/*        </li>*/}
              {/*      </ul>*/}
              {/*      <p className="mil-text-sm">{typedContent.rating.label}</p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {typedContent.subtitle}
            </span>
            <h2 className="mil-mb-30">{typedContent.title}</h2>
            <p className="mil-mb-30">
              {typedContent.text}
            </p>
            <ul className="mil-simple-list mil-mb-60">
              {typedContent.list.map((item, key) => (
                <li key={key}>{item.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>        
  );
};

export default AboutSection;