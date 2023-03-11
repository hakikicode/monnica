import React from "react";

import { Img, Text, Button } from "components";

const ComponentsTwoPropertyproduc = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_900 flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1510px] sm:px-[20px] md:px-[40px] px-[72px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_10.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap_Three"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite_Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new_Three}
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Fifteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Sixteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Seventeen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Eighteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Nineteen"
                    />
                  </div>
                  <Text
                    className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                    variant="body6"
                  >
                    {props?.serumfoundation_Seven}
                  </Text>
                </div>
                <Img
                  src="images/img_frame3.svg"
                  className="h-[18px] w-[270px]"
                  alt="frameThree_Three"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price_Three}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now_Three}
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_10.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap_Three"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite_Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new_Three}
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Fifteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Sixteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Seventeen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Eighteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Nineteen"
                    />
                  </div>
                  <Text
                    className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                    variant="body6"
                  >
                    {props?.serumfoundation_Seven}
                  </Text>
                </div>
                <Img
                  src="images/img_frame3.svg"
                  className="h-[18px] w-[270px]"
                  alt="frameThree_Three"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price_Three}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now_Three}
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_10.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap_Three"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite_Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new_Three}
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Fifteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Sixteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Seventeen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Eighteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Nineteen"
                    />
                  </div>
                  <Text
                    className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                    variant="body6"
                  >
                    {props?.serumfoundation_Seven}
                  </Text>
                </div>
                <Img
                  src="images/img_frame3.svg"
                  className="h-[18px] w-[270px]"
                  alt="frameThree_Three"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price_Three}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now_Three}
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_10.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap_Three"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite_Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new_Three}
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Fifteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Sixteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Seventeen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Eighteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Nineteen"
                    />
                  </div>
                  <Text
                    className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                    variant="body6"
                  >
                    {props?.serumfoundation_Seven}
                  </Text>
                </div>
                <Img
                  src="images/img_frame3.svg"
                  className="h-[18px] w-[270px]"
                  alt="frameThree_Three"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price_Three}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now_Three}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsTwoPropertyproduc.defaultProps = {
  new: "NEW",
  serumfoundation_One: "Serum Foundation",
  price: "$40.00",
  shop_Now: "SHOP NOW",
  new_One: "NEW",
  serumfoundation_Three: "Serum Foundation",
  price_One: "$40.00",
  shop_Now_One: "SHOP NOW",
  new_Two: "NEW",
  serumfoundation_Five: "Serum Foundation",
  price_Two: "$40.00",
  shop_Now_Two: "SHOP NOW",
  new_Three: "NEW",
  serumfoundation_Seven: "Serum Foundation",
  price_Three: "$40.00",
  shop_Now_Three: "SHOP NOW",
};

export default ComponentsTwoPropertyproduc;
