import React from "react";

import { Img, Text } from "components";

const ComponentsOneProperty1mini = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="md:h-[402px] h-[408px] relative w-[100%]">
          <div className="bg-white_A700 h-[402px] m-[auto] w-[100%]"></div>
          <div className="absolute flex flex-col gap-[25px] h-[100%] inset-[0] items-center justify-start m-[auto] px-[12px] py-[20px] self-stretch md:w-[100%] w-[auto]">
            <div className="flex h-[195px] items-center justify-start w-[195px]">
              <div className="h-[195px] relative w-[195px]">
                <Img
                  src="images/img_11kvdgoodap_195x195.png"
                  className="h-[195px] m-[auto] object-cover w-[195px]"
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
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <Text
                  className="font-bold font-roboto text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                  variant="body9"
                >
                  {props?.new}
                </Text>
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
                <Text
                  className="font-normal font-roboto not-italic text-black_900 text-center tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  {props?.shades}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

ComponentsOneProperty1mini.defaultProps = {
  new: "NEW",
  serumfoundation_One: "Serum Foundation",
  price: "$40.00",
  shades: "+40 Shades",
};

export default ComponentsOneProperty1mini;
