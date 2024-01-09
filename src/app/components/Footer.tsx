import React from "react";
import {
	FaYoutube,
	FaWhatsapp,
	FaInstagram,
	FaTiktok,
	FaFacebookF,
	FaSpotify,
} from "react-icons/fa";

import colors from "tailwindcss/colors";

export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<hr className="w-full border-[#da9700]" />

			<div
				className="flex flex-col justify-center items-center py-4"
				style={{
					background:
						"linear-gradient(0deg, rgba(20, 12, 15, 0.65) 50%, rgba(43, 30, 0, 0.65) 100%)",
				}}
			>
				<ul className="flex flex-row mb-2">
					<li className="w-10 h-10 rounded-full flex justify-center items-center bg-zinc-800 hover:bg-red-600 transition-all mr-2.5">
						<a
							className="w-10 h-10 rounded-full flex justify-center items-center"
							href="https://www.youtube.com/@fsjpii"
							target="_blank"
						>
							<FaYoutube size={20} fill={colors.zinc[50]} stroke="" />
						</a>
					</li>
					<li className="w-10 h-10 rounded-full flex justify-center items-center bg-zinc-800 hover:bg-lime-600 transition-all mr-2.5">
						<a
							className="w-10 h-10 rounded-full flex justify-center items-center"
							href="https://wa.me/message/IBK4AYSHR4LHM1"
							target="_blank"
						>
							<FaWhatsapp size={20} fill={colors.zinc[50]} stroke="" />
						</a>
					</li>
					<li className="w-10 h-10 rounded-full flex justify-center items-center bg-zinc-800 hover:bg-pink-600 transition-all mr-2.5">
						<a
							className="w-10 h-10 rounded-full flex justify-center items-center"
							href="https://www.instagram.com/fsjpii/"
							target="_blank"
						>
							<FaInstagram size={20} fill={colors.zinc[50]} stroke="" />
						</a>
					</li>
					<li className="w-10 h-10 rounded-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-600 transition-all mr-2.5">
						<a
							className="w-10 h-10 rounded-full flex justify-center items-center"
							href="https://www.tiktok.com/@fsjpiioficial"
							target="_blank"
						>
							<FaTiktok size={20} fill={colors.zinc[50]} stroke="" />
						</a>
					</li>
					<li className="w-10 h-10 rounded-full flex justify-center items-center bg-zinc-800 hover:bg-blue-600 transition-all mr-2.5">
						<a
							className="w-10 h-10 rounded-full flex justify-center items-center"
							href="https://www.facebook.com/FraternidadeSaoJoaoPauloII/"
							target="_blank"
						>
							<FaFacebookF size={20} fill={colors.zinc[50]} stroke="" />
						</a>
					</li>
					<li className="w-10 h-10 rounded-full flex justify-center items-center bg-zinc-800 hover:bg-green-600 transition-all">
						<a
							className="w-10 h-10 rounded-full flex justify-center items-center"
							href="https://open.spotify.com/artist/3P2GN1O0yI6n84aDFOcvVt"
							target="_blank"
						>
							<FaSpotify size={20} fill={colors.zinc[50]} stroke="" />
						</a>
					</li>
				</ul>

				<p>ASSOCIAÇÃO FRATERNIDADE SÃO JOÃO PAULO II © {year}</p>
				<p>CNPJ 21.947.519/0001-51</p>
				<p>AV. MASCOTE, 1135</p>
			</div>
		</footer>
	);
}
