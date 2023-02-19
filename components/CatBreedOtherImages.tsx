import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";

const CatBreedOtherImages = (props: { urls: Array<string> }) => {
  return (
    <Box sx={{ margin: "20px 0" }}>
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
      <Grid gutter="lg">
        {props.urls.map((url, index) => (
          <Grid.Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Image
              key={index}
              src={url}
              alt="Cat Image"
              radius="lg"
              width={280}
              height={280}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default CatBreedOtherImages;
