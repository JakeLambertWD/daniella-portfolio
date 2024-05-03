"use client";

import { Box, Button, Flex, Group, Stack, Text, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Bodoni_Moda } from "next/font/google";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["200"] });
const bodoniModa = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

function ContactMe() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length < 2 ? "Name must have at least 2 letters" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value.length < 10 ? "Message must have at least 10 letters" : null),
    },
  });

  // TODO: Add footer from this site https://www.wix.com/website-template/view/html/2104?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fbeauty-and-hair%2Fmakeup-and-cosmetics&tpClick=view_button&esi=becf00d1-4ad5-4e97-b9a7-ac644bd0bf91

  return (
    <Stack align="center" gap="xs" my="150px" className={sora.className}>
      <Text className={bodoniModa.className} fz="130px" c="rgba(216, 182, 182)" mb="-30px">
        Touch Base
      </Text>
      <Text className={sora.className} fz="lg" mb={-10}>
        Be in touch to book a free makeup consultation!
      </Text>

      <Group w={1000}>
        <Stack w="50%">
          <Text>EMAIL | daniellagarson@makeup.com</Text>
          <Text>TELEPHONE | 07792703081</Text>
          <Text>ADDRESS | Hamstead, London</Text>
        </Stack>

        <form style={{ width: "45%" }} onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack mx="auto" pt="50px">
            <Flex justify="space-between" w="100%">
              <TextInput
                withAsterisk
                placeholder="Full Name"
                key={form.key("name")}
                {...form.getInputProps("name")}
                w="48%"
              />
              <TextInput
                withAsterisk
                placeholder="Email"
                key={form.key("email")}
                {...form.getInputProps("email")}
                w="48%"
              />
            </Flex>
            <Textarea placeholder="Message" key={form.key("message")} {...form.getInputProps("message")} />

            <Group>
              <Button type="submit" color="rgba(216, 182, 182)">
                Submit
              </Button>
            </Group>
          </Stack>
        </form>
      </Group>
    </Stack>
  );
}

export default ContactMe;
