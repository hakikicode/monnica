import React from "react";

import { Img, Text, Button } from "components";

const ComponentsOneProperty1maxi = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] md:w-[100%] w-[342px]">
          <div className="flex h-[300px] items-center justify-start w-[300px]">
            <div className="h-[300px] relative w-[300px]">
              <Img
                src="images/img_11kvdgoodap_195x195.png"
                className="h-[300px] m-[auto] object-cover w-[299px]"
                alt="11kvdgoodap_One"
              />
              <Img
                src="images/img_favorite.svg"
                className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                alt="favorite_One"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
            <div className="flex items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                variant="body9"
              >
                {props?.new_One}
              </Text>
            </div>
            <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
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
                className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                variant="body6"
              >
                {props?.serumfoundation_Three}
              </Text>
            </div>
            <Img
              src="images/img_frame3.svg"
              className="h-[18px] w-[270px]"
              alt="frameThree"
            />
            <div className="flex items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                variant="body6"
              >
                {props?.price_One}
              </Text>
            </div>
          </div>
          <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
            {props?.shop_Now}
          </Button>
        </div>
      </div>
    </>
  );
};

ComponentsOneProperty1maxi.defaultProps = {
  new_One: "NEW",
  serumfoundation_Three: "Serum Foundation",
  price_One: "$40.00",
  shop_Now: "SHOP NOW",
};

export default ComponentsOneProperty1maxi;
