import React from "react";

import { Text } from "components";

const ComponentsTwoProperty1varianOne = (props) => {
  return (
    <>
      <Text className={props.className} as="h2" variant="h2">
        {props?.property1Varian_One}
      </Text>
    </>
  );
};

ComponentsTwoProperty1varianOne.defaultProps = {};

export default ComponentsTwoProperty1varianOne;
