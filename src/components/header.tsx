"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, Search } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { docsConfig } from "@/config/docs";
import Image from "next/image";

export default function Header() {
	const { theme, setTheme } = useTheme();
	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}
	return (
		<header className="sticky top-0 z-50 w-full dark:border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className=" flex h-16 items-center justify-between px-4">
				{/* Logo and Brand */}
				<div className="flex items-center space-x-2">
					<Link href="/" className="flex items-center space-x-2">
						<div className="relative">
							<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
								<Image
									src="/valorant.svg"
									alt="Next.js logo"
									width={180}
									height={38}
									priority
								/>
							</div>
						</div>
						<span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
							Valorant Dex
						</span>
					</Link>
					<Badge variant="secondary" className="hidden sm:inline-flex">
						Beta
					</Badge>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex">
					{docsConfig.mainNav.map((item) => (
						<Button variant="ghost" key={item.href} asChild>
							<Link href={item.href}>{item.title}</Link>
						</Button>
					))}
				</div>

				{/* Search Bar */}
				<div className="flex-1 max-w-sm mx-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search..."
							className="pl-10 pr-4 w-full bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring"
						/>
					</div>
				</div>

				{/* Right Side Actions */}
				<div className="flex items-center space-x-2">
					{/* Theme Toggle */}
					<Button variant="ghost" size="icon" onClick={toggleTheme}>
						<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>

					{/* Mobile Menu */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-4 w-4" />
								<span className="sr-only">Menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-56">
							{docsConfig.mainNav.map((item) => {
								return (
									<DropdownMenuItem key={item.href}>
										<DynamicIcon name={item.icon} className="mr-2 h-4 w-4" />
										{item.title}
									</DropdownMenuItem>
								);
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
