import { Stack } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

function SocialMediaLinks() {
  return (
    <Stack pos="absolute" right={20} top="50%" align="center" gap="lg" justify="center" py="md" px="md" bg="white">
      <IconBrandInstagram size={24} />
      <IconBrandFacebook size={24} />
    </Stack>
  );
}

export default SocialMediaLinks;
