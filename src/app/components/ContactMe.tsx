"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { Bodoni_Moda } from "next/font/google";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["200"] });
const bodoniModa = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

function ContactMe(props: any) {
  const theme = useMantineTheme();
  const isGreaterThanXS = useMediaQuery("(min-width: 480px)");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length < 10 ? "Message must have at least 10 letters" : null,
    },
  });

  // TODO: Add footer from this site https://www.wix.com/website-template/view/html/2104?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fbeauty-and-hair%2Fmakeup-and-cosmetics&tpClick=view_button&esi=becf00d1-4ad5-4e97-b9a7-ac644bd0bf91

  return (
    <Stack
      id="contactMeId"
      ref={props.contactMeRef}
      align="center"
      gap="xs"
      my={{ base: 60, xs: 150 }}
      className={sora.className}
    >
      <Text
        className={bodoniModa.className}
        fz={{ base: "60px", xs: "90px", sm: "130px" }}
        c={theme.colors.persianPink[0]}
        mb={{ xs: "-30px" }}
      >
        Touch Base
      </Text>
      <Text
        className={sora.className}
        fz="lg"
        ta="center"
        mb={{ base: 20, xs: -10 }}
      >
        Be in touch to book a free makeup consultation!
      </Text>

      <Flex maw={1000} direction={{ base: "column", xs: "row" }}>
        <Stack w={{ xs: "50%" }} justify="center">
          <Text>EMAIL | daniellagarson@makeup.com</Text>
          <Text>TELEPHONE | 07792703081</Text>
          <Text>ADDRESS | Hamstead, London</Text>
        </Stack>

        <form
          style={{ width: isGreaterThanXS ? "45%" : "100%" }}
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <Stack mx="auto" pt="50px">
            <Flex
              justify="space-between"
              w="100%"
              direction={{ base: "column", md: "row" }}
              gap="md"
            >
              <TextInput
                withAsterisk
                placeholder="Full Name"
                key={form.key("name")}
                {...form.getInputProps("name")}
                w={{ md: "48%" }}
              />
              <TextInput
                withAsterisk
                placeholder="Email"
                key={form.key("email")}
                {...form.getInputProps("email")}
                w={{ md: "48%" }}
              />
            </Flex>
            <Textarea
              placeholder="Message"
              resize="vertical"
              key={form.key("message")}
              {...form.getInputProps("message")}
            />

            <Group>
              <Button type="submit" color={theme.colors.persianPink[0]}>
                Submit
              </Button>
            </Group>
          </Stack>
        </form>
      </Flex>
    </Stack>
  );
}

export default ContactMe;
