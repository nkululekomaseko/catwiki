import { Box, Divider, Flex, Stack, Text } from "@mantine/core";

const CatBreedDetailsStack = (props: {
  data: Array<{ name: string; value: number }>;
}) => {
  const { data } = props;

  return (
    <Stack spacing="lg">
      {data.map((item, index) => {
        return (
          <Flex align="center" key={index}>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: 700,
                fontFamily: "Montserrat",
                lineHeight: "20px",
                color: "#291507",
                width: "150px",
              }}
            >
              {item.name}:
            </Text>
            <Flex align="center">
              {[1, 2, 3, 4, 5].map((value) => (
                <Box
                  key={value}
                  sx={{
                    width: "60px",
                    height: "12px",
                    margin: "8px",
                    borderRadius: "8px",
                    backgroundColor:
                      value <= item.value ? "#544439" : "#E0E0E0",
                  }}
                />
              ))}
            </Flex>
          </Flex>
        );
      })}
    </Stack>
  );
};

export default CatBreedDetailsStack;
