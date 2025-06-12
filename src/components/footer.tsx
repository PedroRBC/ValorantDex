"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b via-primary to-90% to-black">
      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div>
            {/* Brand Section */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <Image
                  src="/valorant.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  Valorant Dex
                </h3>
                <Badge variant="secondary" className="text-xs">
                  Beta
                </Badge>
              </div>
            </div>
            <p className="text-white mb-6 leading-relaxed max-w-sm">
              Your ultimate companion for mastering Valorant tactical gameplay.
              From agent guides to map strategies, we help you climb the ranks.
            </p>
            <Button
              variant="outline"
              size="icon"
              className="bg-input/30 border-input hover:bg-input/50"
              asChild
            >
              <Link href="https://github.com/pedrorbc">
                <GithubIcon className="w-4 h-4 text-white" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-red-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm ">
              <p>&copy; 2024 Valorant Dex. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="hover:text-gray-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-gray-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>Not affiliated with</span>
              <Badge
                variant="outline"
                className="border-red-500/50 text-red-500"
              >
                Riot Games
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
