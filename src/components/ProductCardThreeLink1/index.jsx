import React from "react";

import { Text, Img } from "components";

const ProductCardThreeLink1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[14px] items-center justify-start px-[15px] rounded-[4px] self-stretch md:w-[100%] w-[auto]">
          <Text
            className="font-inter font-normal not-italic text-gray_900 text-left tracking-[1.00px] uppercase w-[auto]"
            variant="body6"
          >
            {props?.label}
          </Text>
          <Img
            src="images/img_send.svg"
            className="h-[32px] w-[30px]"
            alt="send"
          />
        </div>
      </div>
    </>
  );
};

ProductCardThreeLink1.defaultProps = { label: "How to use" };

export default ProductCardThreeLink1;
