import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoYoutube, BiLogoGmail, BiCopyright } from "react-icons/bi";

export default function Footer() {
  const [language, setLanguage] = useState<number>(0);

  return (<div className="bg-white py-8">
    <div className="flex items-start gap-5 w-3/4 mx-auto flex-col md:flex-row">
      <div className="w-full md:flex-1 flex">
        <div className="w-full md:w-auto">
          <p className="font-bold mb-3">Jelajahi Pasar Pagi</p>
          <div className="flex text-gray-700 flex-col gap-2 text-sm">
            <Link href={"/product"} className="whitespace-nowrap hover:text-primary">Produk Siswa</Link>
            <Link href={"#"} className="whitespace-nowrap hover:text-primary">Profil Tim</Link>
            <Link href={"/gallery"} className="whitespace-nowrap hover:text-primary">Galeri Pasar Pagi</Link>
            <Link href={"#"} className="whitespace-nowrap hover:text-primary">Informasi Pasar Pagi</Link>
          </div>
          <p className="font-bold mt-5 mb-3 text-center md:text-left">Temukan Pasar Pagi</p>
          <div className="flex text-gray-700 gap-1.5 text-sm justify-center md:justify-start">
            <Link href={"#"} className="w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full">
              <BiLogoInstagramAlt size={24} />
            </Link>
            <Link href={"#"} className="w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full">
              <BiLogoFacebookCircle size={24} />
            </Link>
            <Link href={"#"} className="w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full">
              <BiLogoYoutube size={24} />
            </Link>
            <Link href={"#"} className="w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full">
              <BiLogoGmail size={24} />
            </Link>
          </div>
        </div>
        {/* <div className="w-full"></div> */}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5 md:w-auto">
        <Image src={"/pasar_pagi.png"} width={200} height={100} className="" alt="" />
        <div className="text-xs">
          Copyright &copy; <span className="font-bold">2023</span>
        </div>
        <div className="flex p-1 items-center bg-secondary rounded-lg overflow-hidden">
          <button
            className={`py-1 rounded-l px-3 ease-in-out duration-100 ${language == 0 ? "bg-primary text-white font-bold" : ""}`}
            onClick={() => setLanguage(0)}
          >
            Indonesia
          </button>
          <button
            className={`py-1 rounded-r px-3 ease-in-out duration-100 ${language == 1 ? "bg-primary text-white font-bold" : ""}`}
            onClick={() => setLanguage(1)}
          >
            English
          </button>
        </div>
      </div>
    </div>
  </div>);
}