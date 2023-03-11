import React from "react";

import { Text, Img } from "components";

const LipsLipstickFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black_900 flex items-center justify-start max-w-[1512px] sm:px-[20px] md:px-[40px] px-[72px] py-[80px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[140px] md:gap-[40px] items-start justify-start max-w-[1136px] w-[100%]">
            <div className="flex flex-col gap-[30px] items-start justify-start w-[324px]">
              <Text
                className="font-inter text-left text-red_200 tracking-[0.17px] uppercase w-[auto]"
                variant="body3"
              >
                {props?.helpmenu}
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-left text-red_200 tracking-[0.12px] w-[auto]"
                variant="body6"
              >
                {props?.discoverthelate_One}
              </Text>
              <Img
                src="images/img_social.svg"
                className="h-[19px] w-[113px]"
                alt="social"
              />
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-[40px] gap-[88px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[22px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-inter text-left text-red_200 tracking-[0.17px] uppercase w-[auto]"
                  variant="body3"
                >
                  {props?.helpmenu_One}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.about}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.shop}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.blog}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.career}
                </Text>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-inter text-left text-red_200 tracking-[0.17px] uppercase w-[auto]"
                  variant="body3"
                >
                  {props?.helpmenu_Two}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.customersupport_One}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.delivery}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.details}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.privacypolicy}
                </Text>
                <Text
                  className="font-inter font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                  variant="body4"
                >
                  {props?.termAndCondition}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LipsLipstickFooter.defaultProps = {
  helpmenu: "About Monnica beauty",
  discoverthelate_One: "Discover the Latest Beauty Must-Haves",
  helpmenu_One: "Information",
  about: "About",
  shop: "shop",
  blog: "Blog",
  career: "Career",
  helpmenu_Two: "Help",
  customersupport_One: "Customer Support",
  delivery: "Delivery",
  details: "Details",
  privacypolicy: "Privacy Policy",
  termAndCondition: "Terms & Conditions",
};

export default LipsLipstickFooter;
