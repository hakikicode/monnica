import React from "react";

import HackathonBeautyOneHeader from "components/HackathonBeautyOneHeader";
import { Text, List, Button } from "components";
import SignInInputfields from "components/SignInInputfields";
import HackathonBeautyOneFooter from "components/HackathonBeautyOneFooter";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-roboto items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="bg-white_A700 flex flex-col gap-[135px] md:gap-[40px] h-[1040px] md:h-[auto] items-center justify-start self-stretch md:w-[100%] w-[auto]">
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
                Create your account
              </Text>
            </div>
            <div className="flex flex-col font-montserrat md:gap-[40px] gap-[60px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <List
                  className="flex-col gap-[20px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <SignInInputfields
                    className="h-[60px] relative rounded-[3px] w-[100%]"
                    errormessage_One="Name"
                    keyfield_One="First name"
                  />
                  <SignInInputfields
                    className="h-[60px] relative rounded-[3px] w-[100%]"
                    errormessage_One="Name"
                    keyfield_One="Last name"
                  />
                </List>
                <SignInInputfields
                  className="h-[60px] relative rounded-[3px] w-[100%]"
                  errormessage_One="Name"
                  keyfield_One="Birthday"
                />
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
              <div className="flex flex-col font-inter gap-[30px] justify-start w-[100%]">
                <Button className="bg-gray_900 cursor-pointer font-normal h-[60px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[442px]">
                  Sign up
                </Button>
                <div className="flex flex-row gap-[13px] items-center justify-center md:ml-[0] ml-[97px] self-stretch w-[auto]">
                  <Text
                    className="font-normal font-roboto not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    Have an account?
                  </Text>
                  <Text
                    className="common-pointer font-inter font-normal not-italic text-gray_900 text-left tracking-[1.00px] uppercase w-[auto]"
                    variant="body6"
                    onClick={() => navigate("/signin")}
                  >
                    Sign in
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HackathonBeautyOneFooter
          className="flex font-inter items-center justify-center md:px-[20px] self-stretch w-[100%]"
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
    </>
  );
};

export default SignupPage;
