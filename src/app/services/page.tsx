"use client";

import { Card, Flex, Group, Image, ScrollArea, Text, Title } from "@mantine/core";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

function page() {
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
    <Flex h={"calc(100vh - 92.8px)"} bg="#e76f51" pos="relative" justify="center" align="center">
      <Text
        fz={{ base: "32px", md: "54px" }}
        my={{ base: "sm", md: "xl" }}
        w="100%"
        ta="center"
        c="white"
        pos="absolute"
        top={3}
      >
        SERVICES
      </Text>

      {/* <Flex justify="center" align="center" gap="xl" w={500} bg="blue" style={{ overflowX: "auto" }}> */}

      <ScrollArea scrollbarSize={10} w="100%" px="lg">
        <Group justify="center" wrap="nowrap">
          {servicesData.map(({ id, title, description, image }) => (
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
      {/* </Flex> */}
    </Flex>
  );
}

export default page;
