import type { IconName } from "lucide-react/dynamic";

interface Nav {
    title: string;
    href: string;
    icon: IconName;
}

interface DocsConfig {
    mainNav: Nav[];
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Agents",
            href: "/agents",
            icon: "users"
        },
        {
            title: "Weapons",
            href: "/weapons",
            icon: "sword"
        },
        {
            title: "Maps",
            href: "/maps",
            icon: "map"
        }
    ],
};
