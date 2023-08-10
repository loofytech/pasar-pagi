import { SnippetsOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (<>
    {/* <div className="flex items-center justify-between text-xs bg-secondary py-2 px-10">
      <div className="flex items-center gap-2">
        <div className="flex gap-1 items-center">
          <SnippetsOutlined style={{fontSize: 18}} />
          <span>Download Pasar Pagi App</span>
        </div>
      </div>
      <div className="flex items-center gap-9">
        <Link href={"#"}>Produk Siswa</Link>
        <Link href={"#"}>Galeri Pasar Pagi</Link>
        <Link href={"#"}>Profil Tim</Link>
        <Link href={"#"}>Informasi Pasar Pagi</Link>
      </div>
    </div> */}
    <div className="bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between text-xs bg-secondary py-2 px-5 md:px-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            <SnippetsOutlined style={{fontSize: 18}} />
            <span>Download Pasar Pagi App</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-9">
          <Link href={"/product"}>Produk Siswa</Link>
          <Link href={"/gallery"}>Galeri Pasar Pagi</Link>
          <Link href={"/teams"}>Profil Tim</Link>
          <Link href={"#"}>Informasi Pasar Pagi</Link>
        </div>
      </div>
      <div className="px-5 md:px-10 py-3 gap-10 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/logo.jpg"} width={170} height={60} alt="logo" />
        </Link>
        <div className="hidden md:flex flex-1">
          <div className="w-full flex items-center border border-gray-300 px-3 gap-2 rounded-md">
            <SearchOutlined style={{fontSize: 20}} />
            <input type="text" placeholder="Cari di Pasar Pagi" className="text-sm w-full py-2 outline-none" autoComplete="off" />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-5">
            <div className="flex items-center cursor-pointer relative">
              <ShoppingCartOutlined style={{fontSize: 24}} />
            </div>
            {/* <div className="w-1 h-7 border-r-2"></div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-sm border-2 border-primary rounded-md h-8 px-3 text-primary font-bold"
              >
                Masuk
              </button>
              <button
                type="button"
                className="text-sm border-2 border-primary bg-primary rounded-md h-8 px-3 text-white font-bold"
              >
                Daftar
              </button>
            </div> */}
          </div>
        </div>
        <button type="button" className="outline-none select-none block md:hidden">
          <BiMenu size={32} className="text-gray-700" />
        </button>
      </div>
      <div className="px-5 pb-3 w-full flex md:hidden">
        <input type="text" placeholder="Cari produk" className="h-10 px-3 outline-none text-sm w-full border rounded-lg" />
      </div>
    </div>
  </>);
}