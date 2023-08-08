import Image from "next/image";
import AppLayout from "@/layouts/AppLayout";
import HomeBanner from "@/components/HomeBanner";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (<AppLayout>
    <div className="mt-5 flex items-center justify-center w-3/4 mx-auto">
      <HomeBanner />
    </div>
    {/* Shopping */}
    <div className="mt-12 w-3/4 mx-auto">
      <h3 className="text-xl font-bold">Let's make shoping fun!</h3>
      <div className="mt-6 grid grid-cols-4 gap-5">
        <div onClick={() => router.push("/product")} className="cursor-pointer gap-3 flex flex-col justify-center items-center">
          <Image src={"/category/1.jpg"} width={300} height={300} alt="" />
          <span className="font-bold">Aksesoris</span>
        </div>
        <div className="cursor-pointer gap-3 flex flex-col justify-center items-center">
          <Image src={"/category/2.jpg"} width={300} height={300} alt="" />
          <span className="font-bold">Pakaian Pria</span>
        </div>
        <div className="cursor-pointer gap-3 flex flex-col justify-center items-center">
          <Image src={"/category/3.jpg"} width={300} height={300} alt="" />
          <span className="font-bold">Makanan Ringan</span>
        </div>
        <div className="cursor-pointer gap-3 flex flex-col justify-center items-center">
          <Image src={"/category/4.jpg"} width={300} height={300} alt="" />
          <span className="font-bold">Pakaian Wanita</span>
        </div>
      </div>
    </div>
    {/* Dokumentasi Karya */}
    <div className="mt-14 w-3/4 mx-auto">
      <h3 className="text-xl font-bold">Dokumentasi Karya Siswa</h3>
      <div className="mt-6 grid grid-cols-4 gap-5">
        <div className="gap-3 flex flex-col justify-center items-center">
          <Image src={"/student_work/1.jpg"} width={300} height={300} alt="" />
        </div>
        <div className="gap-3 flex flex-col justify-center items-center">
          <Image src={"/student_work/2.jpeg"} width={300} height={300} alt="" />
        </div>
        <div className="gap-3 flex flex-col justify-center items-center">
          <Image src={"/student_work/3.jpg"} width={300} height={300} alt="" />
        </div>
        <div className="gap-3 flex flex-col justify-center items-center">
          <Image src={"/student_work/4.jpeg"} width={300} height={300} alt="" />
        </div>
      </div>
    </div>
  </AppLayout>);
}
