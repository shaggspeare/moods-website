"use client";

import { useEffect } from "react";
import Footer from "./footers/Index";
import Header from "./headers/Index";
import { accordion, milButtonClick, milButtonClick2 } from '../common/utilits.js'

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  transparent,
  headerTop,
  extarClass,
}) => {
  useEffect(() => {
    milButtonClick();
    milButtonClick2();
    accordion();
  }, []);

  return (
    <div className="mil-wrapper">
      {!noHeader && (
        <Header
          header={header}
          transparent={transparent}
          headerTop={headerTop}
          extarClass={extarClass}
        />
      )}
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};
export default Layouts;
