import { Stack } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

// TODO: Think about where tro put this on small screens
function SocialMediaLinks() {
  return (
    <Stack pos="absolute" right={20} top="50%" align="center" gap="lg" justify="center" py="md" px="md" bg="white">
      <IconBrandInstagram size={24} />
      <IconBrandFacebook size={24} />
    </Stack>
  );
}

export default SocialMediaLinks;
