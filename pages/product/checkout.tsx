import Payment from "@/components/checkout/Payment";
import AppLayout from "@/layouts/AppLayout";
import { formatIDR } from "@/utils/globalFunction";
import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

export default function Checkout() {
  const [quantity, setQuantity] = useState<number>(1);
  const [showNote, setShowNote] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");

  const data = [
    {
      "id": 1,
      "product_name": "LAP Trang Rice Paper 400gr 22inch | Kulit Lumpia Vietnam | Rice Paper | SERBAGUNA LAP KANEBO KOSS DAYA SERAP TINGGI - TANPA TABUNG",
      "product_price": 42000,
      "photo": "https://source.unsplash.com/random/104x104",
      "quantity": 1
    }
  ];

  const handleOpenNote = () => {
    setShowNote(!showNote);
  }

  return (<AppLayout>
    <div className="w-2/4 mx-auto mt-5">
      <div className="bg-white border p-5 rounded-lg">
        <h3 className="font-bold">Barang yang dibeli</h3>
        <div className="flex flex-col gap-2 mt-5">
          {data.length > 0 && data.map((xd: any, xi: number) => {
            return (<div className="flex items-start gap-3.5" key={xi}>
              <Image src={xd.photo} width={74} height={74} className="rounded-lg" alt="" />
              <div className="relative">
                <div className="leading-4 text-sm">{xd.product_name}</div>
                <div className="font-bold mt-1.5 text-sm">Rp{formatIDR(xd.product_price)}</div>
                <div className="flex items-center gap-3 mt-3">
                  {!showNote && <button type="button" className="text-xs bg-primary text-white font-bold h-8 px-2 rounded-md" onClick={handleOpenNote}>Tulis Catatan</button>}
                  {showNote && <div className="flex items-center gap-2">
                    <input
                      type="text" value={note}
                      onChange={(evt) => setNote(evt.target.value)}
                      className="text-xs px-3 outline-none border rounded-md h-8 w-52"
                      placeholder="Contoh: Warna merah delima"
                      autoComplete="off"
                    />
                    <button type="button" className="text-xs bg-primary text-white font-bold h-8 px-2 rounded-md" onClick={handleOpenNote}>Submit</button>
                  </div>}
                  <span className="text-gray-400">|</span>
                  <div className="border flex items-center gap-3 rounded-md p-2">
                    <button type="button" className="outline-none" onClick={() => quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)}>
                      <BiMinus className={`${quantity > 1 ? "text-primary" : ""}`} />
                    </button>
                    <input type="text" value={quantity} onChange={() => {}} className="text-xs text-center outline-none w-8" autoComplete="off" readOnly />
                    <button type="button" className="outline-none" onClick={() => setQuantity(quantity + 1)}>
                      <BiPlus className={`${quantity >= 1 ? "text-primary" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>);
          })}
        </div>
      </div>
    </div>
    <div className="w-2/4 mx-auto mt-3 mb-5">
      <Payment />
    </div>
  </AppLayout>)
}