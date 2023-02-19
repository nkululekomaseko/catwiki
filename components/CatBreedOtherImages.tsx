import { AspectRatio, Box, Flex, Image, SimpleGrid, Text } from "@mantine/core";

const CatBreedOtherImages = (props: { urls: Array<string> }) => {
  return (
    <Box>
      <Text
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          fontFamily: "Montserrat",
          lineHeight: "44px",
          color: "#291507",
          margin: "20px",
        }}
      >
        Other photos
      </Text>
      <SimpleGrid
        spacing="md"
        cols={4}
        breakpoints={[
          { maxWidth: 1200, cols: 3 },
          { maxWidth: 900, cols: 2 },
          { maxWidth: 400, cols: 1 },
        ]}
      >
        {props.urls.map((url, index) => (
          <Flex justify="center" key={index}>
            <Image
              src={url}
              alt="Cat Image"
              radius="lg"
              width={280}
              height={280}
            />
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CatBreedOtherImages;
