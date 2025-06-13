export type WeaponType = {
	name: string;
	description: string;
	wallPenetration: "high" | "medium" | "low";
	magazine: string;
	fireRate: string;
	runSpeed: string;
	equipTime: string;
	spread: string[];
	reloadTime: string;
	price: string;
	distance: string[];
	damage: {
		head: string;
		body: string;
		legs: string;
	}[];
	type: "Sidearms" | "SMGs" | "Shotguns" | "Rifles" | "Sniper Rifles" | "Heavy";
	bio: string;
};

export const Weapons: WeaponType[] = [
	{
		name: "Classic",
		wallPenetration: "low",
		magazine: "12",
		fireRate: "6,75 ",
		runSpeed: "5,73 m/seg",
		equipTime: "0,75 seg",
		spread: ["0,4"],
		reloadTime: "1,75 seg",
		price: "0",
		distance: ["0-30m", "30-50m"],
		damage: [
			{
				head: "78",
				body: "26",
				legs: "22",
			},
			{
				head: "66",
				body: "22",
				legs: "18",
			},
		],
		type: "Sidearms",
		bio: "Light and versatile, the default weapon is an undeniable classic.",
		description:
			"Its primary mode makes precise shots when the player is stationary. Additionally, it comes equipped with an alternate burst mode for combat and close range.",
	},
	{
		name: "Shorty",
		wallPenetration: "low",
		magazine: "2",
		fireRate: "6,75 ",
		equipTime: "0,75 seg",
		runSpeed: "4,73 m/seg",
		spread: ["0,4"],
		reloadTime: "1,75 seg",
		price: "200",
		distance: ["0-9m", "9-15m"],
		damage: [
			{
				head: "36",
				body: "12",
				legs: "10",
			},
			{
				head: "24",
				body: "8",
				legs: "6",
			},
		],
		type: "Sidearms",
		bio: "Surprise your enemies up close to get maximum efficiency.",
		description:
			"A quick-firing short-barreled shotgun that's highly lethal at close range, but only fires two shots before needing to reload. Pairs well with long-range weapons.",
	},
	{
		name: "Frenzy",
		wallPenetration: "low",
		magazine: "13",
		fireRate: "10 ",
		runSpeed: "5,73 m/seg",
		equipTime: "1 seg",
		spread: ["0,45"],
		reloadTime: "1,5 seg",
		price: "400",
		distance: ["0-20m", "20-50m"],
		damage: [
			{
				head: "78",
				body: "26",
				legs: "22",
			},
			{
				head: "63",
				body: "21",
				legs: "17",
			},
		],
		type: "Sidearms",
		bio: "At close range, finger on the trigger! At long range... better find another weapon.",
		description:
			"Frenzy is a lightweight machine pistol that's excellent for use while moving. Its high fire rate can be difficult to control, so try firing short bursts at medium ranges.",
	},
	{
		name: "Ghost",
		wallPenetration: "medium",
		magazine: "15",
		fireRate: "6,75 ",
		runSpeed: "5,73 m/seg",
		equipTime: "0,75 seg",
		spread: ["0,3"],
		reloadTime: "1,5 seg",
		price: "500",
		distance: ["0-30m", "30-50m"],
		damage: [
			{
				head: "105",
				body: "30",
				legs: "26",
			},
			{
				head: "88",
				body: "25",
				legs: "21",
			},
		],
		type: "Sidearms",
		bio: "Elegant, silent, and efficient when firing from any range.",
		description:
			"Ghost is a precise weapon with a large magazine that helps compensate for any mistakes. To hit distant targets, you need to maintain controlled fire rate. And for close targets, you can keep your finger on the trigger.",
	},
	{
		name: "Sheriff",
		wallPenetration: "high",
		magazine: "6",
		fireRate: "4 ",
		runSpeed: "5,4 m/seg",
		equipTime: "1 seg",
		spread: ["0,25"],
		reloadTime: "2,25 seg",
		price: "800",
		distance: ["0-30m", "30-50m"],
		damage: [
			{
				head: "159",
				body: "55",
				legs: "46",
			},
			{
				head: "145",
				body: "50",
				legs: "42",
			},
		],
		type: "Sidearms",
		bio: "Sheriff is a modern revolver made for those seeking precise headshots.",
		description:
			"Its high-impact projectiles cause significant recoil, so you need a steady hand. When you master this weapon, your enemies quickly realize they never stood a chance.",
	},
	{
		name: "Stinger",
		wallPenetration: "low",
		magazine: "13",
		fireRate: "18 ",
		runSpeed: "5,73 m/seg",
		equipTime: "0,75 seg",
		spread: ["0,65", "0,4"],
		reloadTime: "2,25 seg",
		price: "400",
		distance: ["0-20m", "20-50m"],
		damage: [
			{
				head: "67",
				body: "27",
				legs: "22",
			},
			{
				head: "62",
				body: "25",
				legs: "21",
			},
		],
		type: "SMGs",
		bio: "Enemies know the end has come when they feel the Stinger's fire.",
		description:
			"This submachine gun is powerful at medium/long ranges, firing lethal shots, but at the cost of a high fire rate.",
	},
	{
		name: "Spectre",
		wallPenetration: "medium",
		magazine: "30",
		fireRate: "13,33 ",
		runSpeed: "5,73 m/seg",
		equipTime: "0,75 seg",
		spread: ["0,4", "0,25"],
		reloadTime: "2,25 seg",
		price: "1600",
		distance: ["0-20m", "20-50m"],
		damage: [
			{
				head: "78",
				body: "26",
				legs: "22",
			},
			{
				head: "66",
				body: "22",
				legs: "18",
			},
		],
		type: "SMGs",
		bio: "In doubt? Go with Spectre and everything will work out.",
		description:
			"Spectre is a do-it-all weapon with great balance between damage, fire rate, and accuracy – all at short and medium ranges. It haunts the corners of every map and only requires a steady aim to take down enemies at long range.",
	},
	{
		name: "Bucky",
		wallPenetration: "low",
		magazine: "5",
		fireRate: "1,1 ",
		runSpeed: "5,06 m/seg",
		equipTime: "1 seg",
		spread: ["3,4"],
		reloadTime: "2,5 seg",
		price: "900",
		distance: ["0-3m", "3-7m", "7-11m", "11-50m"],
		damage: [
			{
				head: "46",
				body: "23",
				legs: "19",
			},
			{
				head: "38",
				body: "19",
				legs: "16",
			},
			{
				head: "28",
				body: "14",
				legs: "11",
			},
			{
				head: "18",
				body: "9",
				legs: "7",
			},
		],
		type: "Shotguns",
		bio: "Attacker? Defender? Doesn't matter. What matters is having a shotgun like this in hand.",
		description:
			"Heavy but stable, Bucky has a primary mode that's good for holding advances in tight corners or helping with pushes in small areas.",
	},
	{
		name: "Judge",
		wallPenetration: "low",
		magazine: "7",
		fireRate: "3,5 ",
		runSpeed: "5,06 m/seg",
		equipTime: "1 seg",
		spread: ["2,25"],
		reloadTime: "2,2 seg",
		price: "1500",
		distance: ["0-10m", "10-15m", "15-50m"],
		damage: [
			{
				head: "34",
				body: "17",
				legs: "14",
			},
			{
				head: "26",
				body: "13",
				legs: "11",
			},
			{
				head: "20",
				body: "10",
				legs: "9",
			},
		],
		type: "Shotguns",
		bio: "Judge is a fast-firing automatic shotgun that deals consistent damage.",
		description:
			"It's stable with normal shots but becomes volatile with rapid fire. Its primary mode takes down targets at close range, but you'll need a steady aim to hit anything beyond arm's reach.",
	},
	{
		name: "Bulldog",
		wallPenetration: "medium",
		magazine: "24",
		fireRate: "9,14 ",
		runSpeed: "5,4 m/seg",
		equipTime: "1 seg",
		spread: ["0,3", "0,1"],
		reloadTime: "2,5 seg",
		price: "2100",
		distance: ["0-50m"],
		damage: [
			{
				head: "116",
				body: "35",
				legs: "30",
			},
		],
		type: "Rifles",
		bio: "Bulldog is the type of weapon that brings satisfaction when getting a kill.",
		description:
			"This rifle can become a true killing machine. Its secondary mode allows the shooter to use the scope and fire short, precise bursts at anyone approaching at medium to long ranges.",
	},
	{
		name: "Guardian",
		wallPenetration: "high",
		magazine: "12",
		fireRate: "4,75 ",
		runSpeed: "5,4 m/seg",
		equipTime: "1 seg",
		spread: ["0,1", "0"],
		reloadTime: "2,5 seg",
		price: "2500",
		distance: ["0-50m"],
		damage: [
			{
				head: "195",
				body: "65",
				legs: "48",
			},
		],
		type: "Rifles",
		bio: "This weapon puts on a show in the hands of patient shooters.",
		description:
			"As a DMR-style rifle, Guardian is heavier and offers less mobility than other rifles, but its shots are precise and powerful. Go hunting for enemies at long and medium ranges.",
	},
	{
		name: "Phantom",
		wallPenetration: "medium",
		magazine: "30",
		fireRate: "11 ",
		runSpeed: "5,4 m/seg",
		equipTime: "1 seg",
		spread: ["0,2", "0,11"],
		reloadTime: "2,5 seg",
		price: "2900",
		distance: ["0-15m", "15-30m", "30-50m"],
		damage: [
			{
				head: "156",
				body: "39",
				legs: "33",
			},
			{
				head: "140",
				body: "35",
				legs: "29",
			},
			{
				head: "124",
				body: "31",
				legs: "26",
			},
		],
		type: "Rifles",
		bio: "Phantom is a balanced weapon, designed to fire stable shots that reach long ranges.",
		description:
			"Take advantage of this weapon's automation to hit anyone trying to approach. Fire short, controlled bursts to disperse enemies anywhere. Phantom performs better when the shooter is stationary.",
	},
	{
		name: "Vandal",
		wallPenetration: "medium",
		magazine: "25",
		fireRate: "9,75 ",
		runSpeed: "5,4 m/seg",
		equipTime: "1 seg",
		spread: ["0,25", "0,157"],
		reloadTime: "2,5 seg",
		price: "2900",
		distance: ["0-50m"],
		damage: [
			{
				head: "160",
				body: "40",
				legs: "34",
			},
		],
		type: "Rifles",
		bio: "This extremely powerful rifle causes massive damage with small bursts of bullets.",
		description:
			"In return, if fired for too long, its stability is compromised. Vandal deals significant damage at long range and rewards those who focus on a single precise headshot.",
	},
	{
		name: "Operator",
		wallPenetration: "high",
		magazine: "5",
		fireRate: "0,75 ",
		runSpeed: "5,13 m/seg",
		equipTime: "1,5 seg",
		spread: ["5, 0"],
		reloadTime: "3,7 seg",
		price: "4500",
		distance: ["30-50m"],
		damage: [
			{
				head: "255",
				body: "150",
				legs: "127",
			},
		],
		type: "Sniper Rifles",
		bio: "Settle into a spot and you'll be able to control important areas.",
		description:
			"Operator is an intense sniper rifle with highly efficient dual zoom. This weapon performs terribly while moving, but fires absurdly powerful projectiles that can devastate an entire team with a single shot.",
	},
	{
		name: "Marshal",
		wallPenetration: "medium",
		magazine: "5",
		fireRate: "1,5 ",
		runSpeed: "5,4 m/seg",
		equipTime: "1,25 seg",
		spread: ["1", "0"],
		reloadTime: "2,5 seg",
		price: "1100",
		distance: ["0-50m"],
		damage: [
			{
				head: "202",
				body: "101",
				legs: "85",
			},
		],
		type: "Sniper Rifles",
		bio: "Choose a good angle, aim, and the target will regret turning that corner.",
		description:
			"Marshal is an agile single-zoom sniper rifle that can keep persistent enemies at bay. Due to the slower fire rate, you'll need to hit your shots or you'll be vulnerable to attacks.",
	},
	{
		name: "Ares",
		wallPenetration: "high",
		magazine: "50",
		fireRate: "10 ",
		runSpeed: "5,13 m/seg",
		equipTime: "1,25 seg",
		spread: ["0,8", "0,67"],
		reloadTime: "3,25 seg",
		price: "1600",
		distance: ["0-30m", "30-50m"],
		damage: [
			{
				head: "72",
				body: "30",
				legs: "25",
			},
			{
				head: "67",
				body: "28",
				legs: "23",
			},
		],
		type: "Heavy",
		bio: "Don't underestimate the power of this weapon.",
		description:
			"Ares features a huge magazine and excels at suppressive fire or dealing heavy damage to concentrated groups of enemies.",
	},
	{
		name: "Odin",
		wallPenetration: "high",
		fireRate: "12 ",
		runSpeed: "5,13 m/seg",
		equipTime: "1,25 seg",
		spread: ["0,8", "0,79"],
		reloadTime: "5 seg",
		magazine: "100",
		price: "3200",
		distance: ["0-30m", "30-50m"],
		damage: [
			{
				head: "95",
				body: "38",
				legs: "32",
			},
			{
				head: "77",
				body: "31",
				legs: "26",
			},
		],
		type: "Heavy",
		bio: "When wielding a grand weapon like this, one thing is certain: the wielder will ascend to glory while the opponent falls to ruin.",
		description:
			"Odin features shots that deal heavy damage and nullify attacks with surprising stability. Use sprays against enemies at close range and switch to secondary mode to become a walking turret.",
	},
];
