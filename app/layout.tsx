import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { NavCtaBadge } from "@/components/nav-cta-badge";
import { Footer } from "@/components/footer";
import { ThemeManager } from "@/components/theme-manager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chandrashekhar — Digital Product Designer",
    template: "%s | Chandrashekhar",
  },
  description:
    "Portfolio of Chandrashekhar, a digital designer with 10 years of experience in UI/UX design, branding, and product design across web and mobile.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeManager />
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <NavCtaBadge />
      </body>
    </html>
  );
}
