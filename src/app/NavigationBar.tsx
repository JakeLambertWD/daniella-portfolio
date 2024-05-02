"use client";

import { Center, Flex, NavLink, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/utils/constants";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";
import { WindSong } from "next/font/google";

const monsieurLaDoulaise = WindSong({ subsets: ["latin"], weight: ["400"] });

function NavigationBar() {
  const pathname = usePathname();
  // TODO: Make nav bar items link to component IDS
  return (
    <Center py="lg" pos="sticky" top={0} bg="white" w="100%" style={{ zIndex: 21 }}>
      <Flex w={1250} justify="space-between">
        <Text>
          {/* TODO: Upgrade logo */}
          <Link
            href="/"
            style={{ textDecoration: "none", color: "black", fontSize: "30px" }}
            className={monsieurLaDoulaise.className}
          >
            Daniella Garson
          </Link>
        </Text>

        <Flex visibleFrom="sm" gap="xl">
          {/* TODO: make active and hover colors correct */}
          {navigationLinks.map((link, linkIndex) => (
            <NavLink
              key={linkIndex}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
              variant="subtle"
              w="auto"
              tt="uppercase"
              c={pathname === link.href ? "#7cafc4" : "black"}
              style={{ letterSpacing: "3px", borderBottom: pathname === link.href ? "3px solid #7cafc4" : "none" }}
            />
          ))}
        </Flex>

        <DropdownMenu />
      </Flex>
    </Center>
  );
}

export default NavigationBar;
