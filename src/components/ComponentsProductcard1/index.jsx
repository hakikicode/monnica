import React from "react";

import { Img, Text } from "components";

const ComponentsProductcard1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 h-[402px] m-[auto] w-[100%]"></div>
        <div className="absolute flex flex-col gap-[25px] h-[100%] inset-[0] items-center justify-start m-[auto] px-[12px] py-[20px] self-stretch md:w-[100%] w-[auto]">
          <div className="flex h-[195px] items-center justify-start w-[195px]">
            <div className="h-[195px] relative w-[195px]">
              <Img
                src={props?.kvdgoodap}
                className="absolute h-[195px] inset-[0] justify-center m-[auto] object-cover w-[195px]"
                alt="11kvdgoodap"
              />
              <Img
                src="images/img_favorite.svg"
                className="absolute h-[16px] right-[8%] top-[7%] w-[16px]"
                alt="favorite"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-center justify-start self-stretch w-[auto]">
            <div className="flex flex-col gap-[5px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                variant="body9"
              >
                {props?.new_One}
              </Text>
              <div className="flex flex-row gap-[5px] items-start justify-start px-[2.5px] self-stretch w-[auto]">
                {!!props?.nine ? (
                  <Text
                    className="font-inter font-normal h-[12px] not-italic text-black_900 text-left w-[auto]"
                    variant="body13"
                  >
                    {props?.nine}
                  </Text>
                ) : null}
                {!!props?.ten ? (
                  <Text
                    className="font-inter font-normal h-[12px] not-italic text-black_900 text-left w-[auto]"
                    variant="body13"
                  >
                    {props?.ten}
                  </Text>
                ) : null}
                {!!props?.eleven ? (
                  <Text
                    className="font-inter font-normal h-[12px] not-italic text-black_900 text-left w-[auto]"
                    variant="body13"
                  >
                    {props?.eleven}
                  </Text>
                ) : null}
                {!!props?.twelve ? (
                  <Text
                    className="font-inter font-normal h-[12px] not-italic text-black_900 text-left w-[auto]"
                    variant="body13"
                  >
                    {props?.twelve}
                  </Text>
                ) : null}
                {!!props?.thirteen ? (
                  <Text
                    className="font-inter font-normal h-[12px] not-italic text-black_900 text-left w-[auto]"
                    variant="body13"
                  >
                    {props?.thirteen}
                  </Text>
                ) : null}
              </div>
            </div>
            <Text
              className="font-bold font-roboto text-black_900 text-center tracking-[0.13px] w-[auto]"
              variant="body6"
            >
              {props?.serumfoundation_One}
            </Text>
            <div className="flex flex-col gap-[5px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                variant="body6"
              >
                {props?.price}
              </Text>
              {!!props?.shades ? (
                <Text
                  className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  {props?.shades}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ComponentsProductcard1.defaultProps = {
  kvdgoodap: "images/img_11kvdgoodap_195x195.png",
  new_One: "Bestseller",
  serumfoundation_One: "Serum Foundation",
  price: "$40.00",
};

export default ComponentsProductcard1;
