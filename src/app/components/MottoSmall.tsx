import { Flex, Group } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

function MottoSmall() {
  return (
    <Flex
      pos="absolute"
      direction="column"
      hiddenFrom="md"
      w="90%"
      h={200}
      top={{ base: "40%", xs: "55%", sm: "65%" }}
      fz={30}
      pl={60}
      tt="uppercase"
      fw={500}
      mb={1}
      mt={30}
      lts={0}
      gap={0}
    >
      <motion.p
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          color: "#6b6b6b",
          margin: 0,
        }}
      >
        Unveiling Your Unique Beauty,
      </motion.p>
      <motion.p
        // TODO: save these props in a variable and reuse them
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ color: "#212121", margin: 0, marginTop: "-10px" }}
      >
        with Every Stroke
      </motion.p>

      <Link
        href="/booking"
        style={{ textDecoration: "none", color: "#212121" }}
      >
        <Group fz="sm">
          <motion.p
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            Book a slot today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            style={{ marginTop: 8 }}
          >
            <IconArrowNarrowRight size={20} />
          </motion.div>
        </Group>
      </Link>
    </Flex>
  );
}

export default MottoSmall;
