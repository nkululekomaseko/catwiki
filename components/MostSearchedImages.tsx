import { Box, Flex, Stack, Image, Text, SimpleGrid } from "@mantine/core";
// import Image from "next/image";

const imageData = [
  {
    breedId: "beng",
    breedName: "Bengal",
    imageId: "ZocD-pQxd",
  },
  {
    breedId: "sava",
    breedName: "Savannah",
    imageId: "G_2zGI5Wu",
  },
  {
    breedId: "norw",
    breedName: "Norwegian Forest Cat",
    imageId: "-ZBBqoWNQ",
  },
  {
    breedId: "srex",
    breedName: "Selkirk Rex",
    imageId: "B2YB13Ydq",
  },
];

const MostSearchedImages = () => {
  return (
    <Box sx={{ width: "100%", margin: "48px 0px" }}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 1300, cols: 3 },
          { maxWidth: 1000, cols: 2 },
        ]}
      >
        {imageData.map((image) => {
          return (
            <Flex key={image.breedId} align="center" direction="column">
              <Box>
                <Image
                  src={`https://cdn2.thecatapi.com/images/${image.imageId}.jpg`}
                  alt={image.breedName}
                  width={220}
                  height={220}
                  radius={24}
                />
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    color: "#291507",
                    margin: "20px 0px",
                  }}
                >
                  {image.breedName}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default MostSearchedImages;
