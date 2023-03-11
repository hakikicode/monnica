import React from "react";

import { Img, Text, Line } from "components";

const ProductCardThreeReview = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
          <Img
            src={props?.ellipseFourteen}
            className="h-[91px] md:h-[auto] object-cover rounded-[45px] sm:w-[100%] w-[90px]"
            alt="ellipseFourteen"
          />
          <div className="flex flex-col gap-[15px] items-start justify-start sm:w-[100%] w-[570px]">
            <div className="flex flex-col gap-[15px] items-start justify-start self-stretch w-[auto]">
              <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                <Img
                  src="images/img_star.svg"
                  className="h-[18px] w-[18px]"
                  alt="star"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-[18px] w-[18px]"
                  alt="star_One"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-[18px] w-[18px]"
                  alt="star_Two"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-[18px] w-[18px]"
                  alt="star_Three"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-[18px] w-[18px]"
                  alt="star_Four"
                />
              </div>
              <Text
                className="font-bold font-roboto text-gray_906 text-left tracking-[0.10px] uppercase w-[auto]"
                variant="body9"
              >
                {props?.kristinwatson}
              </Text>
              <Text
                className="font-bold font-roboto text-gray_800 text-left tracking-[0.13px] w-[auto]"
                variant="body6"
              >
                {props?.march142021}
              </Text>
            </div>
            <Text
              className="font-normal font-roboto leading-[20.00px] md:max-w-[100%] max-w-[570px] not-italic text-gray_906 text-left tracking-[0.12px]"
              variant="body6"
            >
              {props?.description}
            </Text>
          </div>
        </div>
        <Line className="bg-red_200 h-[1px] w-[100%]" />
      </div>
    </>
  );
};

ProductCardThreeReview.defaultProps = {
  ellipseFourteen: "images/img_ellipse14.png",
  kristinwatson: "Kristin Watson",
  march142021: "March 14, 2023",
  description:
    "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
};

export default ProductCardThreeReview;
