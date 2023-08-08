import AppLayout from "@/layouts/AppLayout";
import { BiChevronRight, BiMinusCircle, BiPlusCircle, BiSolidPencil, BiX } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { formatIDR } from "@/utils/globalFunction";
import { useState } from "react";

export default function ProductDetail({data}: any) {
  const [quantity, setQuantity] = useState<number>(1);
  const [openNote, setOpenNote] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");

  const handleCloseNote = () => {
    setOpenNote(false);
    setNote("");
  }

  return (<AppLayout>
    <div className="w-3/4 mx-auto mt-5">
      <div className="text-sm flex items-center select-none">
        <Link href={"/"} className="text-primary">Beranda</Link>
        <BiChevronRight size={20} />
        <Link href={"/product"} className="text-primary whitespace-nowrap">Produk Siswa</Link>
        <BiChevronRight size={20} />
        <span className="truncate">{data.product_name}</span>
      </div>
    </div>
    <div className="flex gap-10 w-3/4 mx-auto mt-5 mb-10">
      <div style={{height: 400}} className="w-80 sticky top-28 overflow-hidden rounded-lg">
        <Image src={data.photo_detail} width={320} height={400} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-bold leading-5">{data.product_name}</h1>
        <div className="text-2xl text-primary font-bold mt-3">Rp{formatIDR(data.product_price)}</div>
        <div className="text-sm mt-10" dangerouslySetInnerHTML={{__html: data.product_description}} />
      </div>
      <div className="w-64">
        <div className="w-full sticky top-28 bg-white border rounded-md p-3 rounded-lg">
          <div className="text-sm font-bold">Atur jumlah dan catatan</div>
          <div className="flex items-center gap-5 mt-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
                className="absolute top-0 bottom-0 left-2 flex items-center cursor-pointer"
              >
                <BiMinusCircle size={24} className={`${quantity == 1 ? "text-gray-400" : "text-primary"}`} />
              </button>
              <input
                type="text"
                value={quantity}
                className="px-10 text-center h-10 border w-full outline-none rounded-lg select-none"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    return event.preventDefault();
                  }
                }}
                onChange={(event) => setQuantity(parseInt(event.target.value))}
                readOnly
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="absolute top-0 bottom-0 right-2 flex items-center cursor-pointer"
              >
                <BiPlusCircle size={24} className={`${quantity >= 1 ? "text-primary" : "text-gray-400"}`} />
              </button>
            </div>
          </div>
          {!openNote && <div className="mt-2">
            <button type="button" onClick={() => setOpenNote(true)} className="flex gap-0.5 items-center select-none">
              <BiSolidPencil size={16} className="text-primary" />
              <span className="text-primary text-xs whitespace-nowrap font-bold">Tambah Catatan</span>
            </button>
          </div>}
          {openNote && <div className="mt-2">
            <input
              type="text"
              placeholder="Contoh: Warna Putih"
              className="w-full border text-sm h-10 rounded-lg select-none outline-none px-3"
              value={note}
              onChange={(evt) => setNote(evt.target.value)}
            />
            <button type="button" className="ml-1 text-xs font-bold text-primary" onClick={handleCloseNote}>Batalkan Catatan</button>
          </div>}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm text-gray-400">Subtotal</span>
            <span className="font-bold text-lg">Rp{formatIDR(data.product_price * quantity)}</span>
          </div>
          <div className="mt-2 flex items-center flex-col gap-2">
            <button
              type="button"
              className="w-full border-2 border-primary bg-primary text-white text-sm font-bold h-10 rounded-lg"
            >
              KERANJANG
            </button>
            <button
              type="button"
              className="w-full border-2 border-primary bg-white text-primary text-sm font-bold h-10 rounded-lg"
            >
              BELI LANGSUNG
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>)
}

export async function getServerSideProps(context: any) {
  const request = await fetch("http://localhost:3000/sample/product.json");
  const response = await request.json();

  const data = response.filter((d: any) => d.id == context.query.slug);
  if (data.length < 1) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      data: data[0]
    }
  }
}