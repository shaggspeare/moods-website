import React from 'react';
import Link from "next/link";
import Content from "../../data/sections/partners.json";

interface PartnerItem {
  image: string;
  alt: string;
  link: string;
}

interface PartnersContent {
  title: string;
  items: PartnerItem[];
}

const PartnersSection: React.FC = () => {
  // Type assertion to ensure Content has the expected structure
  const typedContent = Content as PartnersContent;
  
  return (
    <div className="mil-partners mil-p-90-60">
      <div className="container">
        <div className="mil-partners-frame">
          {typedContent.items.map((item, index) => (
            <Link href={item.link} key={`partners-i-${index}`}>
              <img src={item.image} alt={item.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;