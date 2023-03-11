import React from "react";

const ProductCardThreeColor = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 h-[22px] rounded-[50%] w-[22px]"></div>
      </div>
    </>
  );
};

ProductCardThreeColor.defaultProps = {};

export default ProductCardThreeColor;
