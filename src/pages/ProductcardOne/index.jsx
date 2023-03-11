import React from "react";

import CheckoutHeader from "components/CheckoutHeader";
import ComponentsRowlanguageThree from "components/ComponentsRowlanguageThree";
import { Img, Text, Button, List } from "components";
import ProductCardThreeColor from "components/ProductCardThreeColor";
import ProductCardThreeNumber from "components/ProductCardThreeNumber";
import ProductCardThreeLink from "components/ProductCardThreeLink";
import ProductCardThreeLink1 from "components/ProductCardThreeLink1";
import ProductCardOneProductcard from "components/ProductCardOneProductcard";
import ProductCardThreeTab from "components/ProductCardThreeTab";
import ProductCardThreeTab1 from "components/ProductCardThreeTab1";
import ProductCardThreeReview from "components/ProductCardThreeReview";

const ProductcardOnePage = () => {
  const productCardOneProductcardPropList = [
    {
      serumfoundation_Two: "Color Block Lipstick",
      kvdgoodap_Two: "images/img_11kvdgoodap_11.png",
      frameThree_Two: "images/img_frame3.svg",
      price_Two: "$40.00",
    },
    {
      new_One: "bestseller",
      kvdgoodap_Two: "images/img_11kvdgoodap_12.png",
      serumfoundation_Two: "Color Block Lipstick",
      frameThree_Two: "images/img_frame3_red_303.svg",
      price_Two: "$25.00",
    },
    {
      new_One: "NEW",
      kvdgoodap_Two: "images/img_11kvdgoodap_13.png",
      serumfoundation_Two: "Color Lipstick",
      frameThree_Two: "images/img_frame3_red_900.svg",
      price_Two: "$32.10",
    },
    {
      serumfoundation_Two: "Balmy Tint Hydrating",
      kvdgoodap_Two: "images/img_11kvdgoodap_21.png",
      frameThree_Two: "images/img_frame3_purple_400.svg",
      price_Two: "$18.00",
    },
  ];
  const productCardThreeReviewPropList = [
    {
      kristinwatson: "Kristin Watson",
      ellipseFourteen: "images/img_ellipse14.png",
      march142021: "March 14, 2023",
    },
    {
      kristinwatson: "Zoe Saldaña",
      ellipseFourteen: "images/img_ellipse14_91x90.png",
      march142021: "March 01, 2023",
    },
    {
      kristinwatson: "Michelle Rodriguez",
      ellipseFourteen: "images/img_ellipse14_1.png",
      march142021: "March 01, 2021",
    },
  ];

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <CheckoutHeader
          className="flex flex-col items-center justify-center md:px-[20px] self-stretch w-[100%]"
          new="New"
          bestsellers="Bestsellers"
          face="Face"
          eye="Eye"
          lip="Lip"
          exclusives="Exclusives"
          sale="Sale"
        />
        <div className="bg-gray_900 flex items-start justify-start max-w-[1512px] sm:pl-[20px] md:pl-[40px] pl-[70px] py-[5px] w-[100%]">
          <ComponentsRowlanguageThree
            className="flex flex-row items-center justify-center self-stretch sm:w-[100%] w-[auto]"
            language_Three="Shop "
            language_Four="Lip "
            language_Five="Lipstick "
            language_Six="Color Block Lipstick "
          />
        </div>
        <div className="flex flex-col md:gap-[40px] gap-[85px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
          <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start max-w-[1512px] sm:px-[20px] md:px-[40px] px-[72px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start max-w-[1370px] mx-[auto] py-[60px] self-stretch w-[100%]">
              <div className="flex md:flex-1 md:flex-col flex-row gap-[25px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[25px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[48px] w-[48px]"
                    alt="arrowup"
                  />
                  <div className="flex flex-col gap-[25px] items-center justify-start w-[100%]">
                    <div className="flex h-[92px] items-center justify-start w-[92px]">
                      <Img
                        src="images/img_w5111.png"
                        className="h-[92px] md:h-[auto] object-cover w-[92px]"
                        alt="w5111"
                      />
                    </div>
                    <div className="flex h-[92px] items-center justify-start w-[92px]">
                      <Img
                        src="images/img_w5211.png"
                        className="h-[92px] md:h-[auto] object-cover w-[92px]"
                        alt="w5211"
                      />
                    </div>
                    <div className="flex h-[92px] items-center justify-start w-[92px]">
                      <Img
                        src="images/img_w5211_92x92.png"
                        className="h-[92px] md:h-[auto] object-cover w-[92px]"
                        alt="w5211_One"
                      />
                    </div>
                    <div className="flex h-[92px] items-center justify-start w-[92px]">
                      <Img
                        src="images/img_w5211_1.png"
                        className="h-[92px] md:h-[auto] object-cover w-[92px]"
                        alt="w5211_Two"
                      />
                    </div>
                    <Img
                      src="images/img_arrowdown_gray_800.svg"
                      className="h-[48px] w-[48px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-start max-w-[671px] w-[100%]">
                  <Img
                    src="images/img_w5111_555x671.png"
                    className="h-[555px] md:h-[auto] object-cover w-[671px]"
                    alt="w5111_One"
                  />
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start sm:w-[100%] w-[558px]">
                <Text
                  className="font-bold text-black_900 text-left tracking-[0.13px] w-[auto]"
                  variant="body6"
                >
                  Color Block Lipstick
                </Text>
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold text-center text-gray_800 tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    Bestseller
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-start self-stretch w-[auto]">
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Three"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[18px] w-[18px]"
                      alt="star_Four"
                    />
                  </div>
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    157 Reviews
                  </Text>
                </div>
                <div className="flex font-inter items-center justify-start md:w-[100%] w-[11%]">
                  <div className="flex items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                      variant="body6"
                    >
                      $25.00
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-roboto gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold text-black_900 text-left tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    Colors
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    Color: 342 Infinite Sunset - warm peach
                  </Text>
                  <div className="flex flex-row gap-[10px] items-start justify-center self-stretch w-[auto]">
                    <div className="bg-gray_801 h-[24px] rounded-[50%] w-[24px]"></div>
                    <div className="bg-purple_302 h-[24px] rounded-[50%] w-[24px]"></div>
                    <div className="bg-gray_500 h-[24px] rounded-[50%] w-[24px]"></div>
                    <div className="bg-pink_901 h-[24px] rounded-[50%] w-[24px]"></div>
                    <div className="bg-purple_401 h-[24px] rounded-[50%] w-[24px]"></div>
                    <ProductCardThreeColor className="bg-red_302 flex flex-col h-[24px] items-center justify-start rounded-[50%] sm:w-[100%] w-[24px]" />
                  </div>
                </div>
                <div className="flex flex-col font-roboto gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-bold text-black_900 text-left tracking-[0.10px] uppercase w-[auto]"
                    variant="body9"
                  >
                    Size
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body6"
                  >
                    0.17 oz / 4.5 g
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-inter gap-[30px] items-center justify-end self-stretch sm:w-[100%] w-[auto]">
                  <ProductCardThreeNumber
                    className="flex flex-col items-center justify-start rounded-[3px] sm:w-[100%] w-[auto]"
                    one="1"
                  />
                  <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[250px] not-italic sm:px-[20px] md:px-[40px] px-[66px] rounded-[3px] text-[16px] text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]">
                    add to cart
                  </Button>
                  <Img
                    src="images/img_favorite.svg"
                    className="h-[26px] w-[26px]"
                    alt="favorite"
                  />
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start py-[30px] sm:w-[100%] w-[558px]">
                  <ProductCardThreeLink
                    className="flex flex-col font-inter items-center justify-center rounded-[4px] self-stretch sm:w-[100%] w-[auto]"
                    label="Product"
                  />
                  <Text
                    className="font-normal font-roboto leading-[23.00px] not-italic text-gray_900 text-left tracking-[0.12px]"
                    variant="body6"
                  >
                    Create an elevated, everyday makeup look with these super
                    nourishing, ultra-hydrating lipsticks that effortlessly
                    glide onto your lips.&lt;br /&gt;Available in pretty pink
                    and spicy brown nude shades.&lt;br /&gt;High-shine
                    finish&lt;br /&gt;Medium buildable coverage&lt;br
                    /&gt;Hydrating formula for addictive application&lt;br
                    /&gt;Fuller-looking pout&lt;br /&gt;Buttery texture&lt;br
                    /&gt;Infused with skin-loving ingredients&lt;br
                    /&gt;All-inclusive shades (light, medium & rich)
                  </Text>
                  <List
                    className="flex-col font-inter gap-[30px] grid w-[33%]"
                    orientation="vertical"
                  >
                    <ProductCardThreeLink1
                      className="flex flex-col items-center justify-center rounded-[4px] self-stretch sm:w-[100%] w-[auto]"
                      label="How to use"
                    />
                    <ProductCardThreeLink1
                      className="flex flex-col items-center justify-center rounded-[4px] self-stretch sm:w-[100%] w-[auto]"
                      label="Ingredients"
                    />
                  </List>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter h-[895px] md:h-[auto] items-center justify-start pb-[60px] w-[100%]">
              <div className="bg-gray_900 flex items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <div className="flex items-start justify-start pb-[65px] pl-[568.19px] pr-[568px] pt-[60px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="leading-[48.00px] md:max-w-[100%] max-w-[375px] text-center text-white_A700 tracking-[1.00px] uppercase"
                    as="h2"
                    variant="h2"
                  >
                    Recommend you
                  </Text>
                </div>
              </div>
              <List
                className="bg-gray_900 sm:flex-col flex-row md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[674px] justify-center sm:px-[20px] md:px-[40px] px-[72px] self-stretch md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                {productCardOneProductcardPropList.map((props, index) => (
                  <React.Fragment key={`ProductCardOneProductcard${index}`}>
                    <ProductCardOneProductcard
                      className="bg-white_A700 flex flex-col items-center justify-start sm:ml-[0] md:px-[20px] w-[100%]"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="flex flex-col font-inter md:gap-[40px] gap-[60px] items-start justify-start max-w-[1387px] mx-[auto] self-stretch w-[100%]">
              <div className="flex items-start justify-start max-w-[1387px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] gap-[60px] items-start justify-start max-w-[1387px] w-[100%]">
                  <ProductCardThreeTab
                    className="flex sm:flex-1 flex-col items-center justify-center px-[15px] self-stretch sm:w-[100%] w-[auto]"
                    tab="description"
                  />
                  <ProductCardThreeTab1
                    className="flex sm:flex-1 flex-row items-center justify-center px-[15px] self-stretch sm:w-[100%] w-[auto]"
                    tab_One="reviews"
                    tag="157"
                  />
                  <ProductCardThreeTab
                    className="flex sm:flex-1 flex-col items-center justify-center px-[15px] self-stretch sm:w-[100%] w-[auto]"
                    tab="Support"
                  />
                </div>
              </div>
              <List
                className="flex-col font-roboto gap-[20px] grid items-start self-stretch md:w-[100%] w-[auto]"
                orientation="vertical"
              >
                {productCardThreeReviewPropList.map((props, index) => (
                  <React.Fragment key={`ProductCardThreeReview${index}`}>
                    <ProductCardThreeReview
                      className="flex flex-col items-start justify-start my-[0] self-stretch md:w-[100%] w-[auto]"
                      description="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes."
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="bg-black_900 flex font-inter items-center justify-end max-w-[1512px] sm:px-[20px] md:px-[40px] px-[72px] py-[80px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[140px] md:gap-[40px] items-start justify-start max-w-[1136px] mx-[auto] w-[100%]">
              <div className="flex flex-col gap-[30px] items-start justify-start w-[324px]">
                <Text
                  className="font-inter text-left text-red_200 tracking-[0.17px] uppercase w-[auto]"
                  variant="body3"
                >
                  About Monnica beauty
                </Text>
                <Text
                  className="font-normal font-roboto not-italic text-left text-red_200 tracking-[0.12px] w-[auto]"
                  variant="body6"
                >
                  Discover the Latest Beauty Must-Haves
                </Text>
                <Img
                  src="images/img_social.svg"
                  className="h-[19px] w-[113px]"
                  alt="social"
                />
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-[40px] gap-[88px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[22px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="text-left text-red_200 tracking-[0.17px] uppercase w-[auto]"
                    variant="body3"
                  >
                    Information
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    About
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    shop
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    Blog
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    Career
                  </Text>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="text-left text-red_200 tracking-[0.17px] uppercase w-[auto]"
                    variant="body3"
                  >
                    Help
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    Customer Support
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    Delivery
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    Details
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-red_200 tracking-[1.08px] uppercase w-[auto]"
                    variant="body4"
                  >
                    Terms & Conditions
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductcardOnePage;
