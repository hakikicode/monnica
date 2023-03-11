import React from "react";

import { Text, Img, Line } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex items-center justify-center w-[100%]">
          <div className="flex flex-col items-center justify-center w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[71%]">
              <div className="md:h-[13px] h-[14px] relative w-[19%]">
                <div className="absolute bg-red_50 h-[13px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                <Text
                  className="absolute bottom-[0] font-inter font-light inset-x-[0] mx-[auto] text-left text-pink_A700 tracking-[0.30px] w-[max-content]"
                  variant="body16"
                >
                  Free standard shipping on any $35 purchase
                </Text>
              </div>
              <ul className="flex flex-row md:hidden items-center justify-end p-[2px] w-[58%] common-row-list">
                <li className="mt-[15px] mb-[13px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-inter font-light text-[11px] text-gray_600 text-left tracking-[0.30px]"
                    href="javascript:"
                  >
                    Join / Sign In
                  </a>
                </li>
                <li className="mt-[13px] mb-[15px] ml-[37px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-inter font-light text-[11px] text-gray_600 text-left tracking-[0.30px]"
                    href="javascript:"
                  >
                    Track an Order
                  </a>
                </li>
                <li className="ml-[36px] sm:w-[100%] sm:my-[10px] w-[auto] my-[14px]">
                  <a
                    className="cursor-pointer font-inter font-light text-[11px] text-gray_600 text-left tracking-[0.30px]"
                    href="javascript:"
                  >
                    Ultamate Rewards
                  </a>
                </li>
                <li className="mt-[13px] mb-[15px] ml-[36px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-inter font-light text-[11px] text-gray_600 text-left tracking-[0.30px]"
                    href="javascript:"
                  >
                    Find a Store
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:h-[415px] md:h-[96px] h-[97px] relative w-[100%]">
              <Img
                src="images/img_mail.svg"
                className="h-[39px] ml-[280px] my-[auto] w-[96px]"
                alt="mail"
              />
              <div className="absolute sm:h-[415px] md:h-[96px] h-[97px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="flex flex-col m-[auto] w-[100%]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] w-[100%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end mb-[auto] ml-[424px] mt-[-1px] p-[3px] w-[28%] z-[1]">
                    <Text
                      className="font-inter font-light mb-[35px] sm:mt-[0] mt-[38px] text-black_900 text-center tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Shop
                    </Text>
                    <Text
                      className="font-inter font-light sm:ml-[0] ml-[33px] sm:mt-[0] my-[36px] text-black_900 text-center tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Brands
                    </Text>
                    <Text
                      className="font-inter font-light sm:ml-[0] ml-[32px] sm:mt-[0] my-[36px] text-black_900 text-center tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Sale
                    </Text>
                    <Text
                      className="font-inter font-light sm:ml-[0] ml-[33px] sm:mt-[0] my-[36px] text-black_900 text-center tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Discover
                    </Text>
                    <Text
                      className="font-inter font-light mb-[35px] sm:ml-[0] ml-[32px] sm:mt-[0] mt-[38px] text-black_900 text-center tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Beauty Services
                    </Text>
                    <Text
                      className="font-inter font-light sm:ml-[0] ml-[33px] sm:mt-[0] my-[36px] text-black_900 text-left tracking-[0.25px] w-[auto]"
                      variant="body11"
                    >
                      Member Love
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-center mb-[auto] ml-[auto] mr-[280px] mt-[-1px] py-[26px] w-[20%] z-[1]">
                    <div className="border-b-[1px] border-bluegray_900 border-solid flex items-start justify-start pb-[4.81px] pt-[4px] self-stretch w-[auto]">
                      <div className="flex flex-row gap-[16px] items-center justify-between pr-[6px] w-[100%]">
                        <Img
                          src="images/img_search_black_900.svg"
                          className="h-[16px] w-[16px]"
                          alt="search"
                        />
                        <div className="bg-white_A700 flex items-start justify-start pb-[3.8px] pt-[13.39px] px-[2.23px] self-stretch w-[auto]">
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-arial font-normal text-black_900 text-left w-[auto]"
                              variant="body6"
                            >
                              Search products and more
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_favorite_black_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="favorite"
                    />
                    <Img
                      src="images/img_trash.svg"
                      className="h-[24px] w-[24px]"
                      alt="trash"
                    />
                  </div>
                </div>
                <Line className="absolute bg-gray_300 bottom-[0] h-[1px] inset-x-[0] mx-[auto] w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
