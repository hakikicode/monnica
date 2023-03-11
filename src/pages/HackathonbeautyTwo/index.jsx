import React from "react";

import HackathonBeautyOneHeader from "components/HackathonBeautyOneHeader";
import { Img, Button, Text, List } from "components";
import HackathonBeautyOneP from "components/HackathonBeautyOneP";
import ComponentsProductcard1 from "components/ComponentsProductcard1";
import HackathonBeautyOneFooter from "components/HackathonBeautyOneFooter";

const HackathonbeautyTwoPage = () => {
  const componentsProductcard1PropList = [
    {
      new_One: "Bestseller",
      kvdgoodap: "images/img_11kvdgoodap_22.png",
      serumfoundation_One: "Everlasting Blush",
      price: "$45.00",
    },
    {
      new_One: "Bestseller",
      kvdgoodap: "images/img_11kvdgoodap_23.png",
      serumfoundation_One: "Foundation",
      price: "$39.00",
      shades: "+10 Shades",
    },
    {
      new_One: "bestseller",
      kvdgoodap: "images/img_11kvdgoodap_24.png",
      serumfoundation_One: "Color Block Lipstick",
      price: "$25.00",
      shades: "+6 Shades",
    },
    {
      new_One: "Bestseller",
      kvdgoodap: "images/img_11kvdgoodap_19.png",
      serumfoundation_One: "Le Phyto-Gloss",
      price: "$26.00",
      shades: "+ 6 Shades",
    },
    {
      new_One: "Bestseller",
      kvdgoodap: "images/img_11kvdgoodap_25.png",
      serumfoundation_One: "Volumizing and Lengthening Mascara",
      price: "$42.00",
      shades: "+3 Colors",
    },
  ];

  return (
    <>
      <div className="flex flex-col font-roboto items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-center w-[100%]">
          <div className="flex flex-col items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <HackathonBeautyOneHeader
              className="flex flex-col items-center justify-center md:px-[20px] self-stretch w-[100%]"
              new="New"
              bestsellers="Bestsellers"
              face="Face"
              eye="Eye"
              lip="Lip"
              exclusives="Exclusives"
              sale="Sale"
            />
            <div className="bg-black_900 flex font-inter items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="bg-black_900 flex h-[907px] md:h-[auto] items-start justify-start max-w-[1512px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="bg-black_900 flex items-start justify-start self-stretch md:w-[100%] w-[auto]">
                    <div className="bg-orange_100 flex h-[907px] md:h-[auto] items-start justify-start max-w-[1512px] w-[100%]">
                      <div className="h-[907px] md:px-[20px] relative w-[100%]">
                        <Img
                          src="images/img_herobannerdes.png"
                          className="absolute h-[907px] inset-y-[0] my-[auto] object-cover right-[0] w-[73%]"
                          alt="herobannerdes"
                        />
                        <div className="absolute flex flex-col gap-[30px] h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:px-[20px] md:px-[40px] px-[72px] self-stretch w-[auto]">
                          <HackathonBeautyOneP
                            className="flex flex-col items-start justify-start sm:w-[100%] w-[428px]"
                            kissprooflipsti_One="Kiss-Proof Lipsticks"
                            language=" Wear one of your long-lasting, kiss-proof lipsticks."
                          />
                          <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[267px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                            Discover NOW
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_900 flex flex-col font-inter md:gap-[40px] gap-[60px] items-center justify-start max-w-[1511px] pt-[60px] w-[100%]">
            <Text
              className="text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]"
              as="h2"
              variant="h2"
            >
              BESTSELLERS
            </Text>
            <div className="flex md:flex-col flex-row font-roboto gap-[45px] items-start justify-center overflow-auto self-stretch md:w-[100%] w-[auto]">
              <List
                className="sm:flex-col flex-row gap-[44px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 md:px-[20px] md:w-[100%] w-[85%]"
                orientation="horizontal"
              >
                {componentsProductcard1PropList.map((props, index) => (
                  <React.Fragment key={`ComponentsProductcard1${index}`}>
                    <ComponentsProductcard1
                      className="h-[402px] relative w-[100%]"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="overflow-x-auto w-[15%]">
                <ComponentsProductcard1
                  className="h-[408px] md:px-[20px] relative w-[100%]"
                  kvdgoodap="images/img_11kvdgoodap_195x195.png"
                  new_One="Bestseller"
                  nine=""
                  ten=""
                  eleven=""
                  twelve=""
                  thirteen=""
                  serumfoundation_One="Serum Foundation"
                  price="$40.00"
                  shades="+40 Shades"
                />
              </div>
            </div>
            <div className="h-[6px] overflow-hidden relative w-[57%]">
              <div className="w-full h-full absolute bg-gray_800"></div>
              <div
                className="h-full absolute bg-black_900"
                style={{ width: "17%" }}
              ></div>
            </div>
          </div>
          <div className="font-inter h-[3920px] md:px-[20px] relative md:w-[100%] w-[1512px]">
            <div className="h-[3920px] m-[auto] overflow-auto w-[100%]">
              <div className="absolute h-[3920px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="absolute bg-white_A700 h-[3920px] inset-[0] m-[auto] w-[100%]"></div>
                <div className="absolute bg-black_900 flex inset-x-[0] items-center justify-start mx-[auto] self-stretch top-[0] md:w-[100%] w-[auto]">
                  <div className="bg-black_900 flex items-start justify-start pb-[65px] pl-[568.19px] pr-[568px] pt-[60px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="leading-[48.00px] md:max-w-[100%] max-w-[375px] text-center text-white_A700 tracking-[1.00px] uppercase"
                      as="h2"
                      variant="h2"
                    >
                      New Beauty Essentials
                    </Text>
                  </div>
                </div>
                <div className="absolute flex items-center justify-start max-w-[2011px] right-[0] top-[6%] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start self-stretch w-[auto]">
                    <List
                      className="sm:flex-col flex-row gap-[1px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                      orientation="horizontal"
                    >
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_unsplashimagebobsinovqqw_620x502.png"
                          className="h-[620px] md:h-[auto] object-cover w-[100%]"
                          alt="unsplashimagebo"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_unsplashimagenwapsdtmxmk_620x502.png"
                          className="h-[620px] md:h-[auto] object-cover w-[100%]"
                          alt="unsplashimagenw"
                        />
                      </div>
                    </List>
                    <div className="h-[620px] relative md:w-[100%] w-[26%]">
                      <Img
                        src="images/img_unsplashimagem8vl5jwsv9s.png"
                        className="h-[620px] m-[auto] object-cover w-[100%]"
                        alt="unsplashimagemEight"
                      />
                      <Img
                        src="images/img_arrowright_white_a700_48x48.svg"
                        className="absolute h-[48px] inset-y-[0] my-[auto] right-[14%] rounded-[50%] w-[48px]"
                        alt="arrowright"
                      />
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[25%]">
                      <Img
                        src="images/img_shade01desktop1280xjpg_620x502.png"
                        className="h-[620px] md:h-[auto] object-cover w-[100%]"
                        alt="shade01desktopOne"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] self-stretch top-[21%] md:w-[100%] w-[auto]">
                  <div className="bg-gray_900 flex h-[898px] md:h-[auto] items-start justify-center max-w-[756px] w-[100%]">
                    <div className="flex flex-col gap-[30px] items-start justify-start sm:px-[20px] md:px-[40px] px-[72px] self-stretch sm:w-[100%] w-[auto]">
                      <HackathonBeautyOneP
                        className="flex flex-col items-start justify-start sm:w-[100%] w-[428px]"
                        kissprooflipsti_One="Lipstick That Lasts All Day"
                        language="DISCOVER  NEW HUES."
                      />
                      <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[267px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                        discover now
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-start justify-start max-w-[756px] w-[100%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Img
                        src="images/img_vtodesktop1280xgif.png"
                        className="h-[898px] md:h-[auto] object-cover w-[100%]"
                        alt="vtodesktop1280x"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[33%] flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-evenly max-w-[1512px] mx-[auto] w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Img
                      src="images/img_primerhighligh.png"
                      className="h-[898px] md:h-[auto] object-cover w-[100%]"
                      alt="primerhighligh"
                    />
                  </div>
                </div>
                <div className="bg-gray_900 flex flex-1 h-[899px] md:h-[auto] items-start justify-center max-w-[757px] w-[100%]">
                  <div className="flex flex-col gap-[30px] items-start justify-start max-w-[683px] pl-[126px] pr-[72px] sm:px-[20px] md:px-[40px] w-[100%]">
                    <HackathonBeautyOneP
                      className="flex flex-col items-start justify-start sm:w-[100%] w-[428px]"
                      kissprooflipsti_One="Smooth, Even Complexion"
                      language="DISCOVER  NEW BEAUTY PRODUCTS."
                    />
                    <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[267px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                      DISCOVER NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white_A700 bottom-[26%] flex inset-x-[0] items-center justify-start mx-[auto] self-stretch md:w-[100%] w-[auto]">
                <div className="bg-white_A700 flex items-start justify-start pb-[65px] pl-[568.19px] pr-[568px] pt-[60px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="leading-[48.00px] md:max-w-[100%] max-w-[375px] text-center text-gray_900 tracking-[1.00px] uppercase"
                    as="h2"
                    variant="h2"
                  >
                    Revolutionize Your Eye Makeup
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[10%] flex items-center justify-start max-w-[2012px] right-[0] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center sm:pl-[20px] md:pl-[40px] pl-[503px] w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[34%]">
                    <Img
                      src="images/img_unsplashimagenwapsdtmxmk_1.png"
                      className="h-[620px] md:h-[auto] object-cover w-[100%]"
                      alt="unsplashimagenw"
                    />
                  </div>
                  <div className="h-[620px] relative md:w-[100%] w-[34%]">
                    <Img
                      src="images/img_unsplashimagem8vl5jwsv9s_619x378.png"
                      className="h-[620px] m-[auto] object-cover w-[100%]"
                      alt="unsplashimagemEight_One"
                    />
                    <Img
                      src="images/img_arrowright_white_a700_48x48.svg"
                      className="absolute h-[48px] inset-y-[0] my-[auto] right-[14%] rounded-[50%] w-[48px]"
                      alt="arrowright_One"
                    />
                  </div>
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[34%]">
                    <Img
                      src="images/img_shade01desktop1280xjpg_1.png"
                      className="h-[620px] md:h-[auto] object-cover w-[100%]"
                      alt="shade01desktopOne_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <HackathonBeautyOneFooter
              className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] self-stretch md:w-[100%] w-[auto]"
              helpmenu="About Monnica beauty"
              discoverthelate_One="Discover the Latest Beauty Must-Haves"
              helpmenu_One="Information"
              about="About"
              shop="shop"
              blog="Blog"
              career="Career"
              helpmenu_Two="Help"
              customersupport_One="Customer Support"
              delivery="Delivery"
              details="Details"
              privacypolicy="Privacy Policy"
              termAndCondition="Terms & Conditions"
            />
          </div>
        </div>
        <div className="bg-white_A700_a8 flex font-segoeui items-center justify-center md:px-[20px] self-stretch shadow-bs sm:w-[100%] w-[auto]">
          <div className="bg-black_900 flex flex-row items-center justify-center sm:px-[20px] md:px-[40px] px-[75px] py-[15px] sm:w-[100%] w-[417px]">
            <Img
              src="images/img_laptop.svg"
              className="h-[44px] w-[44px]"
              alt="laptop"
            />
            <div className="flex flex-col items-start justify-start pl-[16px] pr-[191px] sm:pr-[20px] md:pr-[40px] w-[173px]">
              <Text
                className="font-semibold text-left text-white_A700 tracking-[-0.45px] w-[auto]"
                variant="body4"
              >
                MONNICA Beauty
              </Text>
              <Text
                className="font-normal text-left text-white_A700 tracking-[-0.15px] w-[auto]"
                variant="body9"
              >
                Customer Service
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HackathonbeautyTwoPage;
