import React from "react";

import { Text } from "components";

const ComponentsTwoProperty1varian = (props) => {
  return (
    <>
      <Text className={props.className} as="h2" variant="h2">
        {props?.property1Varian}
      </Text>
    </>
  );
};

ComponentsTwoProperty1varian.defaultProps = {};

export default ComponentsTwoProperty1varian;
