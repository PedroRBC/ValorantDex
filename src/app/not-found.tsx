import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			{/* Red gradient background with overlay */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />

			{/* Animated elements */}
			<div className="absolute inset-0 -z-10 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200" />
				<div className="absolute top-1/4 right-1/3 w-2 h-2 bg-red-500/60 rounded-full animate-pulse delay-100" />
				<div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-red-500/40 rounded-full animate-pulse delay-500" />
				<div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-red-500/80 rounded-full animate-pulse delay-700" />
				<div className="absolute top-1/2 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200" />
				<div className="absolute top-2/3 right-1/3 w-2 h-2 bg-red-500/60 rounded-full animate-pulse delay-100" />
				<div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-red-500/40 rounded-full animate-pulse delay-500" />
				<div className="absolute bottom-3/5 right-1/2 w-2 h-2 bg-red-500/80 rounded-full animate-pulse delay-700" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center max-w-md">
				<div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-red-500/20">
					<AlertTriangle className="w-10 h-10 text-red-500" />
				</div>

				<h1 className="text-6xl font-bold mb-2 text-red-500">404</h1>
				<h2 className="text-3xl font-bold mb-6">Target Not Found</h2>

				<p className="text-lg text-muted-foreground mb-8">
					The agent or resource you&apos;re looking for has gone dark. Perhaps
					they&apos;ve rotated to another site?
				</p>

				<div className="flex flex-col sm:flex-row gap-4">
					<Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
						<Link href="/">Return to Base</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/agents">Browse Agents</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
