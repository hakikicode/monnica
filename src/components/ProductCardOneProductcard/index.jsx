import React from "react";

import { Img, Text, Button } from "components";

const ProductCardOneProductcard = (props) => {
  return (
    <>
      {!!props?.createfromframe ? (
        <div className={props.className}></div>
      ) : null}
    </>
  );
};

ProductCardOneProductcard.defaultProps = {};

export default ProductCardOneProductcard;
