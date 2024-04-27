"use client";

import { Image, Stack } from "@mantine/core";
import Heading from "../components/Heading";

function page() {
  // TODO: import images from instagram??
  // TODO: decrease padding between images on small screens
  // TODO: add hover effect to images
  // TODO: add modal to images
  // https://www.w3schools.com/howto/howto_css_image_overlay.asp
  // TODO: add lazy loading to images
  // TODO: add infinite scroll to images
  // TODO: reduce column count on small screens
  // TODO: Split gallery into a grid with sub sections for each category

  return (
    <Stack align="center" mb={20} bg="#7cafc4">
      <Heading title="PORTFOLIO" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "auto",
          height: "2000px",
          borderTop: "8px solid #fff8ff",
          borderBottom: "8px solid #fff8ff",
          padding: "0 4px 8px 4px",
          maxWidth: "1200px",
          background: "#fff8ff",
          marginBottom: "70px",
          marginRight: "20px",
          marginLeft: "20px",
          scrollbarWidth: "none",
        }}
      >
        <div style={{ flex: "33.3%", maxWidth: "33.3%", padding: "0 4px" }}>
          <Image src="/pic15.jpg" alt="alt" style={{ width: "100%", verticalAlign: "middle" }} />
          <Image src="/pic1.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic3.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic2.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic4.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic20.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic13.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
        </div>

        <div style={{ flex: "33.3%", maxWidth: "33.3%", padding: "0 4px" }}>
          <Image src="/pic5.jpg" alt="alt" style={{ width: "100%", verticalAlign: "middle" }} />
          <Image src="/pic6.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic7.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic8.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic19.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic14.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic16.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
        </div>

        <div style={{ flex: "33.3%", maxWidth: "33.3%", padding: "0 4px" }}>
          <Image src="/pic10.jpg" alt="alt" style={{ width: "100%", verticalAlign: "middle" }} />
          <Image src="/pic9.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic11.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic12.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic18.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic17.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
          <Image src="/pic21.jpg" alt="alt" style={{ width: "100%", marginTop: "8px", verticalAlign: "middle" }} />
        </div>

        <div style={{ flex: "25%", maxWidth: "25%", padding: "0 4px" }}></div>
      </div>
    </Stack>
  );
}

export default page;
