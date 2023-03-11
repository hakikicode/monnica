import React from "react";

import { Input } from "components";

export default {
  title: "ofofo_barham_herbal_cure_s_application8/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
