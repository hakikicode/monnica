import React from "react";

import { Img } from "components";

const InfoLogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.signal}
          className="h-[32px] mt-[2px] w-[auto]"
          alt="signal"
        />
      </div>
    </>
  );
};

InfoLogo.defaultProps = { signal: "images/img_signal.svg" };

export default InfoLogo;
