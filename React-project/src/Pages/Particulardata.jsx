import { Box, Skeleton, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Action } from "../Action/Action";
import Restaurent from "../AllApi/Restaurent";
import { Mycontext } from "../Context/Context";
import Styles from "../AllCss/Particular.module.css";
import Form from "../components/Form";
const Particulardata = () => {
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
    <div>
      <Form />
      <Box className={Styles.mainbox}>
        {data &&
          data.map((items, i) => (
              <Skeleton isLoaded={state.IsLoading}>
            <Box key={i} style={{ marginTop: "10px", display: "flex" }}>
              <Box
                style={{
                  width: "35%",
                  height: "auto",
                  backgroundColor: "white",
                }}
              >
                <img src={items.images} alt="error" />
              </Box>
              
              <Box
                style={{
                  width: "65%",
                  height: "140px",
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
                <h5 style={{ fontSize: "15px", backgroundColor: "white" }}>
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
                      <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                        {items.headinglower13}
                      </Text>
                    </Box>
                    <Text
                      style={{ fontSize: "12px", backgroundColor: "white" }}
                    >
                      {items.headinglowertext14}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            </Skeleton>
          ))}
      </Box>
      
    </div>
  );
};

export default Particulardata;
