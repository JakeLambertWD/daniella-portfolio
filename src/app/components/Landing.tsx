import { Fragment } from "react";
import Image from "next/image";
import { contactSectionId } from "@/utils/constants";
import heroPhoto from "../../../public/pic10.jpg";
import shared from "./shared.module.css";
import classes from "./Landing.module.css";

const categories = ["Bridal", "Bridal party", "Occasion glam", "Skin prep"];

function Landing() {
  return (
    <>
      <section id="landingPageId" className={`${shared.container} ${classes.hero}`}>
        <div className={classes.copy}>
          <p className={shared.eyebrow}>Bridal &amp; occasion makeup · London</p>
          <h1 className={classes.title}>
            Unveiling your <em>unique</em> beauty, with every stroke.
          </h1>
          <p className={classes.lede}>
            Calm, considered makeup that looks like you on your best day — and
            lasts from the first look to the last dance.
          </p>
          <div className={classes.actions}>
            <a href={`#${contactSectionId}`} className={shared.buttonPrimary}>
              Book a consultation
            </a>
            <a href="#portfolioId" className={shared.textLink}>
              View portfolio
            </a>
          </div>
        </div>

        <div className={classes.media}>
          <Image
            src={heroPhoto}
            alt="Bride with a pearl tiara and soft glam makeup, on a staircase"
            className={classes.photo}
            sizes="(min-width: 1024px) 600px, 100vw"
            placeholder="blur"
            priority
          />
        </div>
      </section>

      <div className={classes.strip}>
        <div className={classes.stripInner}>
          {categories.map((category, i) => (
            <Fragment key={category}>
              {i > 0 && (
                <span className={classes.star} aria-hidden="true">
                  ✦
                </span>
              )}
              <span>{category}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
