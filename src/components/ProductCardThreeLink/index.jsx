import React from "react";

import { Text, Img } from "components";

const ProductCardThreeLink = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between px-[15px] rounded-[4px] self-stretch md:w-[100%] w-[auto]">
          <Text
            className="font-inter font-normal not-italic text-gray_800 text-left tracking-[1.00px] uppercase w-[auto]"
            variant="body6"
          >
            {props?.label}
          </Text>
          <Img
            src="images/img_arrowdown_gray_800_30x32.svg"
            className="h-[30px] w-[32px]"
            alt="arrowdown_One"
          />
        </div>
      </div>
    </>
  );
};

ProductCardThreeLink.defaultProps = { label: "Product" };

export default ProductCardThreeLink;
