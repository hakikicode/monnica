import React from "react";

import { Text } from "components";

const ProductCardThreeTab = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-gray_800 text-left tracking-[1.00px] uppercase w-[auto]"
          variant="body6"
        >
          {props?.tab}
        </Text>
      </div>
    </>
  );
};

ProductCardThreeTab.defaultProps = { tab: "description" };

export default ProductCardThreeTab;
