import React from "react";

import { Img, Text, Button } from "components";

const HackathonBeautyOneProductcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[10px] h-[447px] md:h-[auto] items-center justify-start px-[12px] py-[20px] md:w-[100%] w-[219px]">
          <div className="md:h-[195px] h-[196px] relative w-[100%]">
            <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[21px] w-[195px]">
              <Img
                src={props?.kvdgoodap}
                className="h-[174px] md:h-[auto] object-cover w-[100%]"
                alt="11kvdgoodap"
              />
            </div>
            <div className="absolute flex flex-row gap-[97px] inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[198px]">
              <Text
                className="font-bold font-roboto text-gray_800 text-left tracking-[0.10px] uppercase w-[auto]"
                variant="body9"
              >
                {props?.bestseller}
              </Text>
              <Img
                src="images/img_favorite.svg"
                className="h-[16px] w-[16px]"
                alt="favorite"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] h-[203px] md:h-[auto] items-center justify-start self-stretch w-[auto]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[66%]">
              <div className="flex flex-col gap-[5px] items-center justify-start self-stretch w-[auto]">
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
                  className="font-normal font-roboto not-italic text-center text-gray_800 tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  {props?.reviewsCounter}
                </Text>
              </div>
              <Text
                className="font-bold font-roboto mt-[31px] text-black_900 text-center tracking-[0.13px] w-[auto]"
                variant="body6"
              >
                {props?.serumfoundation}
              </Text>
              <Img
                src={props?.frameFour}
                className="h-[18px] mt-[28px] w-[130px]"
                alt="frameFour"
              />
            </div>
            {!!props?.select_Shade__$FortyFive ? (
              <Button className="border-[1px] border-gray_900 border-solid cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[197px]">
                {props?.select_Shade__$FortyFive}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

HackathonBeautyOneProductcard.defaultProps = {
  kvdgoodap: "images/img_11kvdgoodap.png",
  bestseller: "bestseller",
  reviewsCounter: "161 Reviews",
  serumfoundation: "Everlasting Blush",
  frameFour: "images/img_frame4.svg",
};

export default HackathonBeautyOneProductcard;
