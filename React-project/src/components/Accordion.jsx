import React from "react";
import {
  Accordion,
  AccordionIcon,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  AccordionButton,
  AccordionItem,
} from "@chakra-ui/react";
import Styles1 from "../AllCss/booking.module.css";
import data from "../Json-data/db1.json";
const Accodion = () => {
  const { name } = data;

  return (
    <>
      <Box style={{ width: "90%", margin: "auto", marginTop: "50px" }}>
        <h1 style={{textAlign:"start",color:"black",fontWeight:"800",fontSize:"30px",marginBottom:"10px"}}> More Destination</h1>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {name.map((item) => (
            <GridItem w="100%" h="10" className={Styles1.accordion}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        color="Gray"
                        font-weight="900"
                        fontSize="18px"
                        cursor="pointer"
                      >
                        {item.deals}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>{item.name}</Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Accodion;
