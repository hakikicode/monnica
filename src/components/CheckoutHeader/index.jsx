import React from "react";

import { Img, Input, Text } from "components";
import { CloseSVG } from "../../assets/images";

const CheckoutHeader = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="bg-black_900 flex sm:flex-col flex-row md:gap-[40px] gap-[886px] items-center justify-start sm:px-[20px] md:px-[40px] px-[72px] py-[10px] w-[100%]">
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
            <Img
              src="images/img_div.svg"
              className="h-[26px] w-[190px]"
              alt="div_One"
            />
          </div>
        </div>
        <div className="bg-black_900 flex items-center justify-center max-w-[1512px] w-[100%]">
          <ul className="flex sm:flex-col flex-row gap-[50px] h-[69px] md:h-[auto] md:hidden items-center justify-center max-w-[1511px] sm:px-[20px] md:px-[40px] px-[72px] py-[15px] w-[100%] common-row-list">
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase"
                href="javascript:"
              >
                {props?.new}
              </a>
            </li>
            <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase"
                href="javascript:"
              >
                {props?.bestsellers}
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase"
                href="javascript:"
              >
                {props?.face}
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase"
                href="javascript:"
              >
                {props?.eye}
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase"
                href="javascript:"
              >
                {props?.lip}
              </a>
            </li>
            <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase"
                href="javascript:"
              >
                {props?.exclusives}
              </a>
            </li>
            <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-inter font-normal not-italic text-[18px] text-left text-red_200 tracking-[1.08px] uppercase"
                href="javascript:"
              >
                {props?.sale}
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

CheckoutHeader.defaultProps = {
  new: "New",
  bestsellers: "Bestsellers",
  face: "Face",
  eye: "Eye",
  lip: "Lip",
  exclusives: "Exclusives",
  sale: "Sale",
};

export default CheckoutHeader;
