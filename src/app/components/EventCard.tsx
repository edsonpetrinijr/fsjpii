import React from "react";

interface EventProps {
	imageUrl: string;
	location: string;
	date: string;
	title: string;
	description: string;
}

const EventCard: React.FC<EventProps> = ({
	imageUrl,
	location,
	date,
	title,
	description,
}) => {
	return (
		<li className="bg-zinc-900 rounded-lg shadow border border-yellow-600 flex-col justify-start items-start inline-flex transition-transform duration-500 hover:scale-[101%] hover:cursor-pointer">
			<img
				className="w-full h-64 object-cover rounded-lg"
				src={imageUrl}
				alt="Imagem do Evento"
			/>
			<div className="px-6 md:px-8 py-4 md:py-6 flex-col justify-start items-start gap-1.5 flex">
				<span className="text-[#89888B] text-sm font-normal">
					{location} • {date}
				</span>
				<h3 className="text-2xl font-normal">{title}</h3>
				<p className="hidden md:block text-base font-normal">{description}</p>
			</div>
		</li>
	);
};

export default EventCard;
