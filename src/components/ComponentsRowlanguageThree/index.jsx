import React from "react";

import { Text, Img } from "components";

const ComponentsRowlanguageThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-roboto not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.language_Three}
        </Text>
        <Img
          src="images/img_arrowright_white_a700.svg"
          className="h-[18px] w-[18px]"
          alt="arrowright_Four"
        />
        <Text
          className="font-normal font-roboto not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.language_Four}
        </Text>
        <Img
          src="images/img_arrowright_white_a700.svg"
          className="h-[18px] w-[18px]"
          alt="arrowright_Four"
        />
        <Text
          className="font-normal font-roboto not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.language_Five}
        </Text>
        <Img
          src="images/img_arrowright_white_a700.svg"
          className="h-[18px] w-[18px]"
          alt="arrowright_Four"
        />
        <Text
          className="font-normal font-roboto not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.language_Six}
        </Text>
      </div>
    </>
  );
};

ComponentsRowlanguageThree.defaultProps = {
  language_Three: "Body ",
  language_Four: "Body ",
  language_Five: "Body ",
  language_Six: "Body ",
};

export default ComponentsRowlanguageThree;
