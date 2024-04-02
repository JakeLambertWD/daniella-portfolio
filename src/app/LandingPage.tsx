import { Center, Flex, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";

function LandingPage() {
  return (
    <div>
      <Flex w={{ base: "100%", md: "900px" }} h={"calc(100vh - 92.8px)"} bg="#C8E8E6" style={{ float: "right" }}></Flex>

      <Center
        bg="white"
        h={{ base: 260, xs: 455, sm: 520, lg: 650 }}
        w={{ base: 360, xs: 640, sm: 720, lg: 900 }}
        pos="absolute"
        left={{ base: 0, xl: "10%" }}
        top={{ base: 0, xs: "10%", md: "20%", lg: "15%" }}
        style={{ border: "10px white solid" }}
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

      <Flex
        direction="column"
        justify="center"
        gap="xl"
        p="lg"
        bg="#E5E5E5"
        h={{ base: 450 }}
        w={{ base: 450 }}
        pos="absolute"
        right={{ base: "5%", xl: "20%" }}
        top={{ base: "50%", md: "25%" }}
        visibleFrom="sm"
        style={{ border: "10px white solid" }}
      >
        <Text fz="40px" tt="uppercase" ta="center" c="#6b6b6b" fw={500} style={{ letterSpacing: 0 }}>
          Empowering Beauty, <span style={{ color: "#212121" }}>Capturing Dreams</span>
        </Text>

        <Link href="/booking" style={{ textDecoration: "none", color: "#212121" }}>
          <Group ml="md">
            <Text>Book a slot today</Text>
            <IconArrowNarrowRight size={20} />
          </Group>
        </Link>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align="center"
        hiddenFrom="sm"
        pos="absolute"
        bottom={{ base: "40%", xs: "20%" }}
        w="90%"
      >
        <Text
          fz={{ base: "30px", sm: "40px" }}
          tt="uppercase"
          c="#6b6b6b"
          fw={500}
          mb="lg"
          style={{ letterSpacing: 0 }}
        >
          Empowering Beauty,{" "}
          <span style={{ color: "#212121" }}>
            <br />
            Capturing Dreams
          </span>
        </Text>

        <Link href="/booking" style={{ textDecoration: "none", color: "#212121" }}>
          <Group>
            <Text>Book a slot today</Text>
            <IconArrowNarrowRight size={20} />
          </Group>
        </Link>
      </Flex>
    </div>
  );
}

export default LandingPage;
