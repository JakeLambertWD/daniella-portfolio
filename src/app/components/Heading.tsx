import { Text } from "@mantine/core";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["400"] });

function Heading({ title }: { title: string }) {
  return (
    <Text
      fz={{ base: "24px", md: "36px" }}
      mb={{ base: "lg", md: "xl" }}
      mt={{ base: "30px", md: "50px" }}
      c="white"
      className={sora.className}
      style={{ letterSpacing: "3px" }}
    >
      {title}
    </Text>
  );
}
export default Heading;
