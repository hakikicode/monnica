import React from "react";

import { List, Text, Img } from "components";

const CheckoutColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start w-[100%]">
          <List
            className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
            orientation="horizontal"
          >
            <div className="md:h-[31px] h-[60px] sm:ml-[0] relative rounded-[3px] w-[100%]">
              <Text
                className="absolute font-montserrat font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-left text-white_A700_a2 w-[auto]"
                variant="body13"
              >
                {props?.errormessage}
              </Text>
              <div className="absolute bg-white_A700 border-[1px] border-gray_900 border-solid md:h-[31px] h-[60px] inset-[0] justify-center m-[auto] p-[6px] rounded-[3px] w-[100%]">
                <Text
                  className="absolute font-normal font-roboto h-[max-content] inset-y-[0] left-[11%] my-[auto] not-italic text-gray_900_a2 text-left tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  {props?.keyfield}
                </Text>
                <Img
                  src="defaultNoData.png"
                  className="absolute bottom-[10%] h-[31px] left-[11%] w-[72px]"
                  alt="valuemain"
                />
              </div>
            </div>
            <div className="md:h-[31px] h-[60px] sm:ml-[0] relative rounded-[3px] w-[100%]">
              <Text
                className="absolute font-montserrat font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-left text-white_A700_a2 w-[auto]"
                variant="body13"
              >
                {props?.errormessage}
              </Text>
              <div className="absolute bg-white_A700 border-[1px] border-gray_900 border-solid md:h-[31px] h-[60px] inset-[0] justify-center m-[auto] p-[6px] rounded-[3px] w-[100%]">
                <Text
                  className="absolute font-normal font-roboto h-[max-content] inset-y-[0] left-[11%] my-[auto] not-italic text-gray_900_a2 text-left tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  {props?.keyfield}
                </Text>
                <Img
                  src="defaultNoData.png"
                  className="absolute bottom-[10%] h-[31px] left-[11%] w-[72px]"
                  alt="valuemain"
                />
              </div>
            </div>
            <div className="md:h-[31px] h-[60px] sm:ml-[0] relative rounded-[3px] w-[100%]">
              <Text
                className="absolute font-montserrat font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-left text-white_A700_a2 w-[auto]"
                variant="body13"
              >
                {props?.errormessage}
              </Text>
              <div className="absolute bg-white_A700 border-[1px] border-gray_900 border-solid md:h-[31px] h-[60px] inset-[0] justify-center m-[auto] p-[6px] rounded-[3px] w-[100%]">
                <Text
                  className="absolute font-normal font-roboto h-[max-content] inset-y-[0] left-[11%] my-[auto] not-italic text-gray_900_a2 text-left tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  {props?.keyfield}
                </Text>
                <Img
                  src="defaultNoData.png"
                  className="absolute bottom-[10%] h-[31px] left-[11%] w-[72px]"
                  alt="valuemain"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

CheckoutColumn.defaultProps = {
  errormessage: "Name",
  keyfield: "Zip code",
  errormessage: "Name",
  keyfield: "Zip code",
  errormessage: "Name",
  keyfield: "Zip code",
};

export default CheckoutColumn;
