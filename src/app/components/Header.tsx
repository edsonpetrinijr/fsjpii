import { Bona_Nova } from "next/font/google";

const bonaNova = Bona_Nova({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export default function Header() {
	return (
		<header>
			<div
				className="flex justify-center items-center gap-6 px-8 py-4"
				style={{
					background:
						"linear-gradient(180deg, rgba(20, 12, 15, 0.65) 50%, rgba(43, 30, 0, 0.65) 100%)",
				}}
			>
				<img src="/logo.png" alt="FSJPII Logo" className="w-14 h-full" />

				<h1 className="uppercase">
					<span
						className={`text-base md:text-lg ${bonaNova.className} leading-4`}
					>
						FRATERNIDADE
					</span>
					<br />
					<span
						className={`text-2xl md:text-3xl ${bonaNova.className} leading-8`}
					>
						SÃO JOÃO PAULO II
					</span>
				</h1>
			</div>

			<hr className="w-full border-[#da9700]" />
		</header>
	);
}
