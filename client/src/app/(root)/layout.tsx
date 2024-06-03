import { LeftSidebar } from "@/components/ui/LeftSidebar";
import { MobileNav } from "@/components/ui/MobileNav";
import { RightSidebar } from "@/components/ui/RightSidebar";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Podcast",
  description: "Generated your podcast with AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main className="relative flex bg-black-3">
            <LeftSidebar />
            <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden">
                  <Image  src={'/icons/logo.svg'} 
                          alt=""
                          width={30}
                          height={30}
                  />
                  <MobileNav />
                </div>
                <div className="flex flex-col md:pb-14">
                  {children}
                </div>
              </div>
            </section>
            <RightSidebar />
        </main>
    </div>
  );
}
