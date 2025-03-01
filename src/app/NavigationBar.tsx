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
  return <></>;
}

export default NavigationBar;
