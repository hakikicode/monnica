import React from "react";

import { Img } from "components";

const ComponentsLogohover = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_sort.svg"
          className="h-[32px] mt-[2px] w-[auto]"
          alt="sort"
        />
      </div>
    </>
  );
};

ComponentsLogohover.defaultProps = {};

export default ComponentsLogohover;
