import React from "react";
import Styles from "../Pages/style.module.css";
import { Center, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Styles1 from "../Allcss/booking.module.css";
import data from "../JSONdata/db.json";
const Links = [
  { path: "/", title: "Stays" },
  { path: "/flights", title: "Flights" },
  { path: "/cars", title: "Cars" },
  { path: "/packages", title: "Packages" },
  { path: "/thingtodo", title: "Things to do" },
  { path: "/cruises", title: "Cruises" },
];
const Common = ({ details }) => {
  console.log(details);
  return (
    <Box>
      <div className={Styles.images}>
        <Center>
          <Box className={Styles.formcenter}>
            <Box
              w="100%"
              p={4}
              color="white"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "60%",
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
        </Center>
      </div>
      <Center>
        <Box>


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
          </Box>
      </Center>
    </Box>
  );
};

export default Common;

