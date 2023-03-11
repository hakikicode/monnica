import React from "react";

import { Text, Img, Button } from "components";

const CatalogLipsSection = (props) => {
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
        <div className="flex flex-col relative w-[100%]">
          <div className="md:h-[1925px] sm:h-[633px] h-[641px] mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] md:w-[100%] w-[1510px]">
            <div className="absolute bg-gray_900 flex md:flex-col flex-row gap-[181px] md:gap-[40px] inset-x-[0] items-center justify-end max-w-[1510px] mx-[auto] sm:px-[20px] md:px-[40px] px-[72px] top-[0] w-[100%]">
              <div className="flex sm:flex-1 h-[615px] md:h-[auto] items-center justify-start sm:w-[100%] w-[503px]">
                <div className="flex items-start justify-start w-[100%]">
                  <Img
                    src={props?.unsplashimagemEight}
                    className="h-[615px] md:h-[auto] object-cover w-[82%]"
                    alt="unsplashimagemEight"
                  />
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
                <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
                  <div className="flex h-[300px] items-center justify-start w-[300px]">
                    <div className="h-[300px] relative w-[300px]">
                      <Img
                        src={props?.kvdgoodap_Two}
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
                        {props?.new_One}
                      </Text>
                    </div>
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
                      {props?.serumfoundation_Two}
                    </Text>
                    <Img
                      src={props?.frameThree_Two}
                      className="h-[18px] w-[158px]"
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
                  {!!props?.button ? (
                    <Text
                      className="bg-gray_900 border-[1px] border-solid border-white_A700 font-inter font-normal justify-center not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]"
                      variant="body6"
                    >
                      {props?.button}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
                <div className="flex flex-col gap-[25px] h-[615px] md:h-[auto] items-center justify-start px-[12px] py-[20px] w-[342px]">
                  <div className="flex h-[300px] items-center justify-start w-[300px]">
                    <div className="h-[300px] relative w-[300px]">
                      <Img
                        src={props?.kvdgoodap_Two}
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
                    <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                      <Text
                        className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
                        variant="body6"
                      >
                        {props?.serumfoundation_Two}
                      </Text>
                      <Img
                        src={props?.frameThree_Two}
                        className="h-[18px] w-[158px]"
                        alt="frameThree_Two"
                      />
                      <div className="flex items-center justify-start mt-[14px] self-stretch w-[auto]">
                        <Text
                          className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                          variant="body6"
                        >
                          {props?.price_Two}
                        </Text>
                      </div>
                    </div>
                  </div>
                  {!!props?.button ? (
                    <Text
                      className="bg-gray_900 border-[1px] border-solid border-white_A700 font-inter font-normal justify-center not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]"
                      variant="body6"
                    >
                      {props?.button}
                    </Text>
                  ) : null}
                </div>
              </div>
            </div>
            {!!props?.createfromframe ? (
              <div className="absolute md:h-[633px] h-[641px] inset-y-[0] left-[11%] my-[auto] w-[23%]">
                {!!props?.createfromframe ? (
                  <div className="absolute bg-white_A700 h-[615px] inset-x-[0] mx-[auto] top-[0] w-[100%]"></div>
                ) : null}
                <div className="absolute flex flex-col gap-[25px] h-[100%] md:h-[auto] inset-[0] items-center justify-end m-[auto] px-[12px] py-[20px] w-[342px]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[97%]">
                    <div className="flex h-[300px] items-center justify-start w-[300px]">
                      <div className="h-[300px] relative w-[300px]">
                        <Img
                          src={props?.kvdgoodap_Two}
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
                    <div className="flex flex-col gap-[15px] items-center justify-start mt-[21px] self-stretch w-[auto]">
                      <div className="flex items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                          variant="body9"
                        >
                          {props?.new_One}
                        </Text>
                      </div>
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
                        {props?.serumfoundation_Two}
                      </Text>
                      <Img
                        src={props?.frameThree_Two}
                        className="h-[18px] w-[158px]"
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
                    {!!props?.add_To_Bag ? (
                      <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-inter font-normal mt-[25px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[307px]">
                        {props?.add_To_Bag}
                      </Button>
                    ) : null}
                  </div>
                  {!!props?.button ? (
                    <Text
                      className="bg-gray_900 border-[1px] border-solid border-white_A700 font-inter font-normal justify-center not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]"
                      variant="body6"
                    >
                      {props?.button}
                    </Text>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
          <div className="bg-gray_900 flex items-center justify-start max-w-[1510px] mt-[-26px] mx-[auto] w-[100%] z-[1]">
            <div className="bg-gray_900 flex items-center justify-center max-w-[1510px] pb-[65px] pl-[568.19px] pr-[568px] pt-[60px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-inter font-normal min-w-[222px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                {props?.show_All}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CatalogLipsSection.defaultProps = {
  lipstick: "Lipstick",
  unsplashimagemEight: "images/img_unsplashimagem8vl5jwsv9s_1.png",
  kvdgoodap: "images/img_11kvdgoodap_17.png",
  new: "bestseller",
  serumfoundation: "Color Block Lipstick",
  frameThree: "images/img_frame3_red_900_18x158.svg",
  price: "$25.00",
  shop_Now: "SHOP NOW",
  kvdgoodap_One: "images/img_11kvdgoodap_17.png",
  serumfoundation_One: "Color Block Lipstick",
  frameThree_One: "images/img_frame3_red_900_18x158.svg",
  price_One: "$25.00",
  shop_Now_One: "SHOP NOW",
  kvdgoodap_Two: "images/img_11kvdgoodap_17.png",
  new_One: "bestseller",
  serumfoundation_Two: "Color Block Lipstick",
  frameThree_Two: "images/img_frame3_red_900_18x158.svg",
  price_Two: "$25.00",
  show_All: "Show all",
};

export default CatalogLipsSection;
