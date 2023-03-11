import React from "react";

import { Text, Button } from "components";
import ButtonsColumnlabel from "components/ButtonsColumnlabel";
import ButtonsProperty1open from "components/ButtonsProperty1open";

const ButtonsPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-start justify-start mx-[auto] p-[59px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mb-[96px] mt-[40px] md:w-[100%] w-[66%]">
          <div className="flex flex-col items-start justify-start md:mt-[0] mt-[25px] md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]"
              variant="body6"
            >
              default Primary
            </Text>
            <Text
              className="font-normal mt-[51px] not-italic text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]"
              variant="body6"
            >
              hover primary
            </Text>
            <Text
              className="font-normal mt-[52px] not-italic text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]"
              variant="body6"
            >
              Default Secondary
            </Text>
            <Text
              className="font-normal mt-[52px] not-italic text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]"
              variant="body6"
            >
              hover Secondary
            </Text>
          </div>
          <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[3px] p-[20px] rounded-[5px] md:w-[100%] w-[30%]">
            <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[228px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
              SHOP NOW
            </Button>
            <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[228px] mt-[11px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]">
              SHOP NOW
            </Button>
            <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[228px] mt-[20px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]">
              SHOP NOW
            </Button>
            <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[228px] mt-[29px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]">
              SHOP NOW
            </Button>
          </div>
          <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[22px] items-center justify-start md:ml-[0] ml-[247px] md:mt-[0] mt-[21px] p-[18px] rounded-[5px] md:w-[100%] w-[23%]">
            <ButtonsColumnlabel
              className="flex flex-col items-center justify-start rounded-[4px] md:w-[100%] w-[auto]"
              label="LABEL"
            />
            <ButtonsProperty1open
              className="flex flex-col items-center justify-start mb-[2px] rounded-[4px] md:w-[100%] w-[auto]"
              label_One="LABEL"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonsPage;
