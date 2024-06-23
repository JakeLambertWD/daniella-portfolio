import { Flex, Group } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

function Motto() {
  return (
    <Flex
      direction="column"
      justify="center"
      gap="xs"
      p="lg"
      bg="#E5E5E5"
      h={{ base: 350 }}
      w={{ base: 450 }}
      pos="absolute"
      right={{ base: "10%", lg: "13%", xxl: "22%" }}
      top={{ base: "50%", lg: "33%" }}
      visibleFrom="md"
      style={{ border: "10px #fff8ff solid", zIndex: 20 }}
    >
      <motion.p
        initial={{ opacity: 0, translateX: 100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "40px",
          textTransform: "uppercase",
          color: "#6b6b6b",
          fontWeight: 500,
          letterSpacing: 0,
          marginBottom: "1px",
          marginTop: "30px",
        }}
      >
        Unveiling Your Unique Beauty,
        <br /> <span style={{ color: "#212121" }}>with Every Stroke</span>
      </motion.p>

      <Link
        href="/booking"
        style={{ textDecoration: "none", color: "#212121" }}
      >
        <Group>
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

export default Motto;
