import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Styles from "../AllCss/Form.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Form = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <div  className={Styles.forminput}>
      <Box  className={Styles.forminput1}>
        <input
          type="text"
          placeholder="Going to"
          style={{ border: "1px solid grey", padding: "14px", width: "40%" }}
        />
        <Input
          placeholder="Select Date and Time"
          size="sm"
          type="datetime-local"
          padding="27px"
          w="20%"
          border= "1px solid grey"
        />

        <Button
          ml="4"
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
           
          }}
          w="20%"
          p="27px"
          border= "1px solid grey"
          bg="white"
        >
          Use Overlay two
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box style={{ width: "90%",margin:"auto",marginTop:"20px" }}>
        <Stack spacing={[1, 9]} direction={["column", "row"]} style={{ width: "90%" }}>
          <Checkbox size="md" colorScheme="green" defaultChecked>
           Add a flight
          </Checkbox>
          <Checkbox size="md" colorScheme="green" defaultChecked>
            Add a car
          </Checkbox>
        </Stack>
      </Box>
    <Link to="/particular"> <button className={Styles.btn}>Search</button></Link> 
    </div>
  );
};

export default Form;
