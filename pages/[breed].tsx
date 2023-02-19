import { Box, Text } from "@mantine/core";
import { useRouter } from "next/router";
import CatwikiLogo from "../components/CatWikiLogo";

const Breed = () => {
  const router = useRouter();
  const { breed } = router.query;

  return (
    <>
      <Box sx={{ maxWidth: "100%", margin: "1% 3% 0 3%" }}>
        <CatwikiLogo width="100" height="35" color="#291507" />
      </Box>
    </>
  );
};

export default Breed;
