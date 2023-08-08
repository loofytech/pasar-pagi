import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

interface LProps {
  children: React.ReactNode;
}

export default function AppLayout({children}: LProps) {
  return (<div className={font.className}>
    <Header />
    {children}
    <Footer />
  </div>);
}