import React from "react";

import { Text } from "components";

const ProductCardThreeTab1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-gray_900 text-left tracking-[1.00px] uppercase w-[auto]"
          variant="body6"
        >
          {props?.tab_One}
        </Text>
        <Text
          className="bg-gray_800 font-bold font-plusjakartasans h-[20px] justify-center px-[10px] py-[3px] rounded-[10px] text-center text-white_A700 tracking-[1.00px] uppercase w-[32px]"
          variant="body16"
        >
          {props?.tag}
        </Text>
      </div>
    </>
  );
};

ProductCardThreeTab1.defaultProps = { tab_One: "reviews", tag: "157" };

export default ProductCardThreeTab1;
