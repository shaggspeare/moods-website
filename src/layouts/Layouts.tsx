"use client";

import { useEffect, ReactNode } from "react";
import Footer from "./footers/Index.js";
import Header from "./headers/Index.js";
import { accordion, milButtonClick, milButtonClick2 } from '../common/utilits.js'

interface LayoutsProps {
  children: ReactNode;
  header?: any;
  footer?: any;
  noHeader?: boolean;
  noFooter?: boolean;
  transparent?: boolean;
  headerTop?: boolean;
  extarClass?: string;
}

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  transparent,
  headerTop,
  extarClass,
}: LayoutsProps) => {
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