import Image from "next/image";
import { useState } from "react";
import { Modal } from "antd";
import { BiMinus, BiSolidBadgeCheck } from "react-icons/bi";

export default function Payment() {
  const [payment, setPayment] = useState<number>(0);
  const [anyAddress, setAnyAddress] = useState<boolean>(false);
  const [openCreateAddress, setOpenCreateAddress] = useState<boolean>(false);
  const [address, setAddress] = useState<any>({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handlePayment = (param: number) => {
    if (payment == param) {
      setPayment(0);
    } else {
      setPayment(param);
    }
  }

  const handleCreateAddress = () => {
    setAddress({
      name: "",
      email: "",
      phone: "",
      address: ""
    });
    setOpenCreateAddress(true);
  }

  const handleSetAddress = () => {
    setAnyAddress(true);
    setOpenCreateAddress(false);
  }

  const handleChangeAddress = (value: string, name: string) => {
    setAddress((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (<>
    <div className="border p-5 rounded-lg bg-white">
      <h3 className="font-bold">Pengiriman dan pembayaran</h3>
      <div className="mt-5">
        {!anyAddress && <button className="bg-primary text-white font-bold text-sm py-2 px-3 rounded-md" onClick={handleCreateAddress}>Tambah Alamat</button>}
        {anyAddress && <div className="flex flex-col select-none cursor-pointer" onClick={() => setOpenCreateAddress(true)}>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-400 text-white font-bold py-1 px-3 rounded">Utama</span>
            <div className="flex items-center gap-0.5 text-xs">
              <span className="font-bold">{address.name}</span>
              <BiMinus style={{marginTop: "1px"}} />
              <span>{address.email} ({address.phone})</span>
            </div>
          </div>
          <div className="text-sm mt-1">{address.address}</div>
        </div>}
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <button
          type="button"
          className={`border-2 h-16 rounded-lg flex items-center px-5 ${payment == 1 ? "border-primary" : ""}`}
          onClick={() => handlePayment(1)}
        >
          <Image src={"/cod.png"} width={100} height={100} unoptimized alt="cod" />
        </button>
        <button
          type="button"
          className={`border-2 h-16 rounded-lg flex items-center px-5 ${payment == 2 ? "border-primary" : ""}`}
          onClick={() => handlePayment(2)}
        >
          <Image src={"/qris.png"} width={200} height={100} unoptimized alt="qris" />
        </button>
      </div>
      <button
        type="button"
        className="bg-green-500 text-white font-bold flex justify-center items-center gap-1 w-full h-12 rounded-md mt-5 outline-none disabled:bg-gray-400"
        disabled={payment == 0 || !anyAddress}
      >
        <BiSolidBadgeCheck size={24} />
        <span>Proses Pembelian</span>
      </button>
    </div>
    <Modal
      title=""
      centered
      open={openCreateAddress}
      footer={false}
      onCancel={() => setOpenCreateAddress(false)}
    >
      <div className="mt-5 mb-1">
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-bold">Nama Lengkap</span>
          <input
            type="text"
            className="h-8 w-full border py-3 px-2 outline-none rounded-md"
            autoComplete="off"
            placeholder="Contoh: Budi Doremi"
            value={address.name}
            onChange={(evt) => handleChangeAddress(evt.target.value, "name")}
          />
        </div>
        <div className="flex flex-col gap-1 text-sm mt-3">
          <span className="font-bold">Email</span>
          <input
            type="text"
            className="h-8 w-full border py-3 px-2 outline-none rounded-md"
            autoComplete="off"
            placeholder="Contoh: budi_doremi@gmail.com"
            value={address.email}
            onChange={(evt) => handleChangeAddress(evt.target.value, "email")}
          />
        </div>
        <div className="flex flex-col gap-1 text-sm mt-3">
          <span className="font-bold">No. Telepon / Hp</span>
          <input
            type="text"
            className="h-8 w-full border py-3 px-2 outline-none rounded-md"
            autoComplete="off"
            placeholder="Contoh: 08123456789"
            value={address.phone}
            onChange={(evt) => handleChangeAddress(evt.target.value, "phone")}
          />
        </div>
        <div className="flex flex-col gap-1 text-sm mt-3">
          <span className="font-bold">Alamat Lengkap</span>
          <textarea
            className="h-8 w-full border p-2 outline-none rounded-md resize-none h-20 overflow-auto"
            autoComplete="off"
            placeholder="Contoh: Jl. Imam Bonjol"
            value={address.address}
            onChange={(evt) => handleChangeAddress(evt.target.value, "address")}
          />
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="bg-primary py-2 px-3 rounded-md select-none text-white font-bold disabled:bg-gray-400"
            onClick={handleSetAddress}
            disabled={address.name == "" || address.phone == "" || address.address == ""}
          >
            Simpan Alamat
          </button>
        </div>
      </div>
    </Modal>
  </>);
}