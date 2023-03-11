import React from "react";

import { Img, Input, Text } from "components";
import { CloseSVG } from "../../assets/images";

const ComponentsTwoColumnsignalOne = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="bg-black_900 border-b-[1px] border-gray_800 border-solid flex sm:flex-col flex-row md:gap-[40px] gap-[886px] items-center justify-start sm:px-[20px] md:px-[40px] px-[72px] py-[10px] w-[100%]">
          <div className="border-[1px] border-red_200 border-solid flex sm:flex-1 items-center justify-end p-[4px] sm:w-[100%] w-[9%]">
            <Img
              src="images/img_signal.svg"
              className="h-[32px] mt-[2px] w-[auto]"
              alt="signal_One"
            />
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start self-stretch w-[auto]">
            <div className="flex items-center justify-end self-stretch sm:w-[100%] w-[auto]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                wrapClassName="border-[1px] border-red_200 border-solid flex p-[7px] rounded-[3px] w-[auto]"
                className="font-normal font-roboto gap-[60px] not-italic p-[0] placeholder:text-gray_800 self-stretch text-[16px] text-gray_800 text-left tracking-[0.12px] w-[100%]"
                name="div_Two"
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
            <div className="flex flex-row gap-[15px] items-center justify-end self-stretch w-[auto]">
              <Img
                src="images/img_microphone.svg"
                className="h-[26px] w-[26px]"
                alt="microphone"
              />
              <Img
                src="images/img_globe.svg"
                className="h-[26px] w-[26px]"
                alt="globe"
              />
              <Img
                src="images/img_computer.svg"
                className="h-[26px] w-[26px]"
                alt="computer"
              />
              <Img
                src="images/img_user.svg"
                className="h-[26px] w-[26px]"
                alt="user"
              />
              <div className="md:h-[26px] h-[37px] relative w-[18%]">
                <Img
                  src="images/img_cart.svg"
                  className="absolute bottom-[0] h-[26px] left-[0] w-[26px]"
                  alt="cart"
                />
                <Text
                  className="absolute bg-gray_800 flex font-arial h-[25px] items-center justify-center right-[0] rounded-[12px] text-center text-white_A700 top-[0] tracking-[0.17px] w-[25px]"
                  variant="body8"
                >
                  {props?.span}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black_900 flex items-center justify-center max-w-[1512px] w-[100%]">
          <div className="flex sm:flex-col flex-row gap-[50px] h-[69px] md:h-[auto] items-center justify-center max-w-[1511px] sm:px-[20px] md:px-[40px] px-[72px] py-[15px] w-[100%]">
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              {props?.new_One}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              {props?.bestsellers_One}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              {props?.face_One}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              {props?.eye_One}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              {props?.lip_One}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              {props?.exclusives_One}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
              variant="body4"
            >
              {props?.sale_One}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsTwoColumnsignalOne.defaultProps = {
  span: "1",
  new_One: "New",
  bestsellers_One: "Bestsellers",
  face_One: "Face",
  eye_One: "Eye",
  lip_One: "Lip",
  exclusives_One: "Exclusives",
  sale_One: "Sale",
};

export default ComponentsTwoColumnsignalOne;
