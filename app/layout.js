import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Kannami League",
	description: "Created by W.Segura",
};
export const dynamic = "force-dynamic";
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Theme appearance="dark">
					<header></header>
					<main>{children}</main>
				</Theme>
				<Analytics mode={"production"} />;
			</body>
		</html>
	);
}
