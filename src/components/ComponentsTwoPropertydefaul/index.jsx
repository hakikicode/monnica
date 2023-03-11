import React from "react";

import { Text, Img, Button } from "components";

const ComponentsTwoPropertydefaul = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_900 flex items-start justify-start self-stretch md:w-[100%] w-[auto]">
          <div className="bg-gray_900 flex items-start justify-start pb-[65px] pl-[568.19px] pr-[568px] pt-[60px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
            <Text
              className="font-inter text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]"
              as="h2"
              variant="h2"
            >
              {props?.lipstick}
            </Text>
          </div>
        </div>
        <div className="bg-gray_900 flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1510px] sm:px-[20px] md:px-[40px] px-[72px] w-[100%]">
          <div className="flex relative md:w-[100%] w-[51%]">
            <div className="flex h-[615px] md:h-[auto] items-center justify-start my-[auto] sm:w-[100%] w-[503px]">
              <div className="flex items-start justify-start w-[100%]">
                <Img
                  src="images/img_unsplashimagem8vl5jwsv9s_615x409.png"
                  className="h-[615px] md:h-[auto] object-cover w-[82%]"
                  alt="unsplashimagemEight"
                />
              </div>
            </div>
            <div className="bg-white_A700 flex items-center justify-start ml-[-161px] my-[auto] w-[50%] z-[1]">
              <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
                <div className="flex h-[300px] items-center justify-start w-[300px]">
                  <div className="h-[300px] relative w-[300px]">
                    <Img
                      src="images/img_11kvdgoodap_6.png"
                      className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                      alt="11kvdgoodap_Two"
                    />
                    <Img
                      src="images/img_favorite.svg"
                      className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                      alt="favorite_Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                  <div className="flex items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                      variant="body9"
                    >
                      {props?.new_Two}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
                    <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                      <Img
                        src="images/img_star.svg"
                        className="h-[18px] w-[18px]"
                        alt="star_Ten"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-[18px] w-[18px]"
                        alt="star_Eleven"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-[18px] w-[18px]"
                        alt="star_Twelve"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-[18px] w-[18px]"
                        alt="star_Thirteen"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-[18px] w-[18px]"
                        alt="star_Fourteen"
                      />
                    </div>
                    <Text
                      className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                      variant="body6"
                    >
                      {props?.serumfoundation_Five}
                    </Text>
                  </div>
                  <Img
                    src="images/img_frame3.svg"
                    className="h-[18px] w-[270px]"
                    alt="frameThree_Two"
                  />
                  <div className="flex items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                      variant="body6"
                    >
                      {props?.price_Two}
                    </Text>
                  </div>
                </div>
                <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                  {props?.shop_Now_Two}
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_6.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap_Two"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite_Two"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new_Two}
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Ten"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Eleven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Twelve"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Thirteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Fourteen"
                    />
                  </div>
                  <Text
                    className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                    variant="body6"
                  >
                    {props?.serumfoundation_Five}
                  </Text>
                </div>
                <Img
                  src="images/img_frame3.svg"
                  className="h-[18px] w-[270px]"
                  alt="frameThree_Two"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price_Two}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now_Two}
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
            <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
              <div className="flex h-[300px] items-center justify-start w-[300px]">
                <div className="h-[300px] relative w-[300px]">
                  <Img
                    src="images/img_11kvdgoodap_6.png"
                    className="absolute h-[300px] inset-[0] justify-center m-[auto] object-cover w-[299px]"
                    alt="11kvdgoodap_Two"
                  />
                  <Img
                    src="images/img_favorite.svg"
                    className="absolute h-[24px] right-[7%] top-[7%] w-[24px]"
                    alt="favorite_Two"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    {props?.new_Two}
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start md:w-[100%] w-[50%]">
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Ten"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Eleven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Twelve"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Thirteen"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Fourteen"
                    />
                  </div>
                  <Text
                    className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                    variant="body6"
                  >
                    {props?.serumfoundation_Five}
                  </Text>
                </div>
                <Img
                  src="images/img_frame3.svg"
                  className="h-[18px] w-[270px]"
                  alt="frameThree_Two"
                />
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    {props?.price_Two}
                  </Text>
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                {props?.shop_Now_Two}
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gray_900 flex items-start justify-start max-w-[1510px] w-[100%]">
          <div className="bg-gray_900 flex items-center justify-center max-w-[1510px] pb-[65px] pl-[568.19px] pr-[568px] pt-[60px] sm:px-[20px] md:px-[40px] w-[100%]">
            <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-inter font-normal min-w-[222px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
              {props?.show_All}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsTwoPropertydefaul.defaultProps = {
  lipstick: "Lipstick",
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
  show_All: "Show all",
};

export default ComponentsTwoPropertydefaul;
