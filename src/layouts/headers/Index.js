"use client"

import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader.js";
import Header2 from "./Header2.js";
import { stickyNav } from '../../common/utilits.js'

const Header = ({ header, transparent, headerTop, extarClass }) => {
  useEffect(() => {
    stickyNav(extarClass);
  }, []);

  switch (header) {
    case 1:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extarClass={extarClass}
        />
      );

    case 2:
      return <Header2 transparent={transparent} />;

    default:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extarClass={extarClass}
        />
      );
  }
};
export default Header;
