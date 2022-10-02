import { Box, Center, Checkbox,  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  } from "@chakra-ui/react";
import React from "react";
import Styles from "../AllCss/Login.module.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div style={{height:"60vw"}}>
        <Box style={{ border: "1px solid gray" ,padding:"10px"}}>
           
      <Center>
          <img
            src="https://www.orbitz.com/_dms/interstitial/logo.svg?locale=en_US&siteid=70201"
            alt=""
           style={{height:"30px"}}
            />
            </Center>
        </Box>
        <h1 style={{marginLeft:"38%",fontSize:"28px",fontWeight:"700",marginTop:"20px"}}>Create an account</h1>
        <Center>

        <Box style={{width:"25%",marginTop:"30px"}}>
            
       <input type="email" name="" id="" placeholder="Email address" className={Styles.same}/><br/><br/>
       <input type="text" name="" id="" placeholder="First name" className={Styles.same}/><br/><br/>
       <input type="text" name="" id="" placeholder="Last name" className={Styles.same}/><br/><br/>
       <input type="password" name="" id="" placeholder="Password" className={Styles.same}/><br/><br/>
       <Checkbox isInvalid>Keep me signed in</Checkbox><br/><br/>
       <h5 style={{color:"gray",fontSize:"12px"}}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</h5><br/>
       <h5 style={{color:"black",fontSize:"13px"}}>By creating an account, I agree to the Orbitz Terms and Conditions, Privacy Statement and Orbitz Rewards Terms and Conditions.</h5><br/>
<Link to="/login"><button className={Styles.btn1}>Continue</button></Link>
        </Box>
        
        </Center>
        <Center>

        <Box style={{display:'flex',fontSize:"15px",marginTop:"10px"}}>Already have an account?
        <Breadcrumb >
  <BreadcrumbItem>
    <BreadcrumbLink href='#' ><span style={{color:"blue"}}>Sign in</span></BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  </Box>
        </Center>
    </div>
  );
};

export default Signup;
