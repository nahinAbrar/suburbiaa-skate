import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import { SVGFilters } from "@/components/SVGFilters";
import { createClient } from "@/prismicio";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bowlby-sc",
  weight: "400",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()
  const settings = await client.getSingle('settings')

  return {
    title: settings.data.site_title || "Suburbia Skateboards",
    description: settings.data.meta_description || "Custom skateboards for your unique style",
    openGraph:{
      images: settings.data.fallback_og_image.url ?? undefined
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>

          {children}

        </main>
        <SVGFilters />
      </body>
    </html>
  );
}
