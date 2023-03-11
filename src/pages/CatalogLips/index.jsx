import React from "react";

import CheckoutHeader from "components/CheckoutHeader";
import ComponentsRowlanguage from "components/ComponentsRowlanguage";
import LipsLipstickSection from "components/LipsLipstickSection";
import { List } from "components";
import CatalogLipsSection from "components/CatalogLipsSection";
import LipsLipstickFooter from "components/LipsLipstickFooter";

const CatalogLipsPage = () => {
  return (
    <>
      <div className="flex font-roboto items-center justify-end mx-[auto] w-[100%]">
        <div className="h-[2483px] md:h-[437px] md:px-[20px] relative md:w-[100%] w-[1511px]">
          <div className="absolute bg-gray_900 flex flex-col md:h-[auto] h-[max-content] inset-[0] items-start justify-start m-[auto] self-stretch w-[auto]">
            <CheckoutHeader
              className="flex flex-col items-center justify-center self-stretch w-[100%]"
              new="New"
              bestsellers="Bestsellers"
              face="Face"
              eye="Eye"
              lip="Lip"
              exclusives="Exclusives"
              sale="Sale"
            />
            <ComponentsRowlanguage
              className="flex flex-row items-center justify-center sm:px-[20px] md:px-[40px] px-[72px] self-stretch sm:w-[100%] w-[auto]"
              language="Shop "
              language_One="Lip "
            />
          </div>
          <div className="absolute bottom-[0] flex flex-col font-inter h-[2327px] md:h-[auto] inset-x-[0] items-center justify-start mx-[auto] self-stretch w-[auto]">
            <LipsLipstickSection
              className="bg-gray_900 flex flex-row flex-wrap items-center justify-between max-w-[1510px] sm:px-[20px] md:px-[40px] px-[71px] py-[12px] w-[100%]"
              productsCounter="8 Products"
            />
            <List
              className="flex-col gap-[1px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <CatalogLipsSection
                className="flex md:flex-1 flex-col items-center justify-start self-stretch md:w-[100%] w-[auto]"
                lipstick="Lipstick"
                unsplashimagemEight="images/img_unsplashimagem8vl5jwsv9s_1.png"
                show_All="Show all"
              />
              <CatalogLipsSection
                className="flex md:flex-1 flex-col items-center justify-start self-stretch md:w-[100%] w-[auto]"
                lipstick="Lip gloss"
                unsplashimagemEight="images/img_unsplashimagem8vl5jwsv9s_2.png"
                show_All="Show all"
              />
            </List>
            <LipsLipstickFooter
              className="flex flex-col items-start justify-start self-stretch md:w-[100%] w-[auto]"
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
      </div>
    </>
  );
};

export default CatalogLipsPage;
