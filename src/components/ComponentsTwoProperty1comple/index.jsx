import React from "react";

import { Text } from "components";

const ComponentsTwoProperty1comple = (props) => {
  return (
    <>
      <Text className={props.className} as="h2" variant="h2">
        {props?.property1Comple}
      </Text>
    </>
  );
};

ComponentsTwoProperty1comple.defaultProps = {};

export default ComponentsTwoProperty1comple;
