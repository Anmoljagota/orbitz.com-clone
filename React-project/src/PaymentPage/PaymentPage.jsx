import { Alert, AlertIcon, Box, Checkbox, Stack } from "@chakra-ui/react";
import React from "react";
import Styles from "../AllCss/Payment.module.css";
import { CheckCircleIcon, CheckIcon, InfoIcon } from "@chakra-ui/icons";
import Navbar from "../Pages/Navbar";
import { Link } from "react-router-dom";
const imagesdata = [
  {
    imgsrc:
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg",
  },
  {
    imgsrc:
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg",
  },
  {
    imgsrc:
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg",
  },
  {
    imgsrc:
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg",
  },
  {
    imgsrc:
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg",
  },
  { imgsrc: "https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg" },
  { imgsrc: "https://a.travel-assets.com/egds/marks/payment__visa.svg" },
];
const PaymentPage = () => {
  return (
    <div className={Styles.mainbox}>
      {/* <Navbar/> */}
      <Box style={{ width: "90%", margin: "auto",marginTop:"20px"}}>
        <Box style={{ fontWeight: "600", fontSize: "26px", color: "black" }}>
          Secure booking — only takes 2 minutes!
        </Box>
      </Box>
      <Box
        style={{
          width: "90%",
          margin: "auto",
          borderRadius:"8px",
          display: "flex",
          backgroundColor: "white",
          marginTop: "25px",
          padding: "18px",
        }}
      >
        <span>
          <CheckCircleIcon />
        </span>
        <Box style={{ marginLeft: "30px"}}>
          <h1 style={{ color: "black", fontWeight: "500", fontSize: "15px" }}>
            Free cancellation before Sun, Oct 16, 11:59am (property local time)
          </h1>
          <h1>
            You can change or cancel this stay for a full refund if plans
            change. Because flexibility matters.
          </h1>
        </Box>
      </Box>
      <Box
        style={{
          width: "90%",
          margin: "auto",
          height: "110vw",
          marginTop: "15px",
          display: "flex",
        }}
      >
        <Box style={{ width: "70%", color: "black" }}>
          <Box style={{ backgroundColor: "white", height: "25vw" ,padding:"25px",borderRadius:"5px" }}>
            <span
              style={{ color: "black", fontWeight: "500", fontSize: "20px" }}
            >
              Room1:
            </span>{" "}
            2 Adults 1 Double Bed, 1 Twin Bed and 1 Twin Sofa Bed Non-smoking
            <Box style={{ color: "green", fontSize: "14px" }}>
              <span>
                <CheckIcon />
                Free parking
              </span>
              <span style={{ marginLeft: "10px" }}>
                <CheckIcon />
                Free Wifi
              </span>
            </Box>
            <Box style={{ display: "flex", marginTop: "15px" }}>
              <Box style={{ display: "flex" }}>
                <Box>
                  First name*
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="e.g john"
                    className={Styles.border}
                  />
                  <br />
                </Box>
                <Box style={{ marginLeft: "15px" }}>
                  Last name*
                  <br />
                  <input
                    type="text"
                    placeholder="e.g smith"
                    className={Styles.border}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={Styles.margintop}>
              Mobile phone Number
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="So the property can reach you"
                className={Styles.border}
              />
              <br />
              <Checkbox className={Styles.color}>
                Receive text alerts about this trip. Message and data rates may
                apply.
              </Checkbox>
              <br />
            </Box>
          </Box>
          <Box
            style={{ backgroundColor: "white", marginTop: "25px"}}
            className={Styles.border}
          >
            <Box
              style={{
                width: "90%",
              
                margin: "auto",
              }}
            >
              <Box>
                <span style={{ fontSize: "17px", fontWeight: "700" }}>
                  Protect Your hotel
                </span>
                <span
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    marginLeft: "10px",
                    borderRadius: "5px",
                  }}
                >
                  Recommended
                </span>
              </Box>
              <Box className={Styles.border} style={{ marginTop: "10px" }}>
                <InfoIcon />
                Important: Trip cancellation due to government travel
                advisories, fear of travel, or change of mind is not covered.
                Travel insurance may provide coverage for COVID-19 diagnosed
                illness. COVID-19 is a foreseen event and certain other
                coverages will not apply
              </Box>
              <Box style={{ marginTop: "15px" }}>
                <Alert status="success">
                  <AlertIcon />
                  You've added travel protection to your trip.
                </Alert>
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              backgroundColor: "white",
              width: "100%",
              margin: "auto",
              marginTop: "20px",
              padding:"25px 10px",
              borderRadius:"8px"
            }}
          >
            <Box
              style={{
                backgroundColor: "white",
                width: "90%",
                margin: "auto",
                height: "36vw",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70%",
                  color: "green",
                  fontSize: "15px",
                }}
              >
                <span>
                  <CheckIcon /> We use secure transmission
                </span>
                <span>
                  <CheckIcon />
                  We protect your personal information
                </span>
              </Box>
              <Box
                style={{
                  fontSize: "13px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "40%",
                  marginTop: "15px",
                }}
              >
                <button style={{ backgroundColor: "gray", padding: "1px" }}>
                  Debit/Credit Card
                </button>
                <span style={{ color: "blue" }}>Monthly Payment</span>
                <span style={{ color: "blue" }}>Click to Pay</span>
              </Box>
              <hr />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "55%",
                  marginTop: "20px",
                 
                }}
              >
                {imagesdata.map((item) => (
                  <div>
                    <img src={item.imgsrc} alt="" />
                  </div>
                ))}
              </Box>
              <Box
                style={{
                  color: "gray",
                  fontWeight: "700",
                  marginTop: "25px",
                  fontSize: "15px",
                }}
              >
                <Box>Name on Card*</Box>
                <input
                  type="password"
                  name=""
                  id=""
                  style={{
                    border: "1px solid gray",
                    padding: "5px 65px 5px 65px",
                  }}
                />
                <Box style={{ marginTop: "20px" }}>
                  Debit/Credit card number*
                </Box>
                <input
                  type="password"
                  name=""
                  id=""
                  style={{
                    border: "1px solid gray",
                    padding: "5px 45px 5px 45px",
                  }}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "25%",
                  marginTop: "20px",
                  
                }}
              >
                <select
                  name=""
                  id=""
                  className={Styles.border}
                  style={{ backgroundColor: "wheat", color: "red" }}
                >
                  <option value="">Month</option>
                  <option value="">01-jan</option>
                  <option value="">02-feb</option>
                  <option value="">07-feb</option>
                  <option value="">09-feb</option>
                  <option value="">24-march</option>
                </select>
                <select
                  name=""
                  id=""
                  className={Styles.border}
                  style={{
                    backgroundColor: "wheat",
                    color: "red",
                    marginLeft: "15px",
                  }}
                >
                  <option value="">Year</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2022</option>
                  <option value="">2022</option>
                  <option value="">2024</option>
                </select>
              </Box>
              <Box
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                }}
              >
                <Box>
                  security code
                  <br />
                  <input
                    type="password"
                    name=""
                    id=""
                    style={{
                      width: "60%",
                      height: "40px",
                      border: "1px solid black",
                    }}
                  />
                </Box>
                <Box>
                  Billing ZIP code*
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{
                      width: "108%",
                      height: "40px",
                      border: "1px solid black",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box style={{backgroundColor:"white",padding:"20px"}}>
            <span
              style={{ fontSize: "25px", fontWeight: "700", color: "black" }}
            >
              Important Information about your Booking
            </span>
            <br />
            <Box
              style={{
                fontSize: "13px",
                fontWeight: "400",
                color: "black",
                marginTop: "20px",
              }}
            >
              . Cancellations or changes made after 11:59am (property local
              time) on Oct 16, 2022 or no-shows are subject to a property fee
              equal to 50% of the total amount paid for the reservation.
              <br />
              <br />
              . Front desk staff will greet guests on arrival.
              <br />
              <br />
              . You'll be asked to pay the following charges at the property:
              <br />
              <br />
              <span>Cash deposit: USD 200.00 per stay</span>
              <br />
              <br />
              <span>
                By clicking on the button below, I acknowledge that I have
                reviewed the Privacy Statement Opens in a new window. and
                Government Travel Advice Opens in a new window. and have
                reviewed and accept the Rules & Restrictions Opens in a new
                window. and Terms of Use Opens in a new window..
              </span>
            <Box style={{color:"green",fontSize:"14px"}}>Change of plans? No problem. You can cancel for free before Sun, Oct 1</Box>
            </Box>
           <Link to="/"><button  className={Styles.last}>Complete Booking</button></Link> 
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PaymentPage;
