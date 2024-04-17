import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { NextAuthProvider } from "@/components/common/SessionProvider/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Medical Assistant",
	description: "Get your pills together",
	icons: {
		icon: "favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<NextAuthProvider>
				<body className={inter.className}>{children}</body>
			</NextAuthProvider>
		</html>
	);
}
