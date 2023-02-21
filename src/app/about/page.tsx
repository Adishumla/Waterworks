import Image from "next/image";

export default function About() {
  return (
    <main className="bg-gradient-to-b from-white to-atlantic min-h-screen overflow-hidden">
				<div className="mx-6 my-36 grid grid-cols-1 gap-12 relative md:grid-cols-2 md:w-2/3 md:mx-auto">
					<div className="relative aspect-h-9 aspect-w-16">
						<Image src='/water dam.jpg' fill alt='hero image' className="w-full h-full object-center object-cover rounded-xl" />
					</div>
					<div className="flex flex-col gap-4 md:col-start-1">
						<h1 className="text-abyss text-2xl font-bold">About us</h1>
						<p className="text-abyss">Lorem ipsum dolor sit amet consectetur. Libero ultricies tortor sit laoreet amet. Quam justo curabitur ultrices morbi nisi nam in. Malesuada felis nulla sed integer pretium laoreet porttitor. Neque leo libero tempor facilisis lectus. Ornare vestibulum vel consectetur quam. Ipsum sed dignissim nulla tempor gravida. Arcu vel maecenas tellus porta. Massa ut adipiscing gravida ut cras quis id egestas.</p>
					</div>
					<section className="md:row-start-1 md:col-start-2">
						<h2 className="text-abyss text-2xl font-bold">Contact us</h2>
						<form className="flex gap-6 flex-col">
							<div className="flex flex-col gap-2">
									<label htmlFor="E-mail" className="text-sm text-abyss font-bold">E-mail</label>
									<input id="E-mail " type="email" placeholder="E-mail" className="border border-abyss text-sm p-3 rounded-md" />
							</div>
							<div className="flex flex-col gap-2">
									<label htmlFor="Namn" className="text-sm text-abyss font-bold">Namn</label>
									<input id="Namn" type="text" placeholder="Name" className="border border-abyss text-sm p-3 rounded-md" />
							</div>
							<div className="flex flex-col gap-2">
									<label htmlFor="Medelande" className="text-sm text-abyss font-bold">Medelande</label>
									<textarea className="border border-abyss resize-none text-sm p-3 rounded-md h-36" name="Medelande" id="Medelande" placeholder="Skriv ett medelande"></textarea>
							</div>
							<button className="bg-baltic text-salt text-base self-end py-3 px-9 rounded-lg" type="submit">Skicka</button>
						</form>
					</section>
				</div>
    </main>
  )
}
