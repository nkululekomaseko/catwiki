import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import CatwikiLogo from "./CatWikiLogo";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: "0 100px 0 100px",
        borderTopLeftRadius: "42px",
        borderTopRightRadius: "42px",
        height: "72px",
      }}
    >
      <Flex justify="space-between" align="center" sx={{ height: "100%" }}>
        <CatwikiLogo width="100" height="35" color="#ffffff" />
        <Flex>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              lineHeight: "22px",
              color: "white",
            }}
          >
            &copy; created by{" "}
          </Text>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "Montserrat",
              lineHeight: "22px",
              color: "white",
            }}
          >
            {`\u00A0`}nkululekomaseko{`\u00A0`}
          </Text>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              lineHeight: "22px",
              color: "white",
            }}
          >
            - devChallenge.io 2023
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
