import Link from "next/link";
import {
  MapIcon,
  CrosshairIcon,
  UserIcon,
  AwardIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping delay-500" />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-red-600 rounded-full animate-pulse delay-700" />
          <div className="absolute top-1/2 left-10 w-1 h-1 bg-red-500 rounded-full animate-ping delay-300" />
          <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-900" />
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-black via-red-500 to-red-600 dark:from-white dark:via-red-100 dark:to-red-300 bg-clip-text text-transparent leading-none tracking-tight">
              VALORANT
              <span className="block text-6xl md:text-8xl bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                DEX
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Master the tactical shooter with comprehensive guides, strategies,
              and intel on every aspect of Valorant
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <TrendingUpIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">24</h3>
                <p className="text-muted-foreground">Detailed Maps</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <UsersIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">25</h3>
                <p className="text-muted-foreground">Unique Agents</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <AwardIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Weapons & Variants</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="w-full py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <Card className="relative overflow-hidden border-0 shadow-2xl w-full h-[400px]">
                  <Image
                    src="/maps/ascent.jpg"
                    alt="Valorant Maps Preview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">Featured: Ascent</p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapIcon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Maps</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Master every corner of Valorant battlegrounds. From detailed
                layouts to strategic callouts, learn how to dominate each map
                with precision and tactical advantage. Discover optimal angles,
                common hiding spots, and rotation strategies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Interactive map layouts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Strategic callout guides
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Pro player strategies
                  </span>
                </div>
              </div>
              <Button asChild size="lg" className="group">
                <Link href="/maps">
                  Explore Maps
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Weapons Section */}
      <section className="w-full py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <CrosshairIcon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Weapons</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover the perfect arsenal for every situation. From precise
                pistols to devastating rifles, learn about weapon stats, damage
                profiles, and optimal loadouts to maximize your combat
                effectiveness in every round.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Detailed weapon statistics
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Damage charts & spray patterns
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Skin collections & variants
                  </span>
                </div>
              </div>
              <Button asChild size="lg" className="group">
                <Link href="/weapons">
                  Explore Weapons
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <Card className="relative overflow-hidden border-0 shadow-2xl w-full h-[400px] ">
                <Image
                  src="/weapons/vandal/glitchpop.jpg"
                  alt="Valorant Weapons Preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">
                    Featured: Vandal Glitchpop
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="w-full py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <Card className="relative overflow-hidden border-0 shadow-2xl w-full h-[400px]">
                  <Image
                    src="/agents/jett.jpg"
                    alt="Valorant Agents Preview"
                    fill
                    className=" object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">Featured: Jett</p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <UserIcon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Agents</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Meet Valorant&apos;s diverse roster of agents. Each with unique
                abilities and playstyles, learn how to master their skills,
                understand their roles, and create powerful team compositions
                that dominate the battlefield.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Comprehensive ability guides
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Team composition strategies
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">
                    Role-specific tips & tricks
                  </span>
                </div>
              </div>
              <Button asChild size="lg" className="group">
                <Link href="/agents">
                  Explore Agents
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
