"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, useMantineTheme, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Roboto_Condensed } from "next/font/google";

const montserrat = Roboto_Condensed({ subsets: ["greek"], weight: ["400"] });

function MantineModal() {
  const [opened, { open, close }] = useDisclosure(true);
  const theme = useMantineTheme();
  const { width, height } = useWindowSize();

  return (
    <Modal
      opened={opened}
      onClose={close}
      radius={0}
      transitionProps={{ transition: "fade", duration: 200 }}
      overlayProps={{
        backgroundOpacity: 0.9,
        blur: 9,
      }}
      bg="white"
    >
      <Confetti width={width} height={height} />
      <Stack align="center" className={montserrat.className}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 0.3 }}
        >
          <Image src="/kiss.jpg" style={{ borderRadius: "50%" }} width={250} height={250} alt="Picture of the author" />
        </motion.div>

        <Stack gap={0} align="center" mt="xl" mb="sm">
          <Text fz="26px" tt="uppercase" fw={400} c={"black"} style={{ letterSpacing: 0 }}>
            Happy Birthday!
          </Text>
          <Text fz="26px" tt="uppercase" fw={500} c={"black"} style={{ letterSpacing: 0 }}>
            to the
          </Text>
          <Text fz="26px" tt="uppercase" fw={500} c={"black"} style={{ letterSpacing: 0 }}>
            hottest girl on the planet
          </Text>
          <Text fz="20px" mt="xl">
            I love you Daniella ❤️
          </Text>
        </Stack>

        <Button onClick={close} color={theme.colors.persianPink[0]} mt="xs" mb="lg">
          Enter your brand new website!
        </Button>
      </Stack>
    </Modal>
  );
}

export default MantineModal;
