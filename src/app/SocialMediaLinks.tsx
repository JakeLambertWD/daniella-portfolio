import { Stack } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

// TODO: Think about where to put this on small screens
function SocialMediaLinks() {
  return (
    <Stack
      pos="fixed"
      w="fit-content"
      right={20}
      top="50%"
      align="center"
      gap="lg"
      justify="center"
      py="md"
      px="md"
      bg="white"
    >
      {/* TODO: Add links to social media */}
      <IconBrandInstagram size={24} />
      <IconBrandFacebook size={24} />
    </Stack>
  );
}

export default SocialMediaLinks;
