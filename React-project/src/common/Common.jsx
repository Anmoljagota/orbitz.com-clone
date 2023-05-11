import React, { useState } from "react";
import Styles from "../AllCss/Allcss.module.css";

import {
  Center,
  Select,
  Box,
  InputLeftElement,
  InputGroup,
  Input,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Styles1 from "../AllCss/booking.module.css";
import data from "../Json-data/db.json";
import { PhoneIcon } from "@chakra-ui/icons";
import Form from "../components/Form";
import Accordion from "../components/Accordion";
const Links = [
  { path: "/", title: "Stays" },
  { path: "/flights", title: "Flights" },
  { path: "/cars", title: "Cars" },
  { path: "/packages", title: "Packages" },
  { path: "/thingtodo", title: "Things to do" },
  { path: "/cruises", title: "Cruises" },
];
const Common = ({ details }) => {
  const [isloading, setisLoading] = useState(false);
  setTimeout(() => {
    setisLoading(true);
  }, 3000);
  return (
    <Box className={Styles1.upperdiv}>
      <Skeleton isLoaded={isloading}>
        <Box className={Styles.images}>
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
              <Form />
            </Box>
          </Center>
          <div className={Styles1.forallnew}>
            <Center>
              <Box className={Styles1.main}>
                <Box className={Styles1.all}>
                  {details.map((item) => (
                    <Box
                      key={item.imagesrc}
                      boxShadow="dark-lg"
                      p="6"
                      rounded="md"
                      backgroundColor="white"
                    >
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
                        <Box className={Styles1.relativep}>
                          {item.uitkheading}
                        </Box>
                        <Box style={{ position: "relative" }}>
                          {item.uitktext}
                        </Box>
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
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src="https://tpc.googlesyndication.com/simgad/14093910000568833552"
                    alt="error"
                    style={{
                      height: "130px",
                      width: "60%",
                      position: "relative",
                    }}
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
                <Box
                  style={{
                    display: "flex",
                    marginTop: "30px",
                    border: "1px solid black",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src="https://tpc.googlesyndication.com/simgad/14760604655562023227?"
                    alt="error"
                    style={{
                      height: "250px",
                      width: "60%",
                      position: "relative",
                    }}
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
                    src="https://forever.travel-assets.com/flex/flexmanager/images/2020/10/20/AdobeStock_276966704_coloredit10.png?impolicy=fcrop&w=900&h=225&q=mediumHigh4?"
                    alt=""
                    style={{ height: "250px", width: "35%" }}
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
                      . Earn 4% back when you book your hotel in app, vs. 3% on
                      site{" "}
                    </h2>
                    <h2>. Get flight status and gate number notifications</h2>
                    <h2>
                      . Have questions about your stay? Message your hotel right
                      in the app
                    </h2>
                    <Box
                      className={Styles1.forall}
                      size="md"
                      style={{
                        width: "95%",
                        height: "auto",
                        marginTop: "30px",
                        marginLeft: "15px",
                      }}
                    >
                      <Select
                        placeholder="country code"
                        style={{ width: "200px", height: "50px" }}
                      >
                        <option value="option1">United kindom +44</option>
                        <option value="option2">Thailand +66</option>
                        <option value="option3">Thaiwan +186</option>
                        <option value="option3">India +91</option>
                        <option value="option3">Sinhapur +65</option>
                        <option value="option3">Spain +34</option>
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
                        style={{
                          width: "250px",
                          height: "50px",
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        Get the app
                      </Button>
                    </Box>
                    <h5 style={{ fontSize: "12px" }}>
                      By providing your number, you agree to receive a one-time
                      automated text message with a link to get the app.
                      Standard text message rates may apply.
                    </h5>
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
          </div>
          <Accordion />
          <Footer />
        </Box>
      </Skeleton>
    </Box>
  );
};

export default Common;
