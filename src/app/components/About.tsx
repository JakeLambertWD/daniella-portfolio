import Image from "next/image";
import portrait from "../../../public/daniella-portrait.jpg";
import shared from "./shared.module.css";
import classes from "./About.module.css";

// Set to a number (e.g. 8) to show the "years in the beauty industry" card
const yearsOfExperience: number | null = null;

function About() {
  return (
    <section id="aboutId" className={`${shared.container} ${classes.about}`}>
      <div className={classes.media}>
        <Image
          src={portrait}
          alt="Portrait of Daniella smiling, in a black blazer"
          className={classes.photo}
          sizes="(min-width: 480px) 440px, 100vw"
          placeholder="blur"
        />
        {yearsOfExperience !== null && (
          <div className={classes.stat}>
            <p className={classes.statValue}>{yearsOfExperience}+ years</p>
            <p className={classes.statLabel}>in the beauty industry</p>
          </div>
        )}
      </div>

      <div className={classes.copy}>
        <p className={shared.eyebrow}>My story</p>
        <h2 className={classes.title}>
          Makeup that builds confidence, not a mask.
        </h2>
        <p className={classes.body}>
          My journey began with a fascination for colour theory, skincare and
          the transformative power of makeup. Today I create looks tailored to
          each client&apos;s features and personality — whether that&apos;s a
          subtle daytime glow, a glamorous evening look or a bridal finish that
          photographs beautifully.
        </p>
        <p className={classes.body}>
          Every appointment is calm and unhurried, so you walk away feeling
          beautiful, inside and out.
        </p>
        <p className={classes.signature}>— Daniella</p>
      </div>
    </section>
  );
}

export default About;
