import { Flex, Text } from "@mantine/core";

const CatBreedInfoItem = (props: { dataProp: string; data: string }) => {
  return (
    <Flex>
      <Text
        style={{
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "Montserrat",
          lineHeight: "20px",
          color: "#291507",
        }}
      >
        {props.dataProp}:{`\u00A0`}
      </Text>
      <Text
        style={{
          fontSize: "16px",
          fontWeight: 500,
          fontFamily: "Montserrat",
          lineHeight: "20px",
          color: "#291507",
        }}
      >
        {props.data}
      </Text>
    </Flex>
  );
};

export default CatBreedInfoItem;
