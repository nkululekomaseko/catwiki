import { Box, Flex, Stack, Text } from "@mantine/core";
import CatBreedDetailsStack from "./CatBreedDetailsStack";
import CatBreedInfoItem from "./CatBreedInfoItem";

const CatBreedInfo = (props: { data: any }) => {
  const { data } = props;

  return (
    <Stack spacing="lg">
      <Text
        style={{
          fontSize: "36px",
          fontWeight: 600,
          fontFamily: "Montserrat",
          lineHeight: "45px",
          color: "#291507",
        }}
      >
        {data.name}
      </Text>
      <Text
        style={{
          fontSize: "18px",
          fontWeight: 500,
          fontFamily: "Montserrat",
          lineHeight: "22px",
          color: "#291507",
          width: "80%",
        }}
      >
        {data.description}
      </Text>
      <CatBreedInfoItem dataProp="Temperament" data={data.temperament} />
      <CatBreedInfoItem dataProp="Origin" data={data.origin} />
      <CatBreedInfoItem dataProp="Life Span" data={data.life_span} />
      <CatBreedDetailsStack
        data={[
          { name: "Adaptability", value: data.adaptability },
          { name: "Affection Level", value: data.affection_level },
          { name: "Child Friendly", value: data.child_friendly },
          { name: "Grooming", value: data.grooming },
          { name: "Intelligence", value: data.intelligence },
          { name: "Health Issues", value: data.health_issues },
          { name: "Social Needs", value: data.social_needs },
          { name: "Stranger Friendly", value: data.stranger_friendly },
        ]}
      />
    </Stack>
  );
};

export default CatBreedInfo;
