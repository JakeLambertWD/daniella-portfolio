"use client";

import { Box, Center, Flex, Group, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Motto from "./motto";
import MottoSmall from "./MottoSmall";

function Landing(props: any) {
  const theme = useMantineTheme();

  return (
    <Box id="landingPageId" ref={props.landingPageRef} h="817px">
      <Flex
        w={{ base: "100%", lg: "700px", xxl: "900px" }}
        h={"817px"}
        bg={theme.colors.persianPink[0]}
        style={{ float: "right" }}
      ></Flex>

      <Center
        bg="white"
        h={{ base: 260, xs: 350, sm: 450, lg: 650 }}
        w={{ base: 360, xs: 480, sm: 620, lg: 900 }}
        pos="absolute"
        left={{ base: 0, lg: "2%", xl: "5%", xxl: "15%" }}
        top={{ base: 0, lg: "20%" }}
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
