import React from "react";

import { Text, Img } from "components";

const SignInInputfields = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="absolute font-montserrat font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-left text-white_A700_a2 w-[auto]"
          variant="body13"
        >
          {props?.errormessage_One}
        </Text>
        <div className="absolute bg-white_A700 border-[1px] border-gray_900 border-solid flex flex-row h-[100%] inset-[0] items-center justify-center m-[auto] p-[6px] rounded-[3px] w-[100%]">
          <div className="h-[32px] md:h-[46px] ml-[10px] mt-[15px] relative w-[17%]">
            <Text
              className="absolute font-normal font-roboto inset-x-[0] mx-[auto] not-italic text-gray_900_a2 text-left top-[0] tracking-[0.12px] w-[max-content]"
              variant="body6"
            >
              {props?.keyfield_One}
            </Text>
            <Img
              src="defaultNoData.png"
              className="absolute bottom-[0] h-[31px] inset-x-[0] mx-[auto] w-[72px]"
              alt="valuemain_One"
            />
          </div>
          {!!props?.eye_One ? (
            <Img
              src={props?.eye_One}
              className="h-[24px] mr-[14px] w-[24px]"
              alt="eye_One"
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

SignInInputfields.defaultProps = {
  errormessage_One: "Name",
  keyfield_One: "Password",
};

export default SignInInputfields;
