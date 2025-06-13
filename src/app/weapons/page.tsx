import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Weapons, WeaponType } from "@/db/weapons";

export default function WeaponsPage() {
	return (
		<main className="flex min-h-screen flex-col">
			{/* Categories Section */}
			<section className="w-full py-12 md:py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold mb-8">
						Browse by Category
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
						{["Sidearm", "SMG", "Shotgun", "Rifle", "Sniper"].map(
							(category) => (
								<Card
									key={category}
									className="bg-gradient-to-br from-primary to-red-500 text-white hover:shadow-lg transition-shadow cursor-pointer"
								>
									<CardContent className="p-2 flex justify-center items-center">
										<h3 className="text-lg font-medium">{category}</h3>
									</CardContent>
								</Card>
							),
						)}
					</div>
				</div>
			</section>
			{/* Weapons Grid */}
			<section className="w-full py-12 md:py-16 ">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{Weapons.map((weapon) => (
							<WeaponCard key={weapon.name} weapon={weapon} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

const WeaponCard = ({ weapon }: { weapon: WeaponType }) => {
	const weaponId = weapon.name.toLowerCase().replace(" ", "-");
	return (
		<Link href={`/weapons/${weaponId}`} className="group">
			<Card className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 py-2">
				<div className="relative">
					<div className="w-[300px] h-[100px] p-4">
						<Image
							src={`/weapons/${weaponId}/${weaponId}.png`}
							alt={weapon.name}
							width={300}
							height={100}
							className=" object-cover"
						/>
					</div>
					<div className="absolute bottom-0 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
						{weapon.type}
					</div>
				</div>
				<CardContent className="p-2">
					<div className="flex justify-between items-center">
						<h3 className="text-xl font-bold">{weapon.name}</h3>
						<span className="text-sm text-muted-foreground">
							{weapon.price} ¤
						</span>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};
