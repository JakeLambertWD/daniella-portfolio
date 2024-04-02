import { navigationLinks } from "@/utils/constants";
import { Burger, Center, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

function DropdownMenu() {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  return (
    <Menu shadow="md" offset={16} transitionProps={{ transition: "rotate-right", duration: 150 }}>
      <Menu.Target>
        <Burger opened={opened} onClick={toggle} color="#555" hiddenFrom="sm" aria-label="Toggle navigation" />
      </Menu.Target>

      <Menu.Dropdown hiddenFrom="sm" h={"calc(100vh - 92.8px)"} w="100%" pt="xl">
        {navigationLinks.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => toggle()} style={{ textDecoration: "none", color: "black" }}>
            <Menu.Item c={pathname === href ? "red" : ""} ta="center" py="md">
              {label}
            </Menu.Item>
          </Link>
        ))}

        <Center w="100vw" mt="xl">
          <IconBrandInstagram size={24} />
          <IconBrandFacebook size={24} />
        </Center>
      </Menu.Dropdown>
    </Menu>
  );
}

export default DropdownMenu;
