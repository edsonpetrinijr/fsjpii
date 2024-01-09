import Header from "./components/Header";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Header />

			<main className="my-10">
				<div className="mb-6 relative overflow-hidden shadow-lg">
					<div className="flex w-max transition-transform duration-700">
						<img
							className="w-screen h-64 md:h-72 object-cover object-top opacity-40"
							src="./banner.webp"
							alt=""
						/>
					</div>

					<div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
							"Totus Tuus Iesu Per Mariam"
						</h1>
						<p className="text-base md:text-lg lg:text-xl font-normal mt-2">
							O desejo de Ser todo de Jesus por meio de Maria e em todas as
							coisas nos confiarmos a Mãe
						</p>

						<div className="mt-8">
							<a
								className="px-8 py-2 border-2 border-white rounded-full mx-2"
								href="https://api.whatsapp.com/message/FBTVBRM6G4DOF1?autoload=1&app_absent=0"
								target="_blank"
							>
								Vocacional
							</a>
							<a
								className="px-8 py-2 border-2 border-white rounded-full mx-2"
								href="https://wa.me/message/W2X5FCWBT2OOJ1"
								target="_blank"
							>
								Benfeitoria
							</a>
						</div>
					</div>

					<div className="absolute w-full h-full bg-zinc-900 bg-opacity-80"></div>
				</div>

				<div>
					<h2 className="text-center text-3xl">Eventos da Fraternidade</h2>
					<ul className="my-6 grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 px-12 2xl:px-72">
						<EventCard
							imageUrl="/acampamentoFraternidade.webp"
							location="Canção Nova"
							date="1, 2 e 3 de março de 2024"
							title="Acampamento Fraternidade"
							description="O solo sagrado onde Padre Ailton F. Cardoso viveu experiências com Deus será palco do primeiro Acampamento da Fraternidade, buscando espalhar seu carisma por todo o Brasil. O evento visa transmitir a mensagem do patrono, promovendo a 'Civilização do Amor' entre o povo."
						/>
						<EventCard
							imageUrl="/novaForma.webp"
							location="Santuário Mãe dos Aflitos"
							date="10 de fevereiro de 2024"
							title="Retiro Nova Forma"
							description="Esse é o principal retiro do ano na Fraternidade São João Paulo II. Foi em um retiro de Carnaval que nosso fundador se converteu, por isso, o Retiro NOVA FORMA, que acontece no período do Carnaval, se tornou tão importante para nós e para o nosso Carisma."
						/>
					</ul>
				</div>

				<div className="mt-6 w-full px-40 py-8 bg-gradient-to-l from-fuchsia-600 to-amber-500 justify-center items-center gap-8 inline-flex">
					<div className="text-center text-xl font-normal leading-12">
						<span className="font-normal">Temos a missão de </span>
						<span className="font-bold">Santificar o Clero</span>
						<span className="font-normal">
							{" "}
							através de nosso testemunho e sermos solícitos as necessidades dos
							sacerdotes. Com um zelo cada dia maior{" "}
						</span>
						<span className="font-bold">Restaurar as Famílias</span>
						<span className="font-normal">
							{" "}
							e movidos por um espírito missionário{" "}
						</span>
						<span className="font-bold">Salvar a Juventude</span>
						<span className="font-normal">
							, à exemplo de nosso patrono João Paulo II.
						</span>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
