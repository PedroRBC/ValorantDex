import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
	ArrowLeft,
	Crosshair,
	DollarSign,
	BarChart3,
	Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Weapons } from "@/db/weapons";

export async function generateStaticParams() {
	return Weapons.map((weapon) => ({
		id: weapon.name.toLowerCase(),
	}));
}

export default async function WeaponDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const weaponId = (await params).id;
	const weapon = Weapons.find(
		(weapon) => weapon.name.toLowerCase() === weaponId,
	);

	if (!weapon) {
		notFound();
	}

	return (
		<main className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
				<div className="container mx-auto px-4 relative z-10">
					<Link
						href="/weapons"
						className="inline-flex items-center text-slate-300 hover:text-white mb-6"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Weapons
					</Link>
					<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
						<div className="w-full md:w-1/2">
							<div className="relative aspect-square w-full max-w-md mx-auto">
								<Image
									src={`/weapons/${weaponId}/${weaponId}.png`}
									alt={weapon.name}
									fill
									objectFit="contain"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 text-white">
							<div className="flex items-center gap-3 mb-2">
								<span className="px-3 py-1 bg-red-600/80 rounded-full text-sm">
									{weapon.type}
								</span>
								<span className="flex items-center gap-1">
									<DollarSign className="h-4 w-4" />
									{weapon.price}
								</span>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								{weapon.name}
							</h1>
							<p className="text-lg text-slate-300 mb-6">
								{weapon.description}
							</p>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
								<div className="flex flex-col items-center p-3 bg-black/20 rounded-lg">
									<Crosshair className="h-5 w-5 mb-1 text-primary" />
									<span className="text-sm text-slate-300">Fire Rate</span>
									<span className="font-bold">{weapon.fireRate}</span>
								</div>
								<div className="flex flex-col items-center p-3 bg-black/20 rounded-lg">
									<BarChart3 className="h-5 w-5 mb-1 text-primary" />
									<span className="text-sm text-slate-300">Magazine</span>
									<span className="font-bold">{weapon.magazine}</span>
								</div>
								<div className="flex flex-col items-center p-3 bg-black/20 rounded-lg">
									<Shield className="h-5 w-5 mb-1 text-primary" />
									<span className="text-sm text-slate-300">Penetration</span>
									<span className="font-bold">{weapon.wallPenetration}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Weapon Details */}
			<section className="w-full py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50">
				<div className="container mx-auto px-4">
					<Tabs defaultValue="stats" className="w-full">
						<TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 mb-8">
							<TabsTrigger value="stats">Stats</TabsTrigger>
							<TabsTrigger value="skins">Skins</TabsTrigger>
						</TabsList>
						<TabsContent value="stats">
							<Card>
								<CardContent className="p-6">
									<h2 className="text-2xl font-bold mb-4">Damage Profile</h2>
									<div className="space-y-6">
										{weapon.damage.map((damageRange, index) => (
											<div
												key={index}
												className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4"
											>
												<h3 className="text-lg font-semibold mb-3 text-primary">
													Range: {weapon.distance[index]}
												</h3>
												<div className="grid grid-cols-3 gap-4">
													<div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-lg text-center">
														<h4 className="text-sm text-muted-foreground mb-1">
															Head
														</h4>
														<p className="text-2xl font-bold text-red-600 dark:text-red-400">
															{damageRange.head}
														</p>
													</div>
													<div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center">
														<h4 className="text-sm text-muted-foreground mb-1">
															Body
														</h4>
														<p className="text-2xl font-bold">
															{damageRange.body}
														</p>
													</div>
													<div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center">
														<h4 className="text-sm text-muted-foreground mb-1">
															Legs
														</h4>
														<p className="text-2xl font-bold">
															{damageRange.legs}
														</p>
													</div>
												</div>
											</div>
										))}
									</div>

									<h2 className="text-2xl font-bold mb-4 pt-4">Weapon Stats</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="space-y-4">
											<div className="flex justify-between items-center">
												<span className="text-muted-foreground">Fire Rate</span>
												<span className="font-medium">
													{weapon.fireRate} rounds/sec
												</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-muted-foreground">
													Magazine Size
												</span>
												<span className="font-medium">
													{weapon.magazine} bullets
												</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-muted-foreground">
													Reload Time
												</span>
												<span className="font-medium">
													{weapon.reloadTime}s
												</span>
											</div>
										</div>
										<div className="space-y-4">
											<div className="flex justify-between items-center">
												<span className="text-muted-foreground">Range</span>
												<div className="flex gap-4">
													{weapon.distance.map((distance) => (
														<span key={distance}>{distance}</span>
													))}
												</div>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-muted-foreground">
													Penetration
												</span>
												<span className="font-medium">
													{weapon.wallPenetration}
												</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-muted-foreground">Price</span>
												<span className="font-medium">{weapon.price} ¤</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="skins">
							<Card>
								<CardContent className="p-6">
									<h2 className="text-2xl font-bold mb-6">Available Skins</h2>
									<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
										{[1, 2, 3, 4, 5, 6].map((i) => (
											<Card key={i} className="overflow-hidden p-0 gap-0">
												<div className="relative aspect-square w-full max-w-3xs mx-auto">
													<Image
														src={`/weapons/${weaponId}/${weaponId}.png`}
														alt={`${weapon.name} Skin ${i}`}
														fill
														objectFit="contain"
													/>
												</div>
												<CardContent className="p-4">
													<h3 className="font-medium">
														{weapon.name} Skin {i}
													</h3>
												</CardContent>
											</Card>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</section>
		</main>
	);
}
