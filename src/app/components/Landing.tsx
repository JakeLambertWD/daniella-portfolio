"use client";

import { Box, Center, Flex, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import Motto from "./Motto";
import MottoSmall from "./MottoSmall";

function Landing(props: any) {
  const theme = useMantineTheme();

  return (
    <Box
      id="landingPageId"
      pos="relative"
      ref={props.landingPageRef}
      h={`calc(100vh - 120.5px)`}
    >
      <Flex
        h={"100%"}
        w={{ base: "100%", lg: "700px", xxl: "900px" }}
        bg={theme.colors.persianPink[0]}
        pos="absolute"
        right={0}
      ></Flex>

      <Center
        bg="white"
        pos="absolute"
        h={{ base: 260, xs: 320, sm: 450, lg: 500 }}
        w={{ base: 360, xs: 440, sm: 620, lg: 700 }}
        left={{ base: 0, lg: "2%", xl: "10%", xxl: "15%" }}
        top={{ base: 0, md: "15%" }}
        style={{ border: "10px #fff8ff solid" }}
      >
        <Image
          src="/LandingPic.webp"
          sizes="900px"
          fill
          style={{
            objectFit: "contain",
          }}
          alt="Picture of the author"
        />
      </Center>
      <Motto />
      <MottoSmall />
    </Box>
  );
}

export default Landing;
