"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Center } from "@mantine/core";
import { Blockquote } from "@mantine/core";
import { IconBrush, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { Sora } from "next/font/google";
import classes from "./reviews.module.css";

const sora = Sora({ subsets: ["latin"], weight: ["300"] });

function Page() {
  const autoplay = useRef(Autoplay({ delay: 10000 }));
  const icon = <IconBrush />;
  const iconNext = <IconChevronRight strokeWidth={"0.5px"} style={{ width: "60px", height: "60px" }} />;
  const iconPrev = <IconChevronLeft strokeWidth={"0.5px"} style={{ width: "60px", height: "60px" }} />;

  // TODO: Get a better font
  const reviewsData = [
    {
      name: "Abigail Abrams",
      text: "She is Fantastic! As a professional makeup artist I have used her skills many times on various occasions. She does a fast and truly astonishing job! Will be working with her again for sure.",
    },
    {
      name: "Dalia Goldmann",
      text: "Thank you so so much for my beautiful makeup this weekend. We had a beautifully chilled out time with you getting ready and the end result was perfect!!! I have already recommended you xxx Our day was wonderful and you made us feel amazing !!! ❤️ big love Daniella xx",
    },
    {
      name: "Maya Abecassis",
      text: "Daniella was kind, understanding and relaxing. Throughout my trail and on the day she kept me calm and knew exactly what she was doing. I was over the moon with the results. The make up lasted all day and she gave me bits to touch up with throughout the day. ",
    },
  ];

  return (
    <Center w="100%">
      <Carousel
        classNames={{ control: classes.control }}
        // mih={400}
        w="80%"
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={iconNext}
        previousControlIcon={iconPrev}
      >
        {reviewsData.map((review, index) => (
          <Carousel.Slide key={index}>
            <Center>
              <Blockquote
                className={sora.className}
                maw={500}
                color="#c297b8"
                radius="md"
                iconSize={57}
                icon={icon}
                cite={`– ${review.name}`}
                mt="xl"
                ta="center"
                style={{ lineHeight: "1.7" }}
              >
                {review.text}
              </Blockquote>
            </Center>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Center>
  );
}
export default Page;
