"use client";

import { Card, Flex, Group, Image, ScrollArea, Text, Title } from "@mantine/core";
import { Bodoni_Moda } from "next/font/google";
import Heading from "./Heading";

const bodoniModa = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

function Services() {
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
    <Flex h={"calc(100vh - 92.8px)"} direction="column" align="center" bg="rgba(216, 182, 182)">
      <Heading title="SERVICES" />

      <Flex justify="center" align="center" w="100%" mt="md" style={{ overflowX: "auto" }}>
        <ScrollArea scrollbarSize={10} w="100%" px="lg">
          <Group justify="center" wrap="nowrap">
            {servicesData.map(({ id, title, description, image }) => (
              // TODO: Add shadow and hover animation to card
              <Card
                key={id}
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
            ))}
          </Group>
        </ScrollArea>
      </Flex>
    </Flex>
  );
}

export default Services;
