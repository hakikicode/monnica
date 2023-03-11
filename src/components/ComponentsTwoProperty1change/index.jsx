import React from "react";

import { Text } from "components";

const ComponentsTwoProperty1change = (props) => {
  return (
    <>
      <Text className={props.className} as="h2" variant="h2">
        {props?.property1Change}
      </Text>
    </>
  );
};

ComponentsTwoProperty1change.defaultProps = {};

export default ComponentsTwoProperty1change;
