import Header from "./components/Header";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";
import SpiritualityCard from "./components/SpiritualityCard";

export default function Home() {
	return (
		<>
			<Header />

			<main className="my-6 md:my-10">
				<div className="mb-6 relative overflow-hidden shadow-lg">
					<img
						className="w-screen h-72 object-cover object-top opacity-40"
						src="/banner.webp"
						alt=""
					/>

					<div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
							&quot;Totus Tuus Iesu Per Mariam&quot;
						</h1>
						<p className="text-base md:text-lg lg:text-xl mt-2">
							O desejo de ser todo de Jesus por meio de Maria e em todas as
							coisas nos confiarmos a Mãe
						</p>

						<div className="mt-8">
							<a
								className="px-8 py-2 border-2 border-white rounded-full mx-2 text-base md:text-lg"
								href="https://api.whatsapp.com/message/FBTVBRM6G4DOF1?autoload=1&app_absent=0"
								target="_blank"
							>
								Vocacional
							</a>
							<a
								className="px-8 py-2 border-2 border-white rounded-full mx-2 text-base md:text-lg"
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
					<h2 className="text-center text-2xl md:text-3xl">
						Eventos da Fraternidade
					</h2>
					<ul className="my-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-8 2xl:px-40">
						<EventCard
							imageUrl="/eventos/acampamentoFraternidade.webp"
							location="Canção Nova"
							date="1, 2 e 3 de março de 2024"
							title="Acampamento Fraternidade"
							description="O solo sagrado onde Padre Ailton F. Cardoso viveu experiências com Deus será palco do primeiro Acampamento da Fraternidade, buscando espalhar seu carisma por todo o Brasil. O evento visa transmitir a mensagem do patrono, promovendo a 'Civilização do Amor' entre o povo."
						/>
						<EventCard
							imageUrl="/eventos/novaForma.webp"
							location="Santuário Mãe dos Aflitos"
							date="10 de fevereiro de 2024"
							title="Retiro Nova Forma"
							description="Esse é o principal retiro do ano na Fraternidade São João Paulo II. Foi em um retiro de Carnaval que nosso fundador se converteu, por isso, o Retiro NOVA FORMA, que acontece no período do Carnaval, se tornou tão importante para nós e para o nosso Carisma."
						/>
					</ul>
				</div>

				<div className="mt-6 w-full px-8 md:px-40 py-8 bg-gradient-to-l from-fuchsia-600 to-amber-500 justify-center items-center inline-flex">
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

				<div className="mt-6">
					<h2 className="text-center text-2xl md:text-3xl">
						A Espiritualidade da Fraternidade
					</h2>
					<p className="text-center text-[#89888B]">
						&quot;Fiz-me tudo para todos, afim de salvar a todos&quot;
					</p>
					<p className="text-center text-[#89888B]">(1 Cor 9, 22)</p>
					<ul className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-8 2xl:px-40">
						<SpiritualityCard
							imageUrl="/espiritualidade/150df1_a4c609a553c04df6bebed2ade265b09e~mv2.jpg"
							title="Carismática"
						/>
						<SpiritualityCard
							imageUrl="/espiritualidade/150df1_22778b22e6a649748f5a286c49b8edfd~mv2.jpeg"
							title="Divina Misericórdia"
						/>
						<SpiritualityCard
							imageUrl="/espiritualidade/150df1_dfa1c9198c794f24a0447ca01e55fdfb~mv2.jpg"
							title="Fidelidade ao Papa e à Igreja"
						/>
						<SpiritualityCard
							imageUrl="/espiritualidade/150df1_a817df95e597405889af38c8010ee1ca~mv2.jpg"
							title="Mariana"
						/>
						<SpiritualityCard
							imageUrl="/espiritualidade/150df1_a4c609a553c04df6bebed2ade265b09e~mv2.jpg"
							title="Contemplativa e Missionária"
						/>
						<SpiritualityCard
							imageUrl="/espiritualidade/150df1_83504496d468432c96d612b0bac33000~mv2.jpg"
							title="Eucarística"
						/>
					</ul>
				</div>
			</main>

			<Footer />
		</>
	);
}
