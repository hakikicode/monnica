import React from "react";

import CheckoutHeader from "components/CheckoutHeader";
import { Text, List, Img, CheckBox, Button } from "components";
import CheckoutInputfields from "components/CheckoutInputfields";
import CheckoutInputfields1 from "components/CheckoutInputfields1";
import CheckoutInputfields2 from "components/CheckoutInputfields2";
import CheckoutInputfields3 from "components/CheckoutInputfields3";
import CheckoutInputfields4 from "components/CheckoutInputfields4";
import CheckoutColumn from "components/CheckoutColumn";
import CheckoutInputfields5 from "components/CheckoutInputfields5";

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] pb-[167px] w-[100%]">
        <div className="flex flex-col gap-[104px] md:gap-[40px] items-center justify-start w-[100%]">
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
          <div className="flex flex-col font-inter items-start justify-start max-w-[1406px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="md:ml-[0] ml-[5px] text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]"
              as="h2"
              variant="h2"
            >
              CHECKOUT
            </Text>
            <div className="flex flex-row sm:gap-[40px] items-center justify-between md:ml-[0] ml-[5px] mt-[34px] md:w-[100%] w-[69%]">
              <Text
                className="text-black_900 text-center tracking-[0.17px] uppercase w-[auto]"
                variant="body3"
              >
                BILLING DETAILS
              </Text>
              <Text
                className="text-black_900 text-center tracking-[0.17px] uppercase w-[auto]"
                variant="body3"
              >
                Summary Order
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-montserrat md:gap-[40px] items-start justify-between md:ml-[0] ml-[5px] mt-[32px] md:w-[100%] w-[98%]">
              <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] w-[50%]">
                <List
                  className="flex-col gap-[25px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <CheckoutInputfields className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]" />
                  <CheckoutInputfields1 className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]" />
                  <CheckoutInputfields2 className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]" />
                  <CheckoutInputfields3 className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]" />
                  <CheckoutInputfields4 className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]" />
                </List>
                <CheckoutColumn className="flex flex-col items-center justify-start w-[100%]" />
                <CheckoutInputfields5 className="flex flex-col items-center justify-start w-[100%]" />
              </div>
              <div className="bg-gray_100 border-[1px] border-black_900 border-solid flex font-roboto items-start justify-start mb-[26px] p-[24px] sm:px-[20px] md:w-[100%] w-[43%]">
                <List
                  className="flex-col gap-[53px] grid mb-[71px] mt-[14px] w-[88%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-[54px] items-start justify-start md:w-[100%] w-[96%]">
                    <div className="flex h-[154px] items-center justify-start w-[154px]">
                      <div className="flex h-[154px] items-center justify-start rounded-[8px] w-[154px]">
                        <Img
                          src="images/img_11kvdstudded.png"
                          className="h-[154px] md:h-[auto] object-cover rounded-tl-[8px] rounded-tr-[8px] w-[154px]"
                          alt="11kvdstudded"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:w-[100%] w-[54%]">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[0.13px] w-[auto]"
                        variant="body6"
                      >
                        Color Block Lipstick
                      </Text>
                      <div className="flex items-start justify-start mt-[12px] w-[236px]">
                        <Text
                          className="font-light text-black_900 text-left w-[auto]"
                          variant="body13"
                        >
                          Color: 342 Infinite Sunset - warm peach
                        </Text>
                      </div>
                      <Text
                        className="font-bold mt-[12px] text-gray_900 text-right tracking-[0.13px] w-[auto]"
                        variant="body6"
                      >
                        $25.00
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex h-[154px] items-center justify-start mb-[48px] w-[154px]">
                      <div className="flex h-[154px] items-center justify-start rounded-[8px] w-[154px]">
                        <Img
                          src="images/img_11kvdstudded_154x154.png"
                          className="h-[154px] md:h-[auto] object-cover rounded-tl-[8px] rounded-tr-[8px] w-[154px]"
                          alt="11kvdstudded"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] h-[98px] md:h-[auto] items-start justify-center sm:mt-[0] mt-[105px] px-[15px] w-[266px]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-black_900 text-left tracking-[0.13px] w-[auto]"
                          variant="body6"
                        >
                          Foundation
                        </Text>
                      </div>
                      <Text
                        className="font-bold text-gray_900 text-right tracking-[0.13px] w-[auto]"
                        variant="body6"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-inter md:gap-[40px] items-start justify-between mt-[65px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[28px] items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-inter text-black_900 text-center tracking-[0.17px] uppercase w-[auto]"
                  variant="body3"
                >
                  DELIVERY ADRESS
                </Text>
                <CheckBox
                  className="font-normal font-roboto not-italic text-[16px] text-black_900 text-center tracking-[0.12px]"
                  inputClassName="mr-[5px]"
                  name="delivermyorder"
                  label="Deliver my order to my billing address"
                ></CheckBox>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer flex-1 font-normal max-w-[671px] mb-[34px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[100%]">
                place your order
              </Button>
            </div>
            <div className="flex flex-col font-inter gap-[28px] items-start justify-start mt-[70px] md:w-[100%] w-[49%]">
              <Text
                className="text-black_900 text-center tracking-[0.17px] uppercase w-[auto]"
                variant="body3"
              >
                payment method
              </Text>
              <div className="flex flex-col font-montserrat gap-[25px] items-center justify-start md:ml-[0] ml-[4px] w-[100%]">
                <Img
                  src="images/img_group57.svg"
                  className="h-[72px] w-[auto]"
                  alt="groupFiftySeven"
                />
                <div className="flex flex-col gap-[25px] items-center justify-start w-[100%]">
                  <List
                    className="flex-col gap-[25px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <CheckoutInputfields5 className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]" />
                    <CheckoutInputfields5 className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]" />
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <CheckoutInputfields5 className="flex flex-col items-center justify-start w-[100%]" />
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <CheckoutInputfields5 className="flex flex-col items-center justify-start w-[100%]" />
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <CheckoutInputfields5 className="flex flex-col items-center justify-start w-[100%]" />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
