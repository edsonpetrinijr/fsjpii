import React from "react";

interface SpiritualityProps {
	imageUrl: string;
	title: string;
}

const SpiritualityCard: React.FC<SpiritualityProps> = ({ imageUrl, title }) => {
	return (
		<li className="relative bg-zinc-900 rounded-lg shadow border border-yellow-600 flex-col justify-start items-start inline-flex transition-transform duration-500 hover:scale-[101%]">
			<div className="absolute w-full h-full bg-black bg-opacity-60"></div>

			<img
				className="w-full h-52 md:h-60 object-cover object-center rounded-lg"
				src={imageUrl}
				alt=""
			/>

			<div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center">
				<h1 className="text-2xl md:text-3xl">{title}</h1>
			</div>
		</li>
	);
};

export default SpiritualityCard;
