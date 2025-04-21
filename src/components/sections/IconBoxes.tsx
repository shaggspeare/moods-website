import React from 'react';
import Content from "../../data/sections/icon-boxes.json";

interface IconBoxItem {
  icon: string;
  subtitle: string;
  title: string;
}

interface IconBoxesContent {
  items: IconBoxItem[];
}

const IconBoxesSection: React.FC = () => {
  // Type assertion to ensure Content has the expected structure
  const typedContent = Content as IconBoxesContent;
  
  return (
    <section className="mil-icon-boxes mil-p-120-60">
      <div className="container">
        <div className="row">
          {typedContent.items.map((item, index) => (
            <div className="col-md-6 col-xl-3" key={`icon-box-${index}`}>
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src={item.icon} alt="icon" />
                </div>
                <p className="mil-text-sm mil-mb-20">{item.subtitle}</p>
                <h5 dangerouslySetInnerHTML={{__html: item.title}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconBoxesSection;