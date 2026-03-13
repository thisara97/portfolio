import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Luke Thisara Jayasundara | Full-Stack Engineer",
  description:
    "Turning complex business problems into elegant, scalable software. Full-Stack Engineer & ERP Consultant based in Sri Lanka.",
  keywords: [
    "Full-Stack Developer",
    "Angular",
    "NestJS",
    "React",
    "SAP B1",
    "Sri Lanka",
    "Software Engineer",
  ],
  openGraph: {
    title: "Luke Thisara Jayasundara | Full-Stack Engineer",
    description:
      "Turning complex business problems into elegant, scalable software.",
    url: "https://lukethisara.vercel.app",
    siteName: "Luke Thisara Jayasundara",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luke Thisara Jayasundara Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Thisara Jayasundara | Full-Stack Engineer",
    description:
      "Turning complex business problems into elegant, scalable software.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
