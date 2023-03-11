import React from "react";

import { Img, Text } from "components";

const InfoRowselectioncontro = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_selectioncontrol.svg"
          className="h-[24px] w-[24px]"
          alt="selectioncontro"
        />
        <Text
          className="font-normal font-roboto not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.label}
        </Text>
      </div>
    </>
  );
};

InfoRowselectioncontro.defaultProps = {
  label: "Email me with news and offers",
};

export default InfoRowselectioncontro;
