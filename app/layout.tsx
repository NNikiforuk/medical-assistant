import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { NextAuthProvider } from "@/components/common/SessionProvider/NextAuthProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Medical Assistant",
	description: "Get your pills together",
	icons: {
		icon: "icon.ico",
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
				<Suspense>
					<body className={inter.className}>{children}</body>
				</Suspense>
			</NextAuthProvider>
		</html>
	);
}
