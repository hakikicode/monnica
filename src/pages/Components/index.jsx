import React from "react";

import ComponentsProductcard1 from "components/ComponentsProductcard1";
import ComponentsProductcard from "components/ComponentsProductcard";
import HackathonBeautyOneProductcard from "components/HackathonBeautyOneProductcard";
import ComponentsLogo from "components/ComponentsLogo";
import ComponentsLogohover from "components/ComponentsLogohover";
import ComponentsRowlanguage from "components/ComponentsRowlanguage";
import ComponentsRowlanguageThree from "components/ComponentsRowlanguageThree";

const ComponentsPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-roboto items-center justify-start mx-[auto] p-[27px] sm:px-[20px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1447px] mb-[98px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-1 md:flex-col flex-row gap-[20px] items-start justify-evenly md:mt-[0] mt-[31px] p-[9px] rounded-[5px] md:w-[100%] w-[60%]">
            <ComponentsProductcard1
              className="flex flex-col md:hidden justify-start w-[219px]"
              kvdgoodap="images/img_11kvdgoodap_195x195.png"
              new_One="NEW"
              serumfoundation_One="Serum Foundation"
              price="$40.00"
              shades="+40 Shades"
            />
            <ComponentsProductcard
              className="bg-white_A700 flex flex-1 flex-col font-inter items-center justify-start mb-[11px] w-[100%]"
              kvdgoodap="images/img_11kvdgoodap_195x195.png"
              new="NEW"
              serumfoundation_One="Serum Foundation"
              price="$40.00"
              shop_Now="SHOP NOW"
            />
            <HackathonBeautyOneProductcard
              className="bg-white_A700 flex flex-1 flex-col font-roboto items-center justify-start mb-[179px] w-[100%]"
              kvdgoodap="images/img_11kvdgoodap_4.png"
              bestseller="bestseller"
              reviewsCounter="15 Reviews"
              serumfoundation="Serum Foundation"
              frameFour="images/img_frame4_red_900.svg"
              select_Shade__$FortyFive="select           $40"
            />
          </div>
          <div className="flex md:flex-1 flex-col gap-[55px] justify-start md:w-[100%] w-[18%]">
            <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[20px] items-center justify-start md:ml-[0] ml-[83px] p-[20px] rounded-[5px] md:w-[100%] w-[64%]">
              <ComponentsLogo className="border-[1px] border-red_200 border-solid flex flex-col items-center justify-end p-[4px] md:w-[100%] w-[auto]" />
              <ComponentsLogohover className="border-[1px] border-gray_800 border-solid flex flex-col items-center justify-end p-[4px] md:w-[100%] w-[auto]" />
            </div>
            <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[20px] items-start justify-start p-[4px] rounded-[5px] w-[100%]">
              <ComponentsRowlanguage
                className="flex flex-row items-center justify-center md:ml-[0] ml-[16px] mt-[16px] self-stretch sm:w-[100%] w-[auto]"
                language="Body "
                language_One="Body "
                language_Two="Body "
              />
              <ComponentsRowlanguageThree
                className="flex flex-row items-center justify-center mb-[16px] ml-[auto] self-stretch sm:w-[100%] w-[auto]"
                language_Three="Body "
                language_Four="Body "
                language_Five="Body "
                language_Six="Body "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
