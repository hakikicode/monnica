import React from "react";

import { Img, Text } from "components";

const ProductCardThreeNumber = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border-[2px] border-solid border-white_A700 flex flex-row items-center justify-between p-[9px] w-[100%]">
          <Img
            src="images/img_frame_black_900.svg"
            className="h-[2px] w-[auto]"
            alt="frame"
          />
          <div className="flex items-center justify-center my-[4px] px-[6px] w-[20px]">
            <Text
              className="font-inter font-medium text-black_900 text-center w-[auto]"
              variant="body6"
            >
              {props?.one}
            </Text>
          </div>
          <Img
            src="images/img_plus.svg"
            className="h-[12px] w-[12px]"
            alt="plus"
          />
        </div>
      </div>
    </>
  );
};

ProductCardThreeNumber.defaultProps = { one: "1" };

export default ProductCardThreeNumber;
