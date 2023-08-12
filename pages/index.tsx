import Image from "next/image";
import AppLayout from "@/layouts/AppLayout";
import HomeBanner from "@/components/HomeBanner";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Home() {
  const router = useRouter();

  return (<AppLayout>
    <NextSeo
      title={`Online Mall Pasar Pagi - Belanja Online Aman, Nyaman & Terpercaya!`}
      description={`Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`}
      openGraph={{
        title: "Online Mall Pasar Pagi - Belanja Online Aman, Nyaman & Terpercaya!",
        description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
        url: `https://pasar-pagi.loofytech.com${router.asPath}`,
        images: [
          {url: `https://pasar-pagi.loofytech.com/pasar_pagi.png`}
        ],
        siteName: "Online Mall Pasar Pagi - Belanja Online Aman, Nyaman & Terpercaya!"
      }}
      additionalMetaTags={[{
        property: 'keywords',
        content: 'loofytech, jasa it loofytech, jasa website loofytech, jasa aplikasi loofytech, jasa design produk loofytech, loofytech konsultan, loofytech consultant, aplikasi kantor loofytech, aplikasi kasir loofytech, aplikasi pembayaran loofytech, aplikasi pergudangan loofytech, it loofy, loofytech digital'
      }, {
        name: 'application-name',
        content: 'Online Mall Pasar Pagi - Belanja Online Aman, Nyaman & Terpercaya!'
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }]}
    />
    <div className="mt-0 flex items-center justify-center w-full md:mt-5 md:w-3/4 mx-auto">
      <HomeBanner />
    </div>
    {/* Shopping */}
    <div className="mt-5 md:mt-12 w-full px-3 md:w-3/4 md:px-0 mx-auto">
      <h3 className="text-xl font-bold">Let&#39;s make shoping fun!</h3>
      <div className="mt-3 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-5">
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
    {/* <div className="mt-14 w-3/4 mx-auto">
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
    </div> */}
    <div className="parpas-h mt-14">
      <div className="w-full md:w-3/4 mx-auto h-full flex justify-center md:justify-start items-center flex-col md:flex-row gap-5 px-3 md:px-0">
        <div className="relative text-center md:text-start text-white text-sm md:text-xl font-bold">
          Pasar Pagi adalah websaite untuk menjual prodak yang di buat santri Pontren Mu Al Ghifari Pasar Pagi, kami hadir dari hal sederhana dimana pasar pagi biasanya identik dengan pasar tradisional orang bertegur sapa dan saling bahagia dalam transaksi jual beli. sepirit itulah yang kami bawa dalam pergerakan kami.
        </div>
        <div className="relative">
          <Link href={"/about"} className="font-bold text-sm bg-primary text-white py-3 px-5 rounded-lg">Selengkapnya</Link>
        </div>
      </div>
    </div>
  </AppLayout>);
}
