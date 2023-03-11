import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[16px] items-center justify-center mt-[41px] w-[100%]">
          <div className="flex flex-col gap-[49px] items-start justify-start sm:px-[20px] px-[40px] md:w-[100%] w-[75%]">
            <Img
              src="images/img_footertagline.png"
              className="h-[39px] md:h-[auto] object-cover w-[24%]"
              alt="footertagline"
            />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[48px] items-center justify-start pb-[131px] md:w-[100%] w-[16%]">
                <div className="flex flex-col gap-[17px] items-start justify-start py-[2px] w-[100%]">
                  <Text
                    className="font-bold font-inter text-gray_600 text-left tracking-[0.25px] w-[auto]"
                    variant="body11"
                  >
                    Ultamate Rewards
                  </Text>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                    <Text
                      className="font-inter font-light text-black_900 text-left tracking-[0.30px] w-[auto]"
                      variant="body16"
                    >
                      Become a Member
                    </Text>
                    <Text
                      className="font-inter font-light mb-[3px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                      variant="body16"
                    >
                      About Rewards
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start pt-[3px] w-[100%]">
                  <Text
                    className="font-bold font-inter leading-[20.00px] text-gray_600 text-left tracking-[0.25px] sm:w-[100%] w-[58%]"
                    variant="body11"
                  >
                    Ultamate Rewards Credit Card
                  </Text>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <Text
                      className="font-inter font-light text-black_900 text-left tracking-[0.30px] w-[auto]"
                      variant="body13"
                    >
                      Apply Now
                    </Text>
                    <div className="flex flex-row gap-[30px] items-end justify-start mb-[2px] md:w-[100%] w-[76%]">
                      <Text
                        className="font-inter font-light mt-[9px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                        variant="body16"
                      >
                        Manage My Card
                      </Text>
                      <Img
                        src="images/img_frame_deep_orange_401.svg"
                        className="h-[24px] w-[auto]"
                        alt="frame"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[16px] pt-[3px] md:w-[100%] w-[16%]">
                <Text
                  className="font-bold font-inter text-gray_600 text-left tracking-[0.25px] w-[auto]"
                  variant="body11"
                >
                  Get Help
                </Text>
                <ul className="flex flex-col items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-inter font-light text-black_900 text-left tracking-[0.30px]"
                      variant="body16"
                    >
                      Track an Order
                    </Text>
                  </li>
                  <li className="mt-[22px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Shipping and Delivery
                    </a>
                  </li>
                  <li className="mt-[20px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Returns
                    </a>
                  </li>
                  <li className="mt-[21px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li className="mt-[22px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Ways to Shop
                    </a>
                  </li>
                  <li className="mt-[20px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Guest Services Center
                    </a>
                  </li>
                  <li className="mt-[21px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="mt-[22px] mb-[3px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[16px] pt-[3px] md:w-[100%] w-[16%]">
                <Text
                  className="font-bold font-inter text-gray_600 text-left tracking-[0.25px] w-[auto]"
                  variant="body11"
                >
                  Our Company
                </Text>
                <ul className="flex flex-col items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-inter font-light text-black_900 text-left tracking-[0.30px]"
                      variant="body16"
                    >
                      About Us
                    </Text>
                  </li>
                  <li className="mt-[22px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Diversity, Equity & Inclusion
                    </a>
                  </li>
                  <li className="mt-[20px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mt-[21px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Investors
                    </a>
                  </li>
                  <li className="mt-[22px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Corporate Responsibility
                    </a>
                  </li>
                  <li className="mt-[20px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Product Submissions
                    </a>
                  </li>
                  <li className="mt-[22px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li className="mt-[21px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      Supply Chain Transparency
                    </a>
                  </li>
                  <li className="mt-[20px] mb-[3px] w-[auto]">
                    <a
                      className="cursor-pointer font-inter font-light text-[11px] text-black_900 text-left tracking-[0.30px]"
                      href="javascript:"
                    >
                      UB Media
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-1 flex-col gap-[48px] items-center justify-start md:ml-[0] ml-[16px] pb-[95px] md:w-[100%] w-[25%]">
                <div className="flex flex-col gap-[17px] items-start justify-start pt-[2px] w-[100%]">
                  <Text
                    className="font-bold font-inter text-gray_600 text-left tracking-[0.25px] w-[auto]"
                    variant="body11"
                  >
                    Social Media
                  </Text>
                  <Img
                    src="images/img_ul_black_900.svg"
                    className="h-[27px] w-[auto]"
                    alt="ul"
                  />
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start pt-[3px] w-[100%]">
                  <Text
                    className="font-bold font-inter text-gray_600 text-left tracking-[0.25px] w-[auto]"
                    variant="body11"
                  >
                    Download the App
                  </Text>
                  <div className="flex flex-col gap-[15px] items-start justify-start pt-[2px] w-[100%]">
                    <Text
                      className="font-inter font-light text-black_900 text-left tracking-[0.30px] w-[auto]"
                      variant="body16"
                    >
                      Scan the QR code with your mobile device.
                    </Text>
                    <Img
                      src="images/img_div_black_900.svg"
                      className="h-[112px] w-[auto]"
                      alt="div_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[201px] h-[217px] md:ml-[0] ml-[16px] relative md:w-[100%] w-[25%]">
                <div className="absolute bg-yellow_900 h-[57px] inset-x-[0] mx-[auto] top-[0] w-[86%]"></div>
                <div className="absolute bg-red_50 bottom-[0] flex flex-col gap-[18px] inset-x-[0] items-start justify-end mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
                  <Text
                    className="font-inter leading-[28.00px] mt-[2px] text-black_900 text-left tracking-[-0.30px] sm:w-[100%] w-[80%]"
                    as="h5"
                    variant="h5"
                  >
                    Sign up for news and special offers.
                  </Text>
                  <div className="flex flex-col gap-[32px] items-start justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-inter font-light leading-[16.00px] text-black_900 text-left tracking-[0.30px] sm:w-[100%] w-[94%]"
                      variant="body13"
                    >
                      Receive emails or texts about our latest sales, new
                      arrivals and special offers.
                    </Text>
                    <Text
                      className="bg-black_900 font-inter font-light h-[17px] md:ml-[0] ml-[2px] pr-[2px] text-black_900 text-left tracking-[0.25px] w-[49px]"
                      variant="body11"
                    >
                      Sign up
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_50 border-pink_A400 border-solid border-t-[4px] flex items-center justify-start pt-[4px] px-[4px] w-[100%]">
            <div className="flex items-center justify-start md:w-[100%] w-[76%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between p-[10px] w-[100%]">
                <Text
                  className="font-inter font-light sm:ml-[0] ml-[30px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                  variant="body16"
                >
                  © Ulta Beauty, Inc. 2023
                </Text>
                <div className="flex sm:flex-1 flex-row items-start justify-start mr-[30px] pr-[2px] py-[2px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-inter font-light mt-[4px] text-gray_803 text-left tracking-[0.30px] w-[auto]"
                    variant="body16"
                  >
                    Powered by Quazi™
                  </Text>
                  <Text
                    className="font-inter font-light ml-[56px] mt-[4px] text-gray_803 text-left tracking-[0.30px] w-[auto]"
                    variant="body16"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="font-inter font-light ml-[27px] my-[2px] text-gray_803 text-left tracking-[0.30px] w-[auto]"
                    variant="body16"
                  >
                    Terms & Conditions
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
