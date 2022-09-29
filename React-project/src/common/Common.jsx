import React from "react";
import Styles from "../AllCss/Allcss.module.css";
import {
  Center,
  Select,
  Box,
  Stack,
  InputLeftElement,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Styles1 from "../AllCss/booking.module.css";
import data from "../Json-data/db.json";
import data1 from "../Json-data/db1.json"
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons";
import Accordion from "../components/Accordion";
const Links = [
  { path: "/", title: "Stays" },
  { path: "/flights", title: "Flights" },
  { path: "/cars", title: "Cars" },
  { path: "/packages", title: "Packages" },
  { path: "/thingtodo", title: "Things to do" },
  { path: "/cruises", title: "Cruises" },
];
const Common = ({ details, newdata }) => {
 const {name}=data1;

  return (
    <Box className={Styles1.upperdiv}>
      <Box className={Styles.images}>
        <div>
          <Center>
            <Box className={Styles.formcenter}>
              <Box>
                <Box
                  w="100%"
                  p={4}
                  color="white"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "40%",
                    margin: "auto",
                    border: "1px solid black",
                  }}
                >
                  {Links.map((link) => (
                    <NavLink
                      className={({ isActive }) => {
                        return isActive ? Styles1.active : Styles1.default;
                      }}
                      key={link.path}
                      to={link.path}
                      end
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </Box>
              </Box>
            </Box>
          </Center>
        </div>
        <Center>
          <Box className={Styles1.main}>
            <Box className={Styles1.all}>
              {details.map((item) => (
                <Box key={item.imagesrc} boxShadow="dark-lg" p="6" rounded="md">
                  <img
                    src={item.imagesrc}
                    alt="error"
                    className={Styles1.threeimages}
                  />
                </Box>
              ))}
            </Box>

            <Box className={Styles1.jsondata}>
              {data.map((item) => (
                <>
                  <Box key={item.id} style={{ position: "relative" }}>
                    <Box className={Styles1.relativep}>{item.uitkheading}</Box>
                    <Box style={{ position: "relative" }}>{item.uitktext}</Box>
                    <img
                      src={item.imagesdata}
                      alt="error"
                      className={Styles1.fourimages}
                    />
                  </Box>
                </>
              ))}
            </Box>
            <Box
              style={{
                display: "flex",
                marginTop: "30px",
                border: "1px solid black",
                justifyContent: "space-between",
              }}
            >
              <img
                src="https://tpc.googlesyndication.com/simgad/14093910000568833552"
                alt="error"
                style={{ height: "130px", width: "60%", position: "relative" }}
              />
              <h1
                style={{
                  position: "absolute",
                  color: "white",
                  margin: "100px 0px 0px 15px",
                  fontWeight: "900",
                }}
              >
                Today's top deals
              </h1>

              <img
                src="https://tpc.googlesyndication.com/simgad/6539207353325327194?"
                alt=""
                style={{ height: "130px", width: "35%" }}
              />
            </Box>

            <Center>
              <img
                src="https://tpc.googlesyndication.com/simgad/6659684725855332669?"
                alt=""
                style={{ marginTop: "60px" }}
              />
            </Center>

            <Box className={Styles1.discount}>
              <img
                src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg"
                alt="error"
                style={{ width: "30%" }}
              />
              <Box>
                <h1 style={{ fontSize: "30px", width: "100%" }}>
                  Rewards are waiting for you in the Orbitz app
                </h1>
                <h2>
                  . Earn 4% back when you book your hotel in app, vs. 3% on site{" "}
                </h2>
                <h2>. Get flight status and gate number notifications</h2>
                <h2>
                  . Have questions about your stay? Message your hotel right in
                  the app
                </h2>
                <Box
                  className={Styles1.forall}
                  size="md"
                  style={{ width: "95%", height: "auto", marginTop: "30px" }}
                >
                  <Select
                    placeholder="Select option"
                    style={{ width: "200px", height: "50px" }}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>

                  <InputGroup style={{ marginRight: "40px" }}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      style={{ width: "200px", height: "50px" }}
                    />
                  </InputGroup>

                  <Button
                    colorScheme="red"
                    style={{ width: "250px", height: "50px" }}
                  >
                    Red
                  </Button>
                  
                </Box>
                <h5 style={{fontSize:"12px"}}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</h5>
              </Box>
              <Box>
                <img
                  src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png"
                  alt="scanner"
                  style={{ height: "150px", width: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </Center>
       
<Accordion />
      </Box>
    </Box>
  );
};

export default Common;

/*[
  {
    "uitk-image-media src": "https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
    "uitk-card-link href": "https://www.orbitz.com/lp/lgbtq-gay-travel-hotels?rfrr=call-to-action.undefined.click",
    "uitk-image-media src 2": "https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
    "uitk-card-link href 2": "https://www.orbitz.com/rewards/?rfrr=call-to-action.undefined.click",
    "uitk-image-media src 3": "https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh",
    "uitk-card-link href 3": "https://www.orbitz.com/member-discounts?rfrr=call-to-action.undefined.click",
    "uitk-heading": "",
    "uitk-heading 2": "",
    "uitk-text": "",
    "is-visually-hidden": "",
    "uitk-heading 3": "",
    "uitk-text 2": "",
    "uitk-heading 4": "",
    "uitk-text 3": "",
    "uitk-text 4": ""
  },
  {
    "uitk-image-media src": "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh",
    "uitk-card-link href": "https://www.orbitz.com/lp/deals/last-minute?rfrr=editorial.Last-minute_deals.click",
    "uitk-image-media src 2": "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh",
    "uitk-card-link href 2": "https://www.orbitz.com/lp/deals/all-inclusive?rfrr=editorial.All-inclusive_resorts.click",
    "uitk-image-media src 3": "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh",
    "uitk-card-link href 3": "https://www.orbitz.com/member-discounts?rfrr=editorial.Insider_Prices.click",
    "uitk-heading": "Featured offers",
    "uitk-heading 2": "Last-minute deals",
    "uitk-text": "Getaway today",
    "is-visually-hidden": "Last-minute deals",
    "uitk-heading 3": "All-inclusive resorts",
    "uitk-text 2": "Enjoy sun and fun",
    "uitk-heading 4": "Insider Prices",
    "uitk-text 3": "Members get rewarded",
    "uitk-text 4": "Fly somewhere beachy and warm"
  },
  {
    "uitk-image-media src": "https://forever.travel-assets.com/flex/flexmanager/images/2020/12/03/ORB_Storefront_Deals_2740x1484-V1.jpg",
    "uitk-card-link href": "https://www.orbitz.com/deals/?rfrr=editorial.Today%27s_top%20deals.click",
    "uitk-image-media src 2": "",
    "uitk-card-link href 2": "",
    "uitk-image-media src 3": "",
    "uitk-card-link href 3": "",
    "uitk-heading": "",
    "uitk-heading 2": "",
    "uitk-text": "",
    "is-visually-hidden": "Today's top deals",
    "uitk-heading 3": "",
    "uitk-text 2": "",
    "uitk-heading 4": "",
    "uitk-text 3": "",
    "uitk-text 4": ""
  },
  {
    "uitk-image-media src": "https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__mode_edit.svg",
    "uitk-card-link href": "",
    "uitk-image-media src 2": "https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__monetization_on.svg",
    "uitk-card-link href 2": "",
    "uitk-image-media src 3": "https://forever.travel-assets.com/flex/flexmanager/images/2021/04/08/icon__chat.svg",
    "uitk-card-link href 3": "",
    "uitk-heading": "Here to help keep you on the move",
    "uitk-heading 2": "Change or cancel a trip",
    "uitk-text": "Make updates to your itinerary or cancel a booking",
    "is-visually-hidden": "Change or cancel a trip",
    "uitk-heading 3": "Use a credit or coupon",
    "uitk-text 2": "Apply a coupon code or credit to a new trip",
    "uitk-heading 4": "Track your refund",
    "uitk-text 3": "Check the status of a refund currently in progress",
    "uitk-text 4": ""
  },
  {
    "uitk-image-media src": "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg",
    "uitk-card-link href": "",
    "uitk-image-media src 2": "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg",
    "uitk-card-link href 2": "",
    "uitk-image-media src 3": "",
    "uitk-card-link href 3": "",
    "uitk-heading": "Traveling tips",
    "uitk-heading 2": "",
    "uitk-text": "National Parks",
    "is-visually-hidden": "",
    "uitk-heading 3": "",
    "uitk-text 2": "There's plenty to keep you busy.",
    "uitk-heading 4": "",
    "uitk-text 3": "The perfect road trip",
    "uitk-text 4": "Find an adventure for every season."
  },
  {
    "uitk-image-media src": "",
    "uitk-card-link href": "",
    "uitk-image-media src 2": "",
    "uitk-card-link href 2": "",
    "uitk-image-media src 3": "",
    "uitk-card-link href 3": "",
    "uitk-heading": "More destinations",
    "uitk-heading 2": "",
    "uitk-text": "Destination deals",
    "is-visually-hidden": "",
    "uitk-heading 3": "",
    "uitk-text 2": "Top hotel beach destinations",
    "uitk-heading 4": "",
    "uitk-text 3": "Top hotel city destinations",
    "uitk-text 4": "Top vacation destinations"
  }
] */
