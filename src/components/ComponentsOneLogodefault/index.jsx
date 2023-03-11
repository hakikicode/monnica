import React from "react";

import { Img } from "components";

const ComponentsOneLogodefault = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_signal.svg"
          className="h-[32px] mt-[2px] w-[auto]"
          alt="signal"
        />
      </div>
    </>
  );
};

ComponentsOneLogodefault.defaultProps = {};

export default ComponentsOneLogodefault;
