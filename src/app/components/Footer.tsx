import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { socialLinks } from "@/utils/constants";
import classes from "./Footer.module.css";

function Footer() {
  const socials = [
    { href: socialLinks.instagram, label: "Instagram", Icon: IconBrandInstagram },
    { href: socialLinks.facebook, label: "Facebook", Icon: IconBrandFacebook },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <span className={classes.name}>Daniella Garson</span>
        {socials.length > 0 && (
          <div className={classes.socials}>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={classes.social}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} stroke={1.5} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
        <span>© {new Date().getFullYear()} Daniella Garson Makeup</span>
      </div>
    </footer>
  );
}

export default Footer;
