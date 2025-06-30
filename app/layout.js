import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <header>
            <Header />
            {/* <Header /> */}
            <div className="p-4 bg-gray-900 text-white">
               <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
          </header>

          {/* Main Content */}
          <main className="min-h-screen px-4 py-6">{children}</main>

          {/* Footer */}
          <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made  by Ridh </p>
              </div>
            </footer>
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
