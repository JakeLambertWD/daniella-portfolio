"use client";

import { Center, Flex, Group, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

function Landing(props: any) {
  const theme = useMantineTheme();

  return (
    <div id="landingPageId" ref={props.landingPageRef} style={{ height: "calc(100vh - 92.8px)" }}>
      <Flex
        w={{ base: "100%", md: "900px" }}
        h={"calc(100vh - 105px)"}
        bg={theme.colors.persianPink[0]}
        style={{ float: "right" }}
      ></Flex>
      <Center
        bg="white"
        h={{ base: 260, xs: 455, sm: 520, lg: 650 }}
        w={{ base: 360, xs: 640, sm: 720, lg: 900 }}
        pos="absolute"
        left={{ base: 0, xl: "15%" }}
        top={{ base: 0, xs: "10%", md: "20%", lg: "20%" }}
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
      <Flex
        direction="column"
        justify="center"
        gap="xs"
        p="lg"
        bg="#E5E5E5"
        h={{ base: 350 }}
        w={{ base: 450 }}
        pos="absolute"
        right={{ base: "5%", xl: "22%" }}
        top={{ base: "50%", md: "33%" }}
        visibleFrom="sm"
        style={{ border: "10px #fff8ff solid", zIndex: 20 }}
      >
        <motion.p
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "40px",
            textTransform: "uppercase",
            color: "#6b6b6b",
            fontWeight: 500,
            letterSpacing: 0,
            marginBottom: "1px",
            marginTop: "30px",
          }}
        >
          Unveiling Your Unique Beauty,
          <br /> <span style={{ color: "#212121" }}>with Every Stroke</span>
        </motion.p>

        <Link href="/booking" style={{ textDecoration: "none", color: "#212121" }}>
          <Group>
            <motion.p
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              Book a slot today
            </motion.p>
            <motion.div
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              style={{ marginTop: 8 }}
            >
              <IconArrowNarrowRight size={20} />
            </motion.div>
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

export default Landing;
