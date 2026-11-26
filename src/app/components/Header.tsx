"use client";

import { useEffect, useState } from "react";
import { Box, Burger, Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { contactSectionId, navigationLinks } from "@/utils/constants";
import classes from "./Header.module.css";

// Highlights the nav link for whichever section is currently in view
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Treat a section as active once it crosses the upper-middle of the viewport
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const observedIds = [...navigationLinks.map((l) => l.id), contactSectionId];

function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const active = useActiveSection(observedIds);
  const pathname = usePathname();

  // Sanity Studio has its own full-screen chrome
  if (pathname?.startsWith("/studio")) return null;

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <a href="#" className={classes.brand} onClick={close}>
          <span className={classes.monogram} aria-hidden="true">
            DG
          </span>
          <span className={classes.name}>Daniella Garson</span>
        </a>

        <Box component="nav" aria-label="Main" visibleFrom="md">
          <div className={classes.nav}>
            {navigationLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={classes.link}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            ))}
            <a href={`#${contactSectionId}`} className={classes.cta}>
              Book now
            </a>
          </div>
        </Box>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="md"
          size="sm"
          color="#2E2220"
          aria-label={opened ? "Close menu" : "Open menu"}
        />
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        size="100%"
        hiddenFrom="md"
        title={<span className={classes.name}>Daniella Garson</span>}
        styles={{
          content: { background: "#FAF6F3" },
          header: { background: "#FAF6F3", padding: "16px 20px" },
          body: { padding: "0 20px 32px" },
        }}
      >
        <nav aria-label="Main" className={classes.drawerNav}>
          {navigationLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={classes.drawerLink}
              aria-current={active === id ? "true" : undefined}
              onClick={close}
            >
              {label}
            </a>
          ))}
        </nav>
        <Group>
          <a
            href={`#${contactSectionId}`}
            className={classes.cta}
            onClick={close}
            style={{ width: "100%", padding: "18px" }}
          >
            Book a consultation
          </a>
        </Group>
      </Drawer>
    </header>
  );
}

export default Header;
