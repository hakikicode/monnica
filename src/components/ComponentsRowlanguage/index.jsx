import React from "react";

import { Text, Img } from "components";

const ComponentsRowlanguage = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-roboto not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.language}
        </Text>
        <Img
          src="images/img_arrowright_white_a700.svg"
          className="h-[18px] w-[18px]"
          alt="arrowright_One"
        />
        <Text
          className="font-normal font-roboto not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.language_One}
        </Text>
        <Img
          src="images/img_arrowright_white_a700.svg"
          className="h-[18px] w-[18px]"
          alt="arrowright_One"
        />
        {!!props?.language_Two ? (
          <Text
            className="font-normal font-roboto not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
            variant="body6"
          >
            {props?.language_Two}
          </Text>
        ) : null}
      </div>
    </>
  );
};

ComponentsRowlanguage.defaultProps = {
  language: "Body ",
  language_One: "Body ",
};

export default ComponentsRowlanguage;
