import React from "react";

import Header1 from "components/Header1";
import { Text, Input, List, Img, Button, RatingBar } from "components";
import Footer from "components/Footer";

const WwwultacombyhtmltodesignFREEversion09032023Page = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Header1 className="bg-white_A700 flex flex-col items-center justify-center md:px-[20px] w-[100%]" />
        <div className="flex flex-col items-center justify-start sm:px-[20px] px-[279px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1360px] mx-[auto] pt-[48px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-center justify-start pb-[80px] md:w-[100%] w-[67%]">
              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[15px] items-start justify-end w-[100%]">
                  <Text
                    className="text-black_900 text-left tracking-[-0.30px] w-[auto]"
                    variant="body1"
                  >
                    Bag
                  </Text>
                  <Text
                    className="font-light text-gray_600 text-left tracking-[0.30px] w-[auto]"
                    variant="body16"
                  >
                    0 items
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                  <Text
                    className="text-black_900 text-center tracking-[-0.30px] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Your bag is empty
                  </Text>
                  <Text
                    className="font-light text-center text-gray_803 tracking-[0.25px] w-[auto]"
                    variant="body7"
                  >
                    Keep shopping and add something.
                  </Text>
                </div>
              </div>
              <div className="bg-gray_100 flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[48px] p-[48px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[45%]">
                  <Text
                    className="text-black_900 text-left tracking-[-0.30px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Did you leave items in your bag?
                  </Text>
                  <Text
                    className="font-light mt-[9px] text-gray_600 text-left tracking-[0.25px] w-[auto]"
                    variant="body11"
                  >
                    Sign in to see them.
                  </Text>
                  <div className="flex flex-col gap-[31px] items-center justify-start mt-[17px] pb-[1.61px] self-stretch w-[auto]">
                    <div className="flex flex-col items-center justify-start pt-[15px] w-[100%]">
                      <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                        <Text
                          className="font-light text-black_900 text-left tracking-[0.25px] w-[auto]"
                          variant="body11"
                        >
                          Email address or username
                        </Text>
                        <Input
                          wrapClassName="border-[1px] border-gray_600 border-solid flex h-[56px] w-[100%]"
                          className="p-[0] w-[100%]"
                          name="div"
                          placeholder=""
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[24px] self-stretch w-[auto]">
                        <Text
                          className="font-light text-black_900 text-left tracking-[0.25px] w-[auto]"
                          variant="body11"
                        >
                          Password
                        </Text>
                        <Input
                          wrapClassName="border-[1px] border-gray_600 border-solid flex h-[56px] w-[100%]"
                          className="p-[0] w-[100%]"
                          name="div_One"
                          placeholder=""
                        ></Input>
                      </div>
                      <div className="bg-black_900 h-[57px] md:h-[87px] mt-[32px] pb-[21.75px] pl-[147.45px] pr-[146.55px] pt-[20px] sm:px-[20px] md:px-[40px] relative w-[355px]">
                        <div className="bg-black_900 border-[1px] border-black_900 border-solid h-[55px] m-[auto] w-[100%]"></div>
                        <Text
                          className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-center text-white_A700 tracking-[1.40px] uppercase w-[max-content]"
                          variant="body9"
                        >
                          SIGN IN
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black_900 flex items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-light text-black_900 text-center tracking-[0.25px] w-[auto]"
                        variant="body16"
                      >
                        Forgot Your Password?
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[45%]">
                  <Text
                    className="text-black_900 text-left tracking-[-0.30px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    No Ulta Beauty account?
                  </Text>
                  <Text
                    className="font-light mt-[9px] text-gray_600 text-left tracking-[0.25px] w-[auto]"
                    variant="body11"
                  >
                    Create one and take advantage of these benefits.
                  </Text>
                  <List
                    className="sm:flex-col flex-row grid grid-cols-3 justify-start mt-[24px] px-[0.03px] self-stretch w-[auto]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[15.58px] items-center justify-start pl-[5.55px] pr-[13.35px] py-[8px] self-stretch w-[auto]">
                      <Img
                        src="images/img_map.svg"
                        className="h-[42px] w-[42px]"
                        alt="map"
                      />
                      <Text
                        className="font-light leading-[20.00px] md:max-w-[100%] max-w-[99px] text-black_900 text-center tracking-[0.25px]"
                        variant="body11"
                      >
                        Earn points on every purchase
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15.58px] items-center justify-start pl-[29.08px] pr-[28.89px] sm:px-[20px] py-[8px] self-stretch w-[auto]">
                      <Img
                        src="images/img_trash_black_900.svg"
                        className="h-[42px] w-[auto]"
                        alt="trash"
                      />
                      <Text
                        className="font-light leading-[20.00px] md:max-w-[100%] max-w-[60px] text-black_900 text-center tracking-[0.25px]"
                        variant="body11"
                      >
                        Faster checkout
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15.58px] items-center justify-start sm:pl-[20px] pl-[22.69px] pr-[14.5px] py-[8px] self-stretch w-[auto]">
                      <Img
                        src="images/img_favorite_black_900.svg"
                        className="h-[42px] w-[auto]"
                        alt="favorite"
                      />
                      <Text
                        className="font-light leading-[20.00px] md:max-w-[100%] max-w-[81px] text-black_900 text-center tracking-[0.25px]"
                        variant="body11"
                      >
                        Save to your favorites
                      </Text>
                    </div>
                  </List>
                  <Button className="border-[1px] border-black_900 border-solid cursor-pointer font-medium mb-[126px] min-w-[355px] mt-[24px] pb-[20.75px] pl-[103.8px] pr-[105.2px] pt-[19px] sm:px-[20px] md:px-[40px] text-[14px] text-black_900 text-center tracking-[1.30px] uppercase w-[auto]">
                    CREATE ACCOUNT
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start mt-[80px] w-[100%]">
                <Text
                  className="text-black_900 text-left tracking-[-0.30px] w-[auto]"
                  variant="body1"
                >
                  Saved for later
                </Text>
                <Input
                  wrapClassName="border-[1px] border-gray_300 border-solid pl-[25px] pr-[35px] py-[27px] w-[100%]"
                  className="font-light p-[0] placeholder:text-gray_803 sm:px-[20px] text-[15px] text-gray_803 text-left tracking-[0.25px] w-[100%]"
                  name="div_Two"
                  placeholder="Sign in to see your saved items."
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start pb-[278px] md:w-[100%] w-[25%]">
              <div className="flex flex-col gap-[22px] items-start justify-start w-[100%]">
                <Text
                  className="text-black_900 text-left tracking-[-0.30px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Order Summary
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start pb-[8px] w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="font-light text-gray_600 text-left tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Subtotal (0 items)
                    </Text>
                    <Text
                      className="font-light text-gray_600 text-right tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      $0.00
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-light text-gray_600 text-left tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Estimated tax
                    </Text>
                    <Text
                      className="font-light text-gray_600 text-right tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Calculated in checkout
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mb-[30px] pr-[2px] py-[2px] w-[100%]">
                  <Text
                    className="font-bold mt-[15px] text-black_900 text-left tracking-[0.25px] w-[auto]"
                    variant="body7"
                  >
                    Estimated total
                  </Text>
                  <Text
                    className="font-bold mt-[17px] text-black_900 text-left tracking-[0.25px] w-[auto]"
                    variant="body9"
                  >
                    $0.00
                  </Text>
                </div>
              </div>
              <Button className="border-b-[1px] border-gray_300 border-solid cursor-pointer font-medium min-w-[328px] mt-[4px] py-[26px] text-[14px] text-center text-white_A700 tracking-[1.30px] uppercase w-[auto]">
                Checkout
              </Button>
              <div className="bg-gray_50 flex flex-row gap-[24px] items-center justify-between mt-[32px] p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_ultamatereward.png"
                  className="h-[104px] md:h-[auto] object-cover w-[104px]"
                  alt="ultamatereward"
                />
                <div className="flex flex-col items-start justify-start pb-[2px] w-[auto]">
                  <div className="flex items-start justify-start pb-[2.33px] pr-[5.82px] self-stretch w-[auto]">
                    <Text
                      className="font-light leading-[24.00px] md:max-w-[100%] max-w-[146px] text-black_900 text-left tracking-[0.25px]"
                      variant="body7"
                    >
                      Ultamate Rewards® Credit Card
                    </Text>
                  </div>
                  <div className="flex items-start justify-start mt-[4px] pb-[2.66px] pr-[10.97px] pt-[2px] self-stretch w-[auto]">
                    <Text
                      className="font-light leading-[20.00px] md:max-w-[100%] max-w-[141px] text-bluegray_900 text-left tracking-[0.25px]"
                      variant="body11"
                    >
                      Start earning 2 points per dollar with the Ultamate
                      Rewards® Credit Card.
                    </Text>
                  </div>
                  <div className="h-[15px] md:h-[36px] mt-[22px] relative w-[41%]">
                    <div className="absolute bg-black_900 bottom-[0] h-[14px] inset-x-[0] mx-[auto] w-[100%]"></div>
                    <Text
                      className="absolute font-light inset-x-[0] mx-[auto] text-black_900 text-left top-[0] tracking-[0.25px] w-[max-content]"
                      variant="body16"
                    >
                      See Details
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[48px] w-[100%]">
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-light text-black_900 text-left tracking-[0.25px] w-[auto]"
                    variant="body7"
                  >
                    Need Help?
                  </Text>
                  <Text
                    className="font-light text-gray_803 text-left tracking-[0.25px] w-[auto]"
                    variant="body11"
                  >
                    We are here everyday from 7am - 11pm CT
                  </Text>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start pt-[16px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[79.73px] self-stretch w-[auto]">
                    <Button
                      className="bg-black_900 cursor-pointer flex items-center justify-center min-w-[124px] pr-[5px] py-[6px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_call.svg"
                          className="mb-[3px] mr-[8px]"
                          alt="call"
                        />
                      }
                    >
                      <div className="font-light text-[12px] text-black_900 text-left tracking-[0.25px]">
                        1-866-983-ULTA
                      </div>
                    </Button>
                    <Text
                      className="font-light text-gray_600 text-left tracking-[0.25px] w-[auto]"
                      variant="body13"
                    >
                      (1-866-983-8582)
                    </Text>
                  </div>
                  <Button
                    className="bg-black_900 cursor-pointer flex items-center justify-center min-w-[160px] pr-[2px] py-[2px] w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_reply.svg"
                        className="mb-[5px] mr-[10px]"
                        alt="reply"
                      />
                    }
                  >
                    <div className="font-light text-[13px] text-black_900 text-center tracking-[0.25px]">
                      Chat with a specialist
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-start justify-start max-w-[1360px] mx-[auto] w-[100%]">
            <Text
              className="text-black_900 text-left tracking-[-0.30px] w-[auto]"
              variant="body1"
            >
              Recommended For You
            </Text>
            <div className="h-[498px] relative w-[100%]">
              <Text
                className="font-light text-gray_600 text-left tracking-[0.25px] w-[auto]"
                variant="body11"
              >
                12 items
              </Text>
              <div className="absolute flex flex-col gap-[18px] h-[100%] inset-[0] items-end justify-center m-[auto] w-[100%]">
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  className="h-[32px] w-[auto]"
                  alt="arrowdown"
                />
                <div className="flex items-center justify-start w-[100%]">
                  <List
                    className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] pb-[3px] w-[100%]">
                      <div className="bg-gray_100 flex items-center justify-start sm:px-[20px] md:px-[40px] px-[65px] w-[100%]">
                        <Img
                          src="images/img_2551164.png"
                          className="h-[324px] md:h-[auto] object-cover w-[99%]"
                          alt="2551164"
                        />
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-center p-[8px] w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[8px] pb-[8px] w-[100%]">
                          <div className="flex items-start justify-start pr-[2px] py-[2px] w-[100%]">
                            <Text
                              className="font-light text-gray_600 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              The Ordinary
                            </Text>
                          </div>
                          <div className="flex items-start justify-start pr-[2px] pt-[2px] w-[100%]">
                            <Text
                              className="font-light text-black_900 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              Hyaluronic Acid 2% + B5 Hydrating Serum
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <RatingBar
                            className=""
                            value={1}
                            starCount={5}
                            size={12}
                          ></RatingBar>
                          <Text
                            className="font-light ml-[4px] text-gray_600 text-left tracking-[0.30px] w-[auto]"
                            variant="body16"
                          >
                            (3,180)
                          </Text>
                        </div>
                        <Text
                          className="font-light mb-[17px] mt-[5px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                          variant="body16"
                        >
                          $8.90
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] pb-[3px] w-[100%]">
                      <div className="bg-gray_100 flex items-center justify-start sm:px-[20px] md:px-[40px] px-[65px] w-[100%]">
                        <Img
                          src="images/img_2561653.png"
                          className="h-[324px] md:h-[auto] object-cover w-[99%]"
                          alt="2561653"
                        />
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-center p-[8px] w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[8px] pb-[8px] w-[100%]">
                          <div className="flex items-start justify-start w-[100%]">
                            <Text
                              className="font-light mb-[3px] text-gray_600 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              Grande Cosmetics
                            </Text>
                          </div>
                          <div className="flex items-start justify-start pr-[2px] pt-[2px] w-[100%]">
                            <Text
                              className="font-light text-black_900 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              Travel Size GrandeLASH-MD Lash Enhancing Serum
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <RatingBar
                            className=""
                            value={1}
                            starCount={5}
                            size={12}
                          ></RatingBar>
                          <Text
                            className="font-light ml-[4px] text-gray_600 text-left tracking-[0.30px] w-[auto]"
                            variant="body16"
                          >
                            (4,324)
                          </Text>
                        </div>
                        <Text
                          className="font-light mb-[17px] mt-[5px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                          variant="body16"
                        >
                          $36.00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] pb-[3px] w-[100%]">
                      <div className="bg-gray_100 flex items-center justify-start sm:px-[20px] md:px-[40px] px-[65px] w-[100%]">
                        <Img
                          src="images/img_2592847.png"
                          className="h-[324px] md:h-[auto] object-cover w-[99%]"
                          alt="2592847"
                        />
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-center p-[8px] w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[8px] pb-[8px] w-[100%]">
                          <div className="flex items-start justify-start pr-[2px] py-[2px] w-[100%]">
                            <Text
                              className="font-light text-gray_600 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              The Ordinary
                            </Text>
                          </div>
                          <div className="flex items-start justify-start pr-[2px] pt-[2px] w-[100%]">
                            <Text
                              className="font-light text-black_900 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              Multi-Peptide Lash and Brow Serum
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <RatingBar
                            className=""
                            value={1}
                            starCount={5}
                            size={12}
                          ></RatingBar>
                          <Text
                            className="font-light ml-[4px] text-gray_600 text-left tracking-[0.30px] w-[auto]"
                            variant="body16"
                          >
                            (2,999)
                          </Text>
                        </div>
                        <Text
                          className="font-light mb-[17px] mt-[5px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                          variant="body16"
                        >
                          $14.50
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] pb-[3px] w-[100%]">
                      <div className="bg-gray_100 flex flex-row gap-[5px] items-start justify-start sm:px-[20px] px-[22px] w-[100%]">
                        <Text
                          className="font-light mt-[277px] text-gray_600 text-left tracking-[0.30px] w-[auto]"
                          variant="body16"
                        >
                          3 sizes
                        </Text>
                        <Img
                          src="images/img_2568843.png"
                          className="h-[324px] md:h-[auto] object-cover w-[70%]"
                          alt="2568843"
                        />
                      </div>
                      <div className="bg-white_A700 flex flex-col items-start justify-center p-[8px] w-[100%]">
                        <div className="flex flex-col items-center justify-start mt-[8px] pb-[8px] w-[100%]">
                          <div className="flex items-start justify-start w-[100%]">
                            <Text
                              className="font-light mb-[3px] text-gray_600 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              Valentino
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[100%]">
                            <Text
                              className="font-light text-black_900 text-left tracking-[0.30px] w-[auto]"
                              variant="body16"
                            >
                              Donna Born In Roma Eau de Parfum
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start pr-[2px] pt-[2px] w-[100%]">
                          <RatingBar
                            className=""
                            value={1}
                            starCount={5}
                            size={12}
                          ></RatingBar>
                          <Text
                            className="ml-[4px] text-gray_600 text-left tracking-[0.30px] w-[auto]"
                            variant="body17"
                          >
                            (5,411)
                          </Text>
                        </div>
                        <Text
                          className="font-light mb-[17px] mt-[5px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                          variant="body16"
                        >
                          $85.00 - $156.00
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="border-gray_300 border-solid border-t-[1px] flex items-center justify-center mt-[168px] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default WwwultacombyhtmltodesignFREEversion09032023Page;
