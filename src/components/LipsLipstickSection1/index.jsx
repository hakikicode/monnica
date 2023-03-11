import React from "react";

import { List, Img, Text, Button } from "components";

const LipsLipstickSection1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="bg-gray_900 sm:flex-col flex-row md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1510px] sm:px-[20px] md:px-[40px] px-[72px] w-[100%]"
          orientation="horizontal"
        >
          <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] w-[100%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_14.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
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
                  {props?.serumfoundation}
                </Text>
                <Img
                  src="images/img_frame3_purple_400.svg"
                  className="h-[18px] mt-[28px] w-[158px]"
                  alt="frameThree"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now}
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] w-[100%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_14.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new}
                  </Text>
                </div>
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
                  {props?.serumfoundation}
                </Text>
                <Img
                  src="images/img_frame3_purple_400.svg"
                  className="h-[18px] mt-[28px] w-[158px]"
                  alt="frameThree"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now}
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] w-[100%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_14.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new}
                  </Text>
                </div>
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
                  {props?.serumfoundation}
                </Text>
                <Img
                  src="images/img_frame3_purple_400.svg"
                  className="h-[18px] mt-[28px] w-[158px]"
                  alt="frameThree"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now}
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] w-[100%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_14.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
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
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                  <Text
                    className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                    variant="body6"
                  >
                    {props?.serumfoundation}
                  </Text>
                  <Img
                    src="images/img_frame3_purple_400.svg"
                    className="h-[18px] mt-[28px] w-[158px]"
                    alt="frameThree"
                  />
                  <div className="flex items-center justify-start mt-[14px] self-stretch w-[auto]">
                    <Text
                      className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                      variant="body6"
                    >
                      {props?.price}
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now}
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

LipsLipstickSection1.defaultProps = {
  serumfoundation: "Balmy Tint Hydrating",
  price: "$18.00",
  shop_Now: "SHOP NOW",
  new: "NEW",
  serumfoundation: "Balmy Tint Hydrating",
  price: "$18.00",
  shop_Now: "SHOP NOW",
  new: "NEW",
  serumfoundation: "Balmy Tint Hydrating",
  price: "$18.00",
  shop_Now: "SHOP NOW",
  serumfoundation: "Balmy Tint Hydrating",
  price: "$18.00",
  shop_Now: "SHOP NOW",
};

export default LipsLipstickSection1;
