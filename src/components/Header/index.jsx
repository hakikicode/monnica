import React from "react";

import { Img, Input, Text } from "components";
import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="bg-black_900 border-b-[1px] border-gray_800 border-solid flex sm:flex-col flex-row md:gap-[40px] gap-[886px] items-center justify-start sm:px-[20px] md:px-[40px] px-[72px] py-[10px] w-[100%]">
          <div className="border-[1px] border-red_200 border-solid flex sm:flex-1 items-center justify-end p-[4px] sm:w-[100%] w-[9%]">
            <Img
              src="images/img_signal.svg"
              className="h-[32px] mt-[2px] w-[auto]"
              alt="signal"
            />
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start self-stretch w-[auto]">
            <div className="flex items-center justify-end self-stretch sm:w-[100%] w-[auto]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                wrapClassName="border-[1px] border-red_200 border-solid flex p-[7px] rounded-[3px] w-[auto]"
                className="font-normal font-roboto gap-[60px] not-italic p-[0] placeholder:text-gray_800 self-stretch text-[16px] text-gray_800 text-left tracking-[0.12px] w-[100%]"
                name="div"
                placeholder="Search"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer ml-[35px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#615438"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[35px] my-[auto]"
                      alt="search"
                    />
                  )
                }
              ></Input>
            </div>
            <ul className="flex flex-row gap-[15px] sm:hidden items-center justify-end self-stretch w-[auto] common-row-list">
              <li className="mt-[11px] sm:w-[100%] sm:my-[10px] w-[14%]">
                <Img
                  src="images/img_microphone.svg"
                  className="h-[26px]"
                  alt="microphone"
                />
              </li>
              <li className="mt-[11px] sm:w-[100%] sm:my-[10px] w-[14%]">
                <Img
                  src="images/img_globe.svg"
                  className="h-[26px]"
                  alt="globe"
                />
              </li>
              <li className="mt-[11px] sm:w-[100%] sm:my-[10px] w-[14%]">
                <Img
                  src="images/img_computer.svg"
                  className="h-[26px]"
                  alt="computer"
                />
              </li>
              <li className="mt-[11px] sm:w-[100%] sm:my-[10px] w-[14%]">
                <Img
                  src="images/img_user.svg"
                  className="h-[26px]"
                  alt="user"
                />
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[18%] relative">
                <div className="md:h-[26px] h-[37px] relative">
                  <Img
                    src="images/img_cart.svg"
                    className="absolute bottom-[0] h-[26px] left-[0] w-[26px]"
                    alt="cart"
                  />
                  <a
                    className="hover:absolute absolute bg-gray_800 cursor-pointer flex font-arial font-normal h-[25px] items-center justify-center right-[0] rounded-[12px] text-[14.57px] text-center text-white_A700 top-[0] tracking-[0.17px] w-[25px]"
                    href="javascript:"
                  >
                    1
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black_900 flex items-center justify-center max-w-[1512px] w-[100%]">
          <div className="flex sm:flex-col flex-row gap-[50px] h-[69px] md:h-[auto] items-center justify-center max-w-[1511px] sm:px-[20px] md:px-[40px] px-[72px] py-[15px] w-[100%]">
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              New
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              Bestsellers
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              Face
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              Eye
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              Lip
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              Exclusives
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              Sale
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
