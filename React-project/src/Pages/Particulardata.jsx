import {
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Action } from "../Action/Action";
import Restaurent from "../AllApi/Restaurent";
import { Mycontext } from "../Context/Context";
import Styles from "../AllCss/Particular.module.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Particulardata = () => {
  let ceckboxesdata = [
    { name: "Hot tub" },
    { name: "Airport shuttle included" },
    { name: "Breakfast included" },
    { name: "Condominimum included" },
    { name: "Apart-hotel" },
  ];
  const context = React.useContext(Mycontext);
  const { state, dispatch } = context;
  const [data, setData] = useState([]);
  function Fetchdata() {
    Restaurent().then((res) => {
      console.log("i am resoponse", res.data);

      setTimeout(() => {
        setData(res.data);
        dispatch({ type: Action.ISSUCCESS });
      }, 3000);
    });
  }
  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <div style={{ background: "#F5F5F5", border: "2px solid #d4d4d4" }}>
      <Box>
        <Flex border="2px solid red" width="90%" margin="auto">
          <Box border="2px solid red" width="20%">
            <Box mt="25%" height="auto">
              {/* <AiOutlineSearch style={{position:"absolute" , color:"black" , background:"black"}}/> */}
              <label htmlFor="" className={Styles.text}>
                Search by property name
              </label>
              <input
                placeholder="e.g. Marriott"
                style={{
                  width: "100%",
                  padding: "7%",
                  border: "2px solid grey",
                  marginTop: "8px",
                  color: "black",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              />
              <hr style={{ marginTop: "10%" }} />
              <Text className={Styles.text} paddingTop="25px">
                Filter by
              </Text><br/>
              <Text fontWeight="700">Popular filters</Text>
              {ceckboxesdata.map((data, i) => {
                return (
                  <Flex key={i} p="10px" color="#616161" fontSize="18px" fontWeight="400" lineHeight="1.25rem"  width="100%" alignItems="center">
                    <Checkbox border="1px solid grey" background="white"></Checkbox>
                    <Text color="#616161" ml="15px">{data.name}</Text>
                  </Flex>
                );
              })}
            </Box>
          </Box>
          <Box className={Styles.mainbox} border="2px solid black">
            {data &&
              data.map((items, i) => (
                <Skeleton isLoaded={state.IsLoading}>
                  <Link to="/payment">
                    <Box
                      key={i}
                      style={{
                        // width:"70%",
                        marginTop: "10px",
                        display: "flex",
                        background: "white",
                        borderRadius: "5px",
                      }}
                    >
                      <Box
                        style={{
                          width: "35%",
                          height: "auto",
                          backgroundColor: "white",
                        }}
                      >
                        <img
                          src={items.images}
                          alt="error"
                          height="100%"
                          width="100%"
                        />
                      </Box>

                      <Box
                        style={{
                          width: "70%",
                          height: "auto",
                          margin: "auto",
                          marginLeft: "15px",
                          backgroundColor: "white",
                        }}
                      >
                        <h1
                          style={{
                            fontWeight: "700",
                            fontSize: "17px",
                            backgroundColor: "white",
                          }}
                        >
                          {items.heading}
                        </h1>
                        <h5
                          style={{ fontSize: "15px", backgroundColor: "white" }}
                        >
                          {items.headinglowertext}
                        </h5>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "18%",
                            fontSize: "12px",
                            marginTop: "7px",
                            backgroundColor: "white",
                          }}
                        >
                          <h1>{items.badge1}</h1>
                          <h1>{items.badge2}</h1>
                        </Box>
                        <Box className={Styles.minimain}>
                          <Box style={{ backgroundColor: "white" }}>
                            <h5
                              style={{
                                fontSize: "14px",
                                color: "green",
                                marginTop: "10px",
                                backgroundColor: "white",
                              }}
                            >
                              {items.headinglowertext6}
                            </h5>
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "8px",
                                backgroundColor: "white",
                              }}
                            >
                              {items.headinglowertext7}
                              <span style={{ marginLeft: "5px" }}>
                                {items.headinglowertext8}
                              </span>
                              <span style={{ fontSize: "14px" }}>
                                {items.headinglowertext9}
                              </span>
                            </Box>
                          </Box>
                          <Box style={{ backgroundColor: "white" }}>
                            <span className={Styles.badge}>
                              {items.headinglowertextbadge3}
                            </span>
                            <Box
                              style={{
                                display: "flex",
                                marginRight: "20px",
                                justifyContent: "space-between",
                                backgroundColor: "white",
                              }}
                            >
                              <Text as="s">{items.headinglowertext11}</Text>
                              <Text
                                style={{ fontSize: "20px", fontWeight: "700" }}
                              >
                                {items.headinglower13}
                              </Text>
                            </Box>
                            <Text
                              style={{
                                fontSize: "12px",
                                backgroundColor: "white",
                              }}
                            >
                              {items.headinglowertext14}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Skeleton>
              ))}
          </Box>
          <Image
            src="https://tpc.googlesyndication.com/simgad/2349854280888042437?"
            height="700px"
            width="160px"
            mt="50px"
            position="sticky"
            top="10"
          />
        </Flex>
      </Box>
    </div>
  );
};

export default Particulardata;
