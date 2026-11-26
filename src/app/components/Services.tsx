import Image, { StaticImageData } from "next/image";
import { contactSectionId } from "@/utils/constants";
import bridalPhoto from "../../../public/pic12.jpg";
import occasionPhoto from "../../../public/pic8.jpg";
import naturalPhoto from "../../../public/pic13.jpg";
import shared from "./shared.module.css";
import classes from "./Services.module.css";

type Service = {
  name: string;
  description: string;
  includes: string[];
  /** Starting price in pounds. Leave as null to show "Price on enquiry". */
  priceFrom: number | null;
  image: StaticImageData;
  imageAlt: string;
};

// TODO: Confirm the "includes" lists and prices with Daniella
export const services: Service[] = [
  {
    name: "Bridal",
    description:
      "A relaxed trial to perfect your look, then long-wear makeup on the day that lasts through every photo, tear and hug.",
    includes: [
      "Trial session at home or in studio",
      "Lashes and touch-up kit included",
      "Early starts and travel available",
    ],
    priceFrom: null,
    image: bridalPhoto,
    imageAlt: "Bride in a full gown on a sweeping staircase",
  },
  {
    name: "Occasion glam",
    description:
      "Evening looks, parties, bar and bat mitzvahs, and bridal party makeup — polished glam that still looks like you.",
    includes: [
      "Full face with lashes",
      "Group bookings for the whole party",
      "On-location service",
    ],
    priceFrom: null,
    image: occasionPhoto,
    imageAlt: "Client with defined brows, rose lip and soft waves",
  },
  {
    name: "Skin prep & natural glow",
    description:
      "Skin-first makeup for photoshoots, meetings and everyday occasions. Fresh, luminous and barely-there.",
    includes: [
      "Hydrating skin preparation",
      "Light, buildable coverage",
      "Product tips to recreate at home",
    ],
    priceFrom: null,
    image: naturalPhoto,
    imageAlt: "Smiling client with fresh, glowing natural makeup",
  },
];

function Services() {
  return (
    <section id="servicesId" className={`${shared.fullBleed} ${classes.section}`}>
      <div className={`${shared.container} ${classes.inner}`}>
        <div className={classes.intro}>
          <div className={classes.introHeading}>
            <p className={shared.eyebrow}>Services</p>
            <h2 className={shared.sectionTitle}>How I can help</h2>
          </div>
          <p className={classes.introText}>
            I travel to you across London. Every booking includes a skin-prep
            consultation and a touch-up kit for the day.
          </p>
        </div>

        {services.map((service, i) => (
          <article key={service.name} className={classes.service}>
            <Image
              src={service.image}
              alt={service.imageAlt}
              className={classes.photo}
              sizes="(min-width: 1024px) 600px, 100vw"
              placeholder="blur"
            />
            <div className={classes.details}>
              <p className={classes.number}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={classes.name}>{service.name}</h3>
              <p className={classes.description}>{service.description}</p>
              <ul className={classes.includes}>
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={classes.footer}>
                <p className={classes.price}>
                  {service.priceFrom === null ? (
                    "Price on enquiry"
                  ) : (
                    <>
                      From{" "}
                      <span className={classes.priceValue}>
                        £{service.priceFrom}
                      </span>
                    </>
                  )}
                </p>
                <a
                  href={`#${contactSectionId}`}
                  className={shared.buttonOutline}
                  aria-label={`Enquire about ${service.name}`}
                >
                  Enquire
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
