import type { NextPage } from "next";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Image,
} from "@mantine/core";
import CatwikiLogo from "../components/CatWikiLogo";
import { BsArrowRight } from "react-icons/bs";
import MostSearchedImages from "../components/MostSearchedImages";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Box sx={{ maxWidth: "100%", margin: "1% 3% 0 3%" }}>
      <Box>
        <CatwikiLogo width="100" height="35" color="#291507" />
        <Box
          sx={{
            borderRadius: "24px",
            marginTop: "24px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "500px",
              backgroundImage: `url('./images/HeroImagelg.png')`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              color: "white",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              "@media (max-width: 1000px)": {
                height: "400px",
              },
              "@media (max-width: 700px)": {
                height: "300px",
              },
              "@media (max-width: 500px)": {
                height: "200px",
              },
            }}
          >
            <Grid sx={{ height: "100%" }}>
              <Grid.Col span={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    marginLeft: "100px",
                  }}
                >
                  <Stack sx={{ width: "300px" }}>
                    <CatwikiLogo width="240" height="90" color="#ffffff" />
                    <Text
                      sx={{
                        fontSize: "24px",
                        fontWeight: 500,
                        fontFamily: "Montserrat",
                      }}
                    >
                      Get to know more about your cat breed
                    </Text>
                    <TextInput
                      type="search"
                      placeholder="Enter you breed"
                      radius="lg"
                    />
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: "#E3E1DC",
              width: "100%",
              height: "50%",
              borderBottomLeftRadius: "24px",
              borderBottomRightRadius: "24px",
            }}
          >
            <Box sx={{ padding: "50px 100px" }}>
              <Box>
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                    color: "#291507",
                  }}
                >
                  Most Searched Breeds
                </Text>
                <Divider
                  size="md"
                  color="#4D270C"
                  sx={{
                    width: "60px",
                  }}
                />
                <Flex
                  justify="space-between"
                  align="end"
                  sx={{ marginTop: "36px" }}
                >
                  <Text
                    style={{
                      fontSize: "48px",
                      fontWeight: 700,
                      fontFamily: "Montserrat",
                      lineHeight: "60px",
                      color: "#291507",
                      width: "60%",
                    }}
                  >
                    66+ Breeds For you to discover
                  </Text>
                  <Button
                    variant="subtle"
                    rightIcon={<BsArrowRight />}
                    sx={{
                      color: "#2915079A",
                      ":hover": {
                        color: "#291507",
                        backgroundColor: "inherit",
                      },
                    }}
                  >
                    SEE MORE
                  </Button>
                </Flex>
                <MostSearchedImages />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: 1300, cols: 1 }]}
            sx={{ padding: "100px" }}
          >
            <Flex justify="center" align="center">
              <Box>
                <Stack align="flex-start" spacing={48}>
                  <Box>
                    <Divider
                      size="md"
                      color="#4D270C"
                      sx={{
                        width: "60px",
                        marginBottom: "24px",
                      }}
                    />
                    <Text
                      style={{
                        fontSize: "48px",
                        fontWeight: 700,
                        fontFamily: "Montserrat",
                        lineHeight: "60px",
                        color: "#291507",
                      }}
                    >
                      Why should you have a cat?
                    </Text>
                  </Box>
                  <Text
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      lineHeight: "22px",
                      color: "#291507",
                    }}
                  >
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety leves
                  </Text>
                  <Button
                    variant="subtle"
                    rightIcon={<BsArrowRight />}
                    sx={{
                      color: "#2915079A",
                      padding: 0,
                      ":hover": {
                        color: "#291507",
                        backgroundColor: "inherit",
                      },
                    }}
                  >
                    READ MORE
                  </Button>
                </Stack>
              </Box>
            </Flex>
            <Box>
              <Box
                sx={{
                  float: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  src="/images/cat_2.png"
                  alt="cat_2"
                  style={{
                    objectFit: "cover",
                    width: "270px",
                    height: "167px",
                    padding: "10px",
                  }}
                />
                <Image
                  src="/images/cat_1.png"
                  alt="cat_1"
                  style={{
                    objectFit: "cover",
                    padding: "10px",
                    width: "195px",
                    height: "293px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  float: "left",
                  width: "50%",
                }}
              >
                <Image
                  src="/images/cat_3.png"
                  alt="cat_3"
                  style={{
                    padding: "10px",
                    width: "238px",
                    height: "385px",
                  }}
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
