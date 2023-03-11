import React from "react";

import { Text, SelectBox, Img } from "components";

const LipsLipstickSection = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
          variant="body4"
        >
          {props?.productsCounter}
        </Text>
        <div className="flex flex-row gap-[17px] items-center justify-end sm:pr-[20px] md:pr-[40px] pr-[72px] sm:w-[100%] w-[280px]">
          <SelectBox
            className="font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase sm:w-[100%] w-[40%]"
            placeholderClassName="text-red_200"
            name="div_Two"
            placeholder="Filter"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_arrowdown_red_200.svg"
                className="h-[9px] w-[12px]"
                alt="arrow_down"
              />
            }
          ></SelectBox>
          <SelectBox
            className="font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase sm:w-[100%] w-[35%]"
            placeholderClassName="text-red_200"
            name="div_Three"
            placeholder="sort"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_arrowdown_red_200.svg"
                className="h-[9px] w-[12px]"
                alt="arrow_down"
              />
            }
          ></SelectBox>
        </div>
      </div>
    </>
  );
};

LipsLipstickSection.defaultProps = { productsCounter: "4 Products" };

export default LipsLipstickSection;
