import { Center, Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["200"] });

function About(props: any) {
  return (
    <Flex id="aboutId" ref={props.aboutRef} style={{ height: "calc(100vh - 150px)", marginTop: "20px" }}>
      <Flex bg="#E5E5E5" h="100%" w="50%" pos="relative">
        <Center
          bg="white"
          h={{ base: 300, lg: 550 }}
          w={{ base: 300, lg: 420 }}
          pos="absolute"
          left={"65%"}
          top={"15%"}
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
      <Stack className={sora.className} h="100%" w="28%" justify="center" align="center" pl={150}>
        <Text pt={100} w="100%" fz={25} fw={800}>
          My <br /> Story
        </Text>
        <Text fz="sm">
          As a passionate makeup artist, I am dedicated to enhancing natural beauty and empowering individuals through
          artistry. With years of experience in the beauty industry, Ive honed my skills to create stunning looks
          tailored to each clients unique features and personality. My journey began with a deep fascination for color
          theory, skincare, and the transformative power of makeup.
        </Text>
        <Text fz="sm">
          My approach to makeup is not just about creating flawless faces; its about building confidence and
          self-expression. Whether its a glamorous evening look, a subtle daytime glow, or avant-garde editorial style,
          I thrive on bringing visions to life and exceeding expectations. With a keen eye for detail and a commitment
          to staying current with the latest trends and techniques, I am dedicated to providing an exceptional
          experience for every client, ensuring they walk away feeling beautiful, inside and out.
        </Text>
      </Stack>
    </Flex>
  );
}

export default About;
