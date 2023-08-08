import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function HomeBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (<>
    <div className="w-full">
      <Slider {...settings} className="home-banner">
        <div className="">
          <div className="px-1">
            <Link href={"/"}>
              <Image src={"/banner1.png"} width={1204} height={300} className="w-full" unoptimized alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="px-1">
            <Link href={"/"}>
              <Image src={"/banner2.png"} width={1204} height={300} className="w-full" unoptimized alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="px-1">
            <Link href={"/"}>
              <Image src={"/banner3.png"} width={1204} height={300} className="w-full" unoptimized alt="" />
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  </>);
}