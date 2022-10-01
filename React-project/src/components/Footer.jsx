import { Box } from "@chakra-ui/react";
import React from "react";
import Styles from "../AllCss/Allcss.module.css";
import data from "../Json-data/Footer.json";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box className={Styles.mainbox}>
      <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="" style={{height:"42px",width:"142px"}}/>
        <Box>
        <h1 style={{color:"black",fontSize:"15px",fontWeight:"700"}}>Company</h1>
          <Breadcrumb>
            <BreadcrumbItem>
           
              <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Advertising</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Jobs</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">List of property</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Partnerships</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Newsroom</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Investor relation</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Site map</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Orbitz reward</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box>
        <h1 style={{color:"black",fontSize:"15px",fontWeight:"700"}}>Explore</h1>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Hotels in United States</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Vacation Rentals in United States
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Car Rentals in United States
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Domestic Flights</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Vacation Packages in United States
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Domestic Flights</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Vacation Packages in United States
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Orbitz Reviews</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Orbitz Coupons</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">LGBTQ Travel</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Unique Accommodations</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box>
        <h1 style={{color:"black",fontSize:"15px",fontWeight:"700"}}>Policies</h1>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Support</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Cancel your hotel or vacation rental booking
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Cancel your flight</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Refund timelines, policies & processes
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Use an Orbitz Coupon</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box>
        <h1 style={{color:"black",fontSize:"15px",fontWeight:"700"}}>Help</h1>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Privacy Policy</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Terms of Use</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Vrbo terms and conditions
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">DOrbitz Rewards Terms</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Do not sell my personal information
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
