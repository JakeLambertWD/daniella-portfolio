"use client";

import { Center, Flex, Stack, Text, useMantineTheme } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

function Footer() {
  const theme = useMantineTheme();

  return (
    <Center bg={theme.colors.persianPink[0]} c="white" pt="40px" pb="60px">
      <Stack>
        <Flex justify="center" gap="xs">
          <IconBrandInstagram size={30} strokeWidth={1.5} />
          <IconBrandFacebook size={30} strokeWidth={1.5} />
          <IconBrandInstagram size={30} strokeWidth={1.5} />
        </Flex>
        <Text>© 2024 by Jake Lambert. Proudly created with Mantine</Text>
      </Stack>
    </Center>
  );
}

export default Footer;
