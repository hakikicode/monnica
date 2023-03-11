import React from "react";

import { Text } from "components";

const ComponentsTwoPrice = (props) => {
  return (
    <>
      <Text className={props.className} as="h2" variant="h2">
        {props?.price}
      </Text>
    </>
  );
};

ComponentsTwoPrice.defaultProps = {};

export default ComponentsTwoPrice;
