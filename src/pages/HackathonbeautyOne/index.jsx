import React from "react";

import HackathonBeautyOneHeader from "components/HackathonBeautyOneHeader";
import { Img, Button, Text, List } from "components";
import HackathonBeautyOneP from "components/HackathonBeautyOneP";
import HackathonBeautyOneProductcard from "components/HackathonBeautyOneProductcard";
import HackathonBeautyOneFooter from "components/HackathonBeautyOneFooter";

const HackathonbeautyOnePage = () => {
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
            <div className="font-roboto overflow-x-auto w-[100%]">
              <div className="gap-[45px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-center overflow-auto self-stretch w-[auto]">
                <HackathonBeautyOneProductcard
                  className="bg-white_A700 flex flex-col items-center justify-start md:px-[20px] w-[100%]"
                  kvdgoodap="images/img_11kvdgoodap.png"
                  bestseller="bestseller"
                  reviewsCounter="161 Reviews"
                  serumfoundation="Everlasting Blush"
                  frameFour="images/img_frame4.svg"
                  select_Shade__$FortyFive="select shade  $45"
                />
                <HackathonBeautyOneProductcard
                  className="bg-white_A700 flex flex-col items-center justify-start md:px-[20px] w-[100%]"
                  kvdgoodap="images/img_11kvdgoodap_174x195.png"
                  bestseller="bestseller"
                  reviewsCounter="115 Reviews"
                  serumfoundation="Foundation"
                  frameFour="images/img_frame4_red_200.svg"
                  select_Shade__$FortyFive="select shade  $39"
                />
                <HackathonBeautyOneProductcard
                  className="bg-white_A700 flex flex-col items-center justify-start md:px-[20px] w-[100%]"
                  kvdgoodap="images/img_11kvdgoodap_1.png"
                  bestseller="bestseller"
                  reviewsCounter="1134 Reviews"
                  serumfoundation="Color Block Lipstick"
                  frameFour="images/img_frame4_red_900.svg"
                  select_Shade__$FortyFive="select shade  $25"
                />
                <HackathonBeautyOneProductcard
                  className="bg-white_A700 flex flex-col items-center justify-start md:px-[20px] w-[100%]"
                  kvdgoodap="images/img_11kvdgoodap_2.png"
                  bestseller="Bestseller"
                  reviewsCounter="345 Reviews"
                  serumfoundation="Le Phyto-Gloss"
                  frameFour="images/img_frame4_red_900.svg"
                  select_Shade__$FortyFive="select shade  $26"
                />
                <HackathonBeautyOneProductcard
                  className="bg-white_A700 flex flex-col items-center justify-start md:px-[20px] w-[100%]"
                  kvdgoodap="images/img_11kvdgoodap_3.png"
                  bestseller="bestseller"
                  reviewsCounter="562 Reviews"
                  serumfoundation="Volumizing and Lengthening Mascara"
                  frameFour="images/img_signal_gray_905.svg"
                  select_Shade__$FortyFive="select shade  $38"
                />
                <HackathonBeautyOneProductcard
                  className="bg-white_A700 flex flex-col items-center justify-start md:px-[20px] w-[100%]"
                  kvdgoodap="images/img_11kvdgoodap_4.png"
                  bestseller="bestseller"
                  reviewsCounter="452 Reviews"
                  serumfoundation="Balmy Gloss Tinted Lip Oil"
                  frameFour="images/img_frame4_red_900_18x130.svg"
                />
              </div>
            </div>
            <div className="h-[6px] overflow-hidden relative w-[57%]">
              <div className="w-full h-full absolute bg-red_200"></div>
              <div
                className="h-full absolute bg-black_900"
                style={{ width: "17%" }}
              ></div>
            </div>
          </div>
          <div className="font-inter h-[3920px] md:px-[20px] relative md:w-[100%] w-[1512px]">
            <div className="h-[3920px] m-[auto] w-[100%]">
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
              <div className="absolute flex inset-x-[0] items-center justify-start max-w-[1512px] mx-[auto] top-[6%] w-[100%]">
                <List
                  className="sm:flex-col flex-row md:gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-start self-stretch md:w-[100%] w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center sm:ml-[0] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex items-center justify-start md:w-[100%] w-[50%]">
                      <Img
                        src="images/img_unsplashimagebobsinovqqw.png"
                        className="h-[619px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashimagebo"
                      />
                    </div>
                    <div className="flex flex-col gap-[20px] h-[620px] md:h-[auto] items-center justify-start py-[20px] self-stretch sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_shade01desktop1280xjpg.png"
                        className="h-[509px] sm:h-[auto] object-cover md:w-[100%] w-[378px]"
                        alt="shade01desktopOne"
                      />
                      <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[219px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                        discover
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center sm:ml-[0] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex items-center justify-start md:w-[100%] w-[50%]">
                      <Img
                        src="images/img_unsplashimagem8vl5jwsv9s.png"
                        className="h-[619px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashimagemEight"
                      />
                    </div>
                    <div className="flex flex-col gap-[20px] items-center justify-start py-[20px] self-stretch sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_unsplashimagenwapsdtmxmk.png"
                        className="h-[515px] sm:h-[auto] object-cover md:w-[100%] w-[378px]"
                        alt="unsplashimagenw"
                      />
                      <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[219px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                        discover
                      </Button>
                    </div>
                  </div>
                </List>
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
            <div className="absolute bottom-[33%] flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] w-[100%]">
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
            <div className="absolute bottom-[10%] flex inset-x-[0] items-center justify-start max-w-[1512px] mx-[auto] w-[100%]">
              <List
                className="sm:flex-col flex-row md:gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-start self-stretch md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start sm:ml-[0] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start md:w-[100%] w-[50%]">
                    <Img
                      src="images/img_unsplashimagem8vl5jwsv9s_619x378.png"
                      className="h-[619px] md:h-[auto] object-cover w-[100%]"
                      alt="unsplashimagemEight"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-center justify-start py-[20px] self-stretch sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_unsplashimagenwapsdtmxmk_514x378.png"
                      className="h-[514px] sm:h-[auto] object-cover md:w-[100%] w-[378px]"
                      alt="unsplashimagenw"
                    />
                    <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[219px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                      discover
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start sm:ml-[0] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start md:w-[100%] w-[50%]">
                    <Img
                      src="images/img_unsplashimagebobsinovqqw_619x378.png"
                      className="h-[619px] md:h-[auto] object-cover w-[100%]"
                      alt="unsplashimagebo"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-center justify-start py-[20px] self-stretch sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_shade01desktop1280xjpg_515x378.png"
                      className="h-[515px] sm:h-[auto] object-cover md:w-[100%] w-[378px]"
                      alt="shade01desktopOne"
                    />
                    <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[219px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
                      discover
                    </Button>
                  </div>
                </div>
              </List>
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

export default HackathonbeautyOnePage;
