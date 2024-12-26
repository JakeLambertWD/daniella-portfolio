import { Center, Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import { Sora } from "next/font/google";
import { useMediaQuery } from "@mantine/hooks";

const sora = Sora({ subsets: ["latin"], weight: ["200"] });

function About(props: any) {
  const isGreaterThanSM = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      id="aboutId"
      ref={props.aboutRef}
      mt={20}
      h={`calc(100vh - 100.5px)`}
      direction={{ base: "column", sm: "row" }}
    >
      <Flex
        pos="relative"
        bg="#E5E5E5"
        h={{ base: 320, sm: "100%" }}
        w={{ base: "100%", md: "51%" }}
        visibleFrom="xs"
      >
        <Center
          pos="absolute"
          bg="white"
          h={{ xs: 320, sm: 450, md: 550 }}
          w={{ xs: 250, sm: 350, md: 420 }}
          left={{ base: "auto", md: "35%", lg: "45%", xl: "50%" }}
          top={{ base: "0%", sm: "9%" }}
          style={{ border: "10px #fff8ff solid" }}
        >
          <Image
            src="/dan1.jpg"
            fill
            style={{
              objectFit: "contain",
            }}
            alt="Picture of the author"
          />
        </Center>
      </Flex>
      <Stack
        className={sora.className}
        h={{ base: "100%", xs: "50%", sm: "100%" }}
        w={{ base: "100%", md: "43%" }}
        justify={isGreaterThanSM ? "center" : "flex-start"}
        align="center"
        pl={{ base: 30, md: 95 }}
        pr={{ base: 30, xs: 0 }}
        mt={{ base: 0, sm: -60, md: -30 }}
        pt={{ base: 30, xs: 0 }}
        bg={{ base: "#E5E5E5", xs: "white" }}
      >
        <Text w="100%" fz={25} fw={800}>
          My {isGreaterThanSM && <br />} Story
        </Text>
        <Text fz="sm">
          As a passionate makeup artist, I am dedicated to enhancing natural
          beauty and empowering individuals through artistry. With years of
          experience in the beauty industry, Ive honed my skills to create
          stunning looks tailored to each clients unique features and
          personality. My journey began with a deep fascination for color
          theory, skincare, and the transformative power of makeup.
        </Text>
        <Text fz="sm">
          My approach to makeup is not just about creating flawless faces; its
          about building confidence and self-expression. Whether its a glamorous
          evening look, a subtle daytime glow, or avant-garde editorial style, I
          thrive on bringing visions to life and exceeding expectations. With a
          keen eye for detail and a commitment to staying current with the
          latest trends and techniques, I am dedicated to providing an
          exceptional experience for every client, ensuring they walk away
          feeling beautiful, inside and out.
        </Text>
      </Stack>
    </Flex>
  );
}

export default About;
