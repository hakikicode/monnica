import React from "react";

import { List, Text } from "components";
import ComponentsTwoPropertydefaul from "components/ComponentsTwoPropertydefaul";
import ComponentsTwoPropertyproduc from "components/ComponentsTwoPropertyproduc";
import ComponentsTwoPrice from "components/ComponentsTwoPrice";
import ComponentsTwoProperty1comple from "components/ComponentsTwoProperty1comple";
import ComponentsTwoProperty1change from "components/ComponentsTwoProperty1change";
import ComponentsTwoProperty1varian from "components/ComponentsTwoProperty1varian";
import ComponentsTwoProperty1varianOne from "components/ComponentsTwoProperty1varianOne";
import ComponentsTwoProperty1varianTwo from "components/ComponentsTwoProperty1varianTwo";
import HackathonBeautyOneHeader from "components/HackathonBeautyOneHeader";
import ComponentsTwoColumnsignalOne from "components/ComponentsTwoColumnsignalOne";
import HackathonBeautyOneFooter from "components/HackathonBeautyOneFooter";
import ComponentsTwoSection from "components/ComponentsTwoSection";

const ComponentsTwoPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-start justify-end mx-[auto] sm:pr-[20px] pr-[37px] py-[37px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[3308px] mt-[19px] mx-[auto] md:px-[20px] w-[100%]">
          <List
            className="border-[1px] border-deep_purple_A200 border-solid md:flex-1 flex-col gap-[7px] grid md:mt-[0] mt-[228px] pr-[20px] py-[20px] rounded-[5px] md:w-[100%] w-[47%]"
            orientation="vertical"
          >
            <ComponentsTwoPropertydefaul
              className="flex flex-col items-center justify-start self-stretch md:w-[100%] w-[auto]"
              lipstick="Lipstick"
              show_All="Show all"
            />
            <ComponentsTwoPropertyproduc className="flex flex-col items-center justify-start self-stretch md:w-[100%] w-[auto]" />
          </List>
          <div className="flex md:flex-1 flex-col items-center justify-start mb-[169px] md:w-[100%] w-[47%]">
            <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[20px] items-center justify-start p-[20px] rounded-[5px] w-[100%]">
              <ComponentsTwoPrice className="bg-lime_400 font-bold h-[84px] md:max-w-[100%] max-w-[1512px] pl-[16px] sm:pr-[20px] pr-[35px] py-[17px] sm:text-[36px] md:text-[38px] text-[40px] text-gray_900 text-left tracking-[1.00px] uppercase w-[100%]" />
              <ComponentsTwoProperty1comple className="bg-green_400_dd font-bold h-[84px] md:max-w-[100%] max-w-[1512px] pl-[16px] sm:pr-[20px] pr-[35px] py-[17px] sm:text-[36px] md:text-[38px] text-[40px] text-gray_900 text-left tracking-[1.00px] uppercase w-[100%]" />
              <ComponentsTwoProperty1change className="bg-red_300 font-bold h-[84px] md:max-w-[100%] max-w-[1512px] pl-[16px] sm:pr-[20px] pr-[35px] py-[17px] sm:text-[36px] md:text-[38px] text-[40px] text-gray_900 text-left tracking-[1.00px] uppercase w-[100%]" />
              <ComponentsTwoProperty1varian className="bg-red_301 font-bold h-[84px] md:max-w-[100%] max-w-[1512px] pl-[16px] sm:pr-[20px] pr-[35px] py-[17px] sm:text-[36px] md:text-[38px] text-[40px] text-gray_900 text-left tracking-[1.00px] uppercase w-[100%]" />
              <ComponentsTwoProperty1varianOne className="bg-cyan_300 font-bold h-[84px] md:max-w-[100%] max-w-[1512px] pl-[16px] sm:pr-[20px] pr-[35px] py-[17px] sm:text-[36px] md:text-[38px] text-[40px] text-gray_900 text-left tracking-[1.00px] uppercase w-[100%]" />
              <ComponentsTwoProperty1varianTwo className="bg-purple_301 font-bold h-[84px] md:max-w-[100%] max-w-[1512px] pl-[16px] sm:pr-[20px] pr-[35px] py-[17px] sm:text-[36px] md:text-[38px] text-[40px] text-gray_900 text-left tracking-[1.00px] uppercase w-[100%]" />
            </div>
            <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col font-roboto gap-[20px] items-center justify-start mt-[328px] p-[20px] rounded-[5px] w-[100%]">
              <HackathonBeautyOneHeader
                className="flex flex-col items-start justify-start self-stretch md:w-[100%] w-[auto]"
                new="New"
                bestsellers="Bestsellers"
                face="Face"
                eye="Eye"
                lip="Lip"
                exclusives="Exclusives"
                sale="Sale"
              />
              <ComponentsTwoColumnsignalOne
                className="flex flex-col items-start justify-start self-stretch md:w-[100%] w-[auto]"
                new_One="New"
                bestsellers_One="Bestsellers"
                face_One="Face"
                eye_One="Eye"
                lip_One="Lip"
                exclusives_One="Exclusives"
                sale_One="Sale"
              />
            </div>
            <HackathonBeautyOneFooter
              className="flex flex-col font-inter items-start justify-start mt-[195px] self-stretch md:w-[100%] w-[auto]"
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
            <ComponentsTwoSection
              className="bg-gray_900 flex flex-row flex-wrap font-inter items-center justify-between max-w-[1512px] mt-[79px] sm:px-[20px] md:px-[40px] px-[71px] py-[12px] w-[100%]"
              productsCounter="9 Products"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsTwoPage;
