import React from "react";

import ComponentsOneProperty1mini from "components/ComponentsOneProperty1mini";
import ComponentsOneProperty1maxi from "components/ComponentsOneProperty1maxi";
import ComponentsOneLogodefault from "components/ComponentsOneLogodefault";
import ComponentsOneLogohover from "components/ComponentsOneLogohover";
import ComponentsRowlanguage from "components/ComponentsRowlanguage";

const ComponentsOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-roboto items-start justify-start mx-[auto] p-[34px] sm:px-[20px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start mb-[103px] mt-[24px] md:px-[20px] md:w-[100%] w-[68%]">
          <div className="border-[1px] border-deep_purple_A200 border-solid flex sm:flex-col flex-row gap-[20px] items-start justify-start p-[8px] rounded-[5px] md:w-[100%] w-[81%]">
            <ComponentsOneProperty1mini
              className="flex flex-col md:hidden justify-start sm:ml-[0] ml-[10px] w-[219px]"
              new="NEW"
              serumfoundation_One="Serum Foundation"
              price="$40.00"
              shades="+40 Shades"
            />
            <ComponentsOneProperty1maxi
              className="bg-white_A700 flex flex-1 flex-col font-inter items-center justify-start w-[100%]"
              new_One="NEW"
              serumfoundation_Three="Serum Foundation"
              price_One="$40.00"
              shop_Now="SHOP NOW"
            />
          </div>
          <div className="flex flex-col gap-[139px] md:gap-[40px] items-center justify-start md:w-[100%] w-[18%]">
            <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[20px] items-center justify-start p-[20px] rounded-[5px] md:w-[100%] w-[98%]">
              <ComponentsOneLogodefault className="border-[1px] border-red_200 border-solid flex flex-col items-center justify-end p-[4px] md:w-[100%] w-[auto]" />
              <ComponentsOneLogohover className="border-[1px] border-gray_800 border-solid flex flex-col items-center justify-end p-[4px] md:w-[100%] w-[auto]" />
            </div>
            <ComponentsRowlanguage
              className="flex flex-row items-center justify-center self-stretch sm:w-[100%] w-[auto]"
              language="Body "
              language_One="Body "
              language_Two="Body "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsOnePage;
