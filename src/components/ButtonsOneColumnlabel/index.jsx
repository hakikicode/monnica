import React from "react";

import { Text, Img } from "components";

const ButtonsOneColumnlabel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between pl-[6px] py-[6px] md:w-[100%] w-[98%]">
          <Text
            className="font-inter font-normal ml-[4px] not-italic text-left text-white_A700 tracking-[1.00px] uppercase w-[auto]"
            variant="body6"
          >
            {props?.label}
          </Text>
          <Img
            src="images/img_arrowright.svg"
            className="h-[32px] w-[auto]"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

ButtonsOneColumnlabel.defaultProps = { label: "LABEL" };

export default ButtonsOneColumnlabel;
