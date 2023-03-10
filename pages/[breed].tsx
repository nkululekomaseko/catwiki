import { Box, Flex, Grid, Image, Text } from "@mantine/core";
import { useRouter } from "next/router";
import CatwikiLogo from "../components/CatWikiLogo";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchBreed, useBreed } from "../hooks/useBreed";
import CatBreedInfo from "../components/CatBreedInfo";
import CatBreedOtherImages from "../components/CatBreedOtherImages";
import Footer from "../components/Footer";

const Breed = ({}) => {
  const router = useRouter();
  const { breed } = router.query;

  const { data, isLoading, isFetching } = useBreed({
    breedIds: breed as string,
    limit: 9,
  });

  if (isLoading) return <Box>Is Loading</Box>;

  return (
    <>
      <Box sx={{ maxWidth: "100%", margin: "1% 3% 0 3%" }}>
        <CatwikiLogo width="100" height="35" color="#291507" />
        <Grid>
          <Grid.Col xs={12} sm={4}>
            <Flex justify="center" align="end" sx={{ padding: "0 36px" }}>
              <Image
                src={data[0].url}
                alt={data[0].breeds[0].name}
                radius="lg"
              />
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} sm={8}>
            <CatBreedInfo data={data[0].breeds[0]} />
          </Grid.Col>
        </Grid>
        <CatBreedOtherImages urls={data.slice(1).map((cat) => cat.url)} />
        <Footer />
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { breed } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["breed", breed],
    queryFn: () => fetchBreed({ breedIds: breed as string, limit: 9 }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Breed;
