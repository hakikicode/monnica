import React from "react";

import { Text } from "components";

const HackathonBeautyOneP = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter leading-[48.00px] md:max-w-[100%] max-w-[331px] text-gray_900 text-left tracking-[1.00px] uppercase"
          as="h2"
          variant="h2"
        >
          {props?.kissprooflipsti_One}
        </Text>
        <Text
          className="font-normal font-roboto not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
          variant="body6"
        >
          {props?.language}
        </Text>
      </div>
    </>
  );
};

HackathonBeautyOneP.defaultProps = {
  kissprooflipsti_One: "Kiss-Proof Lipsticks",
  language: " Wear one of your long-lasting, kiss-proof lipsticks.",
};

export default HackathonBeautyOneP;
