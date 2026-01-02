import React from "react";
import { Button } from "@/components/ui/button";
import AboutUs from "@/components/aboutus";
import RightArrow from "@/components/icons/RightArrow";
import { H1, H2, H3, H4, H5, H6, H7, B1, B2, B3, B4, B5 } from "@/components/elements/typography";
import TimelineSection from "@/components/timeline/TimelineSection";
import Hero from "../components/hero"

const Page = () => {
  return (
    <div className="">
      <Hero></Hero>
      <AboutUs />
      <img src="public/testfoto.jpg" alt="Test Foto" className="w-80 h-auto" />
      <TimelineSection />

      <H1>HUMPUBIT</H1>
      <H2>HUMPUBIT</H2>
      <H3>HUMPUBIT</H3>
      <H4>HUMPUBIT</H4>
      <H5>HUMPUBIT</H5>
      <H6>HUMPUBIT</H6>
      <H7>HUMPUBIT</H7>
      <B1>HUMPUBIT</B1>
      <B2>HUMPUBIT</B2>
      <B3>HUMPUBIT</B3>
      <B4>HUMPUBIT</B4>
      <B5>HUMPUBIT</B5>
      <Button className="text-md">
        <B3>Click Me</B3> <RightArrow />
      </Button>
    </div>
  );
};

export default Page;
