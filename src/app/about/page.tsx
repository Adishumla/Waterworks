import Image from "next/image";

export default function About() {
  return (
    <main className="mx-6 my-36 relative">
				<div className="relative aspect-h-9 aspect-w-16 mb-10">
					<Image src='/water dam.jpg' fill alt='hero image' className="w-full h-full object-center object-cover rounded-xl" />
				</div>
				<h1 className="text-abyss text-2xl font-bold mb-6">About us</h1>
				<p className="text-abyss mb-14">Lorem ipsum dolor sit amet consectetur. Libero ultricies tortor sit laoreet amet. Quam justo curabitur ultrices morbi nisi nam in. Malesuada felis nulla sed integer pretium laoreet porttitor. Neque leo libero tempor facilisis lectus. Ornare vestibulum vel consectetur quam. Ipsum sed dignissim nulla tempor gravida. Arcu vel maecenas tellus porta. Massa ut adipiscing gravida ut cras quis id egestas.</p>

				<section>
					<h2 className="text-abyss text-2xl font-bold mb-6">Contact us</h2>

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
						<button className="bg-baltic text-salt text-base self-start py-3 px-9 rounded-lg" type="submit">Skicka</button>
					</form>
				</section>
    </main>
  )
}
