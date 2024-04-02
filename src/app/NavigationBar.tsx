"use client";

import { Center, Flex, NavLink, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/utils/constants";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";

function NavigationBar() {
  const pathname = usePathname();

  return (
    <Center py="md">
      <Flex w={1250} justify="space-between">
        <Text>
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            Logo
          </Link>
        </Text>

        <Flex visibleFrom="sm">
          {navigationLinks.map((link, linkIndex) => (
            <NavLink
              key={linkIndex}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
              variant="subtle"
              w="auto"
              px="xl"
              tt="uppercase"
              c={pathname === link.href ? "#2A9891" : "black"}
              style={{ letterSpacing: "3px" }}
            />
          ))}
        </Flex>

        <DropdownMenu />
      </Flex>
    </Center>
  );
}

export default NavigationBar;
