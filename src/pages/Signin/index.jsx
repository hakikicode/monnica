import React from "react";

import HackathonBeautyOneHeader from "components/HackathonBeautyOneHeader";
import { Text, Button } from "components";
import SignInInputfields from "components/SignInInputfields";
import HackathonBeautyOneFooter from "components/HackathonBeautyOneFooter";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex font-roboto items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="bg-white_A700 flex flex-col gap-[180px] md:gap-[40px] h-[1377px] md:h-[auto] items-center justify-start self-stretch md:w-[100%] w-[auto]">
          <HackathonBeautyOneHeader
            className="flex flex-col items-center justify-center md:px-[20px] self-stretch w-[100%]"
            new="New"
            bestsellers="Bestsellers"
            face="Face"
            eye="Eye"
            lip="Lip"
            exclusives="Exclusives"
            sale="Sale"
          />
          <div className="flex flex-col font-inter md:gap-[40px] gap-[60px] items-center justify-center md:px-[20px] md:w-[100%] w-[601px]">
            <div className="flex items-center justify-start md:w-[100%] w-[auto]">
              <Text
                className="text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]"
                as="h2"
                variant="h2"
              >
                Sign in to your account
              </Text>
            </div>
            <div className="flex flex-col font-montserrat md:gap-[40px] gap-[60px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <SignInInputfields
                  className="h-[60px] relative rounded-[3px] w-[100%]"
                  errormessage_One="Name"
                  keyfield_One="Email"
                />
                <SignInInputfields
                  className="h-[60px] relative rounded-[3px] w-[100%]"
                  errormessage_One="Name"
                  keyfield_One="Password"
                  eye_One="images/img_eye.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row font-roboto gap-[168px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[30%]">
                    <div className="bg-white_A700 border-[1px] border-gray_900 border-solid h-[19px] w-[13%]"></div>
                    <Text
                      className="font-normal not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                      variant="body6"
                    >
                      Remember me
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    Forgot password?
                  </Text>
                </div>
                <Button className="bg-gray_900 cursor-pointer font-inter font-normal h-[60px] mt-[27px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[442px]">
                  Sign in
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-center mt-[30px] self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    Don&#39;t have an account?
                  </Text>
                  <Text
                    className="common-pointer font-inter font-normal not-italic text-gray_900 text-left tracking-[1.00px] uppercase w-[auto]"
                    variant="body6"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <HackathonBeautyOneFooter
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

export default SigninPage;
