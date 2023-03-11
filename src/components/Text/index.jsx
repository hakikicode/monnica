import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[34px] md:text-[40px] text-[44px]",
  h2: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h3: "font-bold sm:text-[34px] md:text-[36px] text-[38px]",
  h4: "font-medium sm:text-[26px] md:text-[28px] text-[30px]",
  h5: "font-medium sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "font-medium sm:text-[19px] md:text-[21px] text-[23px]",
  body1: "font-medium sm:text-[18px] md:text-[20px] text-[22px]",
  body2: "font-medium sm:text-[17px] md:text-[19px] text-[21px]",
  body3: "font-bold text-[20px]",
  body4: "text-[18px]",
  body5: "text-[17px]",
  body6: "text-[16px]",
  body7: "text-[15px]",
  body8: "font-normal text-[14.57px]",
  body9: "text-[14px]",
  body10: "font-bold text-[13.71px]",
  body11: "text-[13px]",
  body12: "text-[12.71px]",
  body13: "text-[12px]",
  body14: "font-normal text-[11.9px]",
  body15: "font-bold text-[11.71px]",
  body16: "text-[11px]",
  body17: "font-light text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
