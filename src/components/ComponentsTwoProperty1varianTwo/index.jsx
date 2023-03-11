import React from "react";

import { Text } from "components";

const ComponentsTwoProperty1varianTwo = (props) => {
  return (
    <>
      <Text className={props.className} as="h2" variant="h2">
        {props?.property1Varian_Two}
      </Text>
    </>
  );
};

ComponentsTwoProperty1varianTwo.defaultProps = {};

export default ComponentsTwoProperty1varianTwo;
