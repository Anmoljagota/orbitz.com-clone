import React from "react";
import { Link } from "react-router-dom"; 
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  Portal,
  Button,
} from "@chakra-ui/react";
import {
  Box,
 
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Styles from "../AllCss/Allcss.module.css";
import Styles1 from "../AllCss/Login.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box className={Styles.bigparent}>
      <Box className={Styles.firstchild}>
        <Link to="/">
          <img
            src="data:image/png;base64,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"
            alt="error"
            style={{ height: "40px", width: "220px" }}
          />
        </Link>
        <Menu>
          <MenuButton
            as={Text}
            righticon={<ChevronDownIcon />}
            style={{ color: "white" }}
          >
            More travel
          </MenuButton>
          <MenuList className={Styles.lastcolor}>
            <MenuItem>Stays</MenuItem>
            <MenuItem>Flights</MenuItem>
            <MenuItem>Packages</MenuItem>
            <MenuItem>Cars</MenuItem>
            <MenuItem>Cruises</MenuItem>
            <MenuItem>Things to do</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box className={Styles.secondchild}>
        <Link to="/espanol">Espanol</Link>
        <Link to="/property">List your property</Link>
        <Link to="/support">Supports</Link>
        <Link to="/trips">Trips</Link>
      <Box style={{color:"white"}}>


          {" "}
          <Popover>
            <PopoverTrigger>
             <h1 style={{cursor:"pointer"}}>Sign in</h1>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader><span style={{width:"90%",fontSize:"17px",fontWeight:"700"}}>Members can access discounts, points and special features</span></PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                <Link to="/login"><button className={Styles1.popbtn}>Sign in</button></Link>
                </PopoverBody>
                <PopoverBody>
               <Link to="/signup"> <span className={Styles1.createaccount}>Create a free account</span></Link>
                </PopoverBody>
                <PopoverBody>
               List of favourites
                </PopoverBody>
                <PopoverBody>
               Loyality of program
                </PopoverBody>
                <PopoverFooter style={{marginTop:"20px"}}>Feedback</PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
     
      </Box>
       
      </Box>
    </Box>
  );
};

export default Navbar;
