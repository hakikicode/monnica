import React from "react";

import { Img } from "components";

const ComponentsOneLogohover = (props) => {
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

ComponentsOneLogohover.defaultProps = {};

export default ComponentsOneLogohover;
