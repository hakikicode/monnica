import React from "react";

import { Text, Img } from "components";

const ButtonsProperty1open = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-between pl-[7px] py-[7px] md:w-[100%] w-[98%]">
          <Text
            className="font-inter font-normal ml-[3px] mt-[4px] not-italic text-left text-white_A700 tracking-[1.00px] uppercase w-[auto]"
            variant="body6"
          >
            {props?.label_One}
          </Text>
          <Img
            src="images/img_arrowdown.svg"
            className="h-[30px] w-[auto]"
            alt="arrowdown"
          />
        </div>
      </div>
    </>
  );
};

ButtonsProperty1open.defaultProps = { label_One: "LABEL" };

export default ButtonsProperty1open;
