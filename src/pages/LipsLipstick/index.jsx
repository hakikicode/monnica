import React from "react";

import CheckoutHeader from "components/CheckoutHeader";
import ComponentsRowlanguage from "components/ComponentsRowlanguage";
import LipsLipstickSection from "components/LipsLipstickSection";
import { Text } from "components";
import LipsLipstickSection1 from "components/LipsLipstickSection1";
import LipsLipstickFooter from "components/LipsLipstickFooter";

const LipsLipstickPage = () => {
  return (
    <>
      <div className="flex font-roboto items-end justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start self-stretch md:w-[100%] w-[auto]">
          <CheckoutHeader
            className="flex flex-col items-center justify-center md:px-[20px] self-stretch w-[100%]"
            new="New"
            bestsellers="Bestsellers"
            face="Face"
            eye="Eye"
            lip="Lip"
            exclusives="Exclusives"
            sale="Sale"
          />
          <ComponentsRowlanguage
            className="bg-gray_900 flex flex-row flex-wrap items-center justify-start max-w-[1512px] sm:px-[20px] md:px-[40px] px-[72px] w-[100%]"
            language="Shop "
            language_One="Lip "
            language_Two="Lipstick"
          />
          <LipsLipstickSection
            className="bg-gray_900 flex flex-row flex-wrap font-inter items-center justify-between max-w-[1510px] sm:px-[20px] md:px-[40px] px-[71px] py-[12px] w-[100%]"
            productsCounter="4 Products"
          />
          <div className="bg-gray_900 flex font-inter items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <div className="bg-gray_900 flex items-start justify-start pb-[65px] pl-[568.19px] pr-[568px] pt-[60px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
              <Text
                className="text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]"
                as="h2"
                variant="h2"
              >
                Lipstick
              </Text>
            </div>
          </div>
          <LipsLipstickSection1 className="bg-gray_900 flex flex-col font-inter items-center justify-start pb-[160px] self-stretch md:w-[100%] w-[auto]" />
          <LipsLipstickFooter
            className="flex flex-col font-inter items-start justify-start self-stretch md:w-[100%] w-[auto]"
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
    </>
  );
};

export default LipsLipstickPage;
