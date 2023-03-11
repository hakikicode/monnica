import React from "react";

import { Text, Img } from "components";

const CheckoutInputfields5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[60px] relative rounded-[3px] w-[100%]">
          <Text
            className="absolute font-montserrat font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-left text-white_A700_a2 w-[auto]"
            variant="body13"
          >
            {props?.errormessage}
          </Text>
          <div className="absolute bg-white_A700 border-[1px] border-gray_900 border-solid flex flex-row h-[100%] inset-[0] items-center justify-center m-[auto] p-[6px] rounded-[3px] w-[100%]">
            <div className="h-[32px] md:h-[46px] ml-[10px] mt-[15px] relative w-[40%]">
              <Text
                className="absolute font-normal font-roboto inset-x-[0] mx-[auto] not-italic text-gray_900_a2 text-left top-[0] tracking-[0.12px] w-[max-content]"
                variant="body6"
              >
                {props?.keyfield}
              </Text>
              <Img
                src="defaultNoData.png"
                className="absolute bottom-[0] h-[31px] inset-x-[0] mx-[auto] w-[72px]"
                alt="valuemain"
              />
            </div>
            {!!props?.arrowdown ? (
              <Img
                src={props?.arrowdown}
                className="h-[30px] mr-[5px] w-[auto]"
                alt="arrowdown"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

CheckoutInputfields5.defaultProps = {
  errormessage: "Name",
  keyfield: "Exp Month",
};

export default CheckoutInputfields5;
