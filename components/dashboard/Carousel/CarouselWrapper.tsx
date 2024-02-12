"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselWrapper.scss";

const responsive = {
	desktop: {
		breakpoint: { max: 5000, min: 2000 },
		items: 12,
	},
	smallDesktop1024px: {
		breakpoint: { max: 1199, min: 1024 },
		items: 4,
	},
	tablet768px: {
		breakpoint: { max: 1023, min: 768 },
		items: 4,
	},
	mobile414px: {
		breakpoint: { max: 767, min: 375 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 374, min: 0 },
		items: 2,
	},
};

const CarouselWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Carousel itemClass="carousel__item" className="carousel" responsive={responsive}>
			{children}
		</Carousel>
	);
};

export default CarouselWrapper;
