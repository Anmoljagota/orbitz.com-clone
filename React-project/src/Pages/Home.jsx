import { Box, useAccordionItemState } from "@chakra-ui/react";
import React from "react";
import Common from "../common/Common";
import data from "../Json-data/db.json";
import Styles1 from "../AllCss/booking.module.css";
import Common2 from "../common/Common2";
const details = [
  {
    imagesrc:
      "https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
  },
  {
    imagesrc:
      "https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
  },
  {
    imagesrc:
      "https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
  },
];

const Home = () => {
  return (
    <>
      <Common details={details} newdata={data} />
    </>
  );
};

export default Home;
