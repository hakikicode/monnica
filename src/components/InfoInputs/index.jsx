import React from "react";

import { Text, Img } from "components";

const InfoInputs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[31px] h-[60px] relative rounded-[3px] w-[100%]">
          <Text
            className="absolute font-montserrat font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-left text-white_A700_a2 w-[auto]"
            variant="body13"
          >
            {props?.errormessage}
          </Text>
          <div className="absolute bg-white_A700 border-[1px] border-gray_900 border-solid md:h-[31px] h-[60px] inset-[0] justify-center m-[auto] p-[6px] rounded-[3px] w-[100%]">
            <Text
              className="absolute font-normal font-roboto h-[max-content] inset-y-[0] left-[4%] my-[auto] not-italic text-gray_900_a2 text-left tracking-[0.12px] w-[auto]"
              variant="body6"
            >
              {props?.keyfield}
            </Text>
            <Img
              src="defaultNoData.png"
              className="absolute bottom-[10%] h-[31px] left-[4%] w-[72px]"
              alt="valuemain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

InfoInputs.defaultProps = { errormessage: "Name", keyfield: "Email" };

export default InfoInputs;
