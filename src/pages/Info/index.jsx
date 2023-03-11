import React from "react";

import InfoLogo from "components/InfoLogo";
import ComponentsRowlanguageThree from "components/ComponentsRowlanguageThree";
import { Line, Text, Img, List, Button } from "components";
import InfoInputs from "components/InfoInputs";
import InfoRowselectioncontro from "components/InfoRowselectioncontro";
import InfoInputs1 from "components/InfoInputs1";
import InfoInputs2 from "components/InfoInputs2";
import InfoInputfields from "components/InfoInputfields";

const InfoPage = () => {
  return (
    <>
      <div className="flex font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start self-stretch md:w-[100%] w-[auto]">
          <div className="bg-white_A700 flex flex-col gap-[25px] items-center justify-center max-w-[1512px] sm:px-[20px] md:px-[40px] px-[72px] py-[10px] w-[100%]">
            <InfoLogo
              className="border-[1px] border-gray_800 border-solid flex flex-col items-center justify-end p-[4px] md:w-[100%] w-[auto]"
              signal="images/img_sort.svg"
            />
            <ComponentsRowlanguageThree
              className="flex flex-row items-center justify-center self-stretch sm:w-[100%] w-[auto]"
              language_Three="Cart |"
              language_Four="Information |"
              language_Five="Shopping |"
              language_Six="Payment "
            />
          </div>
          <div className="bg-white_A700 flex flex-col md:gap-[40px] gap-[80px] h-[1579px] md:h-[auto] items-center justify-start max-w-[1512px] sm:px-[20px] md:px-[40px] px-[72px] py-[120px] w-[100%]">
            <div className="flex flex-col gap-[30px] h-[152px] md:h-[auto] items-center justify-start max-w-[671px] w-[100%]">
              <div className="flex flex-col gap-[25px] h-[96px] md:h-[auto] items-center justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between py-[5px] w-[100%]">
                  <Line className="bg-red_200 h-[1px] mb-[2px] sm:mt-[0] mt-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] w-[35%]" />
                  <Text
                    className="font-normal not-italic text-center text-gray_900 tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    Express checkout
                  </Text>
                  <Line className="bg-red_200 h-[1px] sm:mt-[0] mt-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[5px] w-[35%]" />
                </div>
                <Img
                  src="images/img_ul.svg"
                  className="h-[40px] w-[100%]"
                  alt="ul"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly pb-[7px] w-[100%]">
                <Line className="bg-red_200 h-[1px] mb-[4px] sm:mt-[0] mt-[13px] w-[49%]" />
                <Text
                  className="font-normal not-italic text-center text-gray_900 tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  OR
                </Text>
                <Line className="bg-red_200 h-[1px] mb-[4px] sm:mt-[0] mt-[13px] w-[49%]" />
              </div>
            </div>
            <div className="flex flex-col font-inter items-center justify-start md:w-[100%] w-[67%]">
              <div className="flex flex-col gap-[30px] items-center justify-center max-w-[904px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Contact information
                  </Text>
                  <div className="flex flex-row gap-[13px] items-center justify-center self-stretch w-[auto]">
                    <Text
                      className="font-normal font-roboto not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                      variant="body6"
                    >
                      Have an account?
                    </Text>
                    <Text
                      className="font-inter font-normal not-italic text-gray_900 text-left tracking-[1.00px] uppercase w-[auto]"
                      variant="body6"
                    >
                      Sign in
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-montserrat gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <InfoInputs className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]" />
                  <InfoRowselectioncontro
                    className="flex flex-row font-roboto items-center justify-start md:w-[100%] w-[59%]"
                    label="Email me with news and offers"
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-[40px] gap-[60px] h-[688px] md:h-[auto] items-center justify-start max-w-[904px] mt-[79px] w-[100%]">
                <div className="flex items-start justify-center self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="text-center text-gray_900 tracking-[1.00px] uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Shipping address
                  </Text>
                </div>
                <div className="flex flex-col font-montserrat gap-[20px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                  <InfoInputs className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]" />
                  <List
                    className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 grid-cols-2 justify-start self-stretch sm:w-[100%] w-[auto]"
                    orientation="horizontal"
                  >
                    <InfoInputs1 className="flex flex-col items-start justify-start sm:w-[100%] w-[208px]" />
                    <InfoInputs1 className="flex flex-col items-start justify-start sm:w-[100%] w-[208px]" />
                  </List>
                  <List
                    className="flex-col gap-[20px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    {new Array(3).fill({}).map((props, index) => (
                      <React.Fragment key={`InfoInputs${index}`}>
                        <InfoInputs
                          className="flex sm:flex-1 flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 grid-cols-3 justify-center self-stretch sm:w-[100%] w-[auto]"
                    orientation="horizontal"
                  >
                    <InfoInputs1 className="flex flex-col items-start justify-start sm:w-[100%] w-[208px]" />
                    <InfoInputs2 className="flex flex-col items-start justify-start sm:w-[100%] w-[92px]" />
                    <InfoInputs2 className="flex flex-col items-start justify-start sm:w-[100%] w-[92px]" />
                  </List>
                  <InfoInputfields
                    className="h-[60px] relative rounded-[3px] w-[100%]"
                    errormessage="Name"
                    keyfield="Phone"
                  />
                </div>
              </div>
              <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[312px] mt-[27px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]">
                continue shipping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
