"use client";

import { Card, Flex, Group, Image, ScrollArea, Text, Title, useMantineTheme } from "@mantine/core";
import Heading from "./Heading";
import { Bodoni_Moda } from "next/font/google";
import { motion } from "framer-motion";

const bodoniModa = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

function Services(props: any) {
  const theme = useMantineTheme();

  // TODO: Replace the images with my own
  const servicesData = [
    {
      id: 1,
      title: "Skin Care",
      description:
        "Service 1 description. This is a paragraph of text as a placeholder for the description of the service.",
      image: "/service1.webp",
    },
    {
      id: 2,
      title: "Makeup",
      description:
        "Service 2 description. This is a paragraph of text as a placeholder for the description of the service.",
      image: "/service2.webp",
    },
    {
      id: 3,
      title: "Weddings",
      description:
        "Service 3 description. This is a paragraph of text as a placeholder for the description of the service.",
      image: "/service3.webp",
    },
  ];

  return (
    <Flex
      id="servicesId"
      ref={props.servicesRef}
      h={"calc(100vh - 92.8px)"}
      direction="column"
      align="center"
      bg={theme.colors.persianPink[0]}
    >
      <Heading title="SERVICES" />

      <Flex justify="center" align="center" w="100%" mt="md" style={{ overflowX: "auto" }}>
        <ScrollArea scrollbarSize={10} w="100%" px="lg">
          <Group justify="center" wrap="nowrap" py="xs">
            {servicesData.map(({ id, title, description, image }, i) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, translateX: 200 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.4 }}
              >
                <Card
                  className={bodoniModa.className}
                  shadow="xl"
                  padding="sm"
                  radius="xs"
                  withBorder={false}
                  h="600px"
                  w={350}
                  ta="center"
                >
                  <Flex mb={20}>
                    <Image src={image} height="100%" alt="Picture of the author" />
                  </Flex>
                  <Title order={2} className={bodoniModa.className} mb="md">
                    {title}
                  </Title>
                  <Text px="md">{description}</Text>
                </Card>
              </motion.div>
            ))}
          </Group>
        </ScrollArea>
      </Flex>
    </Flex>
  );
}

export default Services;
