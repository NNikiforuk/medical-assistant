"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselWrapper.scss";

const responsive = {
	mobile320px: {
		breakpoint: { max: 767, min: 320 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 319, min: 280 },
		items: 1,
	},
};

const CarouselWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Carousel
			itemClass="carousel__item"
			className="carousel"
			responsive={responsive}
		>
			{children}
		</Carousel>
	);
};

export default CarouselWrapper;
