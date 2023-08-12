import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function About() {
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
    <div className="parpas-h">
      <div className="w-full md:w-2/4 mx-auto h-full flex justify-center md:justify-start items-center flex-col md:flex-row gap-5 px-3 md:px-0">
        <div className="w-full relative text-xl text-center text-white text-sm md:text-3xl font-bold">
          Pasar Pagi adalah platform belanja online terdepan di Asia Tenggara.
        </div>
      </div>
    </div>
    <div className="w-full md:w-3/4 mx-auto mt-10">
      <div className="text-center px-3 md:px-0">
        Pasar Pagi merupakan sebuah platform yang disesuaikan untuk pengalaman berbelanja online yang mudah, aman, dan cepat.
        <br />
        Kami percaya bahwa kegiatan belanja online harus terjangkau, mudah, dan menyenangkan. Ini adalah visi yang ingin Pasar Pagi berikan melalui platform ini, setiap harinya.
      </div>
      <div className="text-center mt-10">
        <Link href={"/"} type="button" className="py-3 px-5 rounded-full bg-primary text-white">Jelajahi Pasar Pagi</Link>
      </div>
    </div>
    <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
      <div className="border rounded-lg shadow bg-white p-8">
        <h3 className="text-xl font-bold text-center">Tujuan Kami</h3>
        <p className="text-center mt-3 text-gray-600">Kami percaya pada kekuatan transformatif dari teknologi dan ingin mengubah dunia menjadi lebih baik dengan menyediakan platform untuk menghubungkan pembeli dan penjual dalam satu komunitas.</p>
      </div>
      <div className="border rounded-lg shadow bg-white p-8">
        <h3 className="text-xl font-bold text-center">Posisi Kami</h3>
        <p className="text-center mt-3 text-gray-600">Untuk pengguna Internet di seluruh wilayah, Shopee menawarkan pengalaman belanja online komprehensif, dari berbagai pilihan produk sampai ke sebuah komunitas sosial untuk bereksplorasi, dan layanan untuk selalu memenuhi kebutuhan konsumen tanpa hambatan.</p>
      </div>
    </div>
    <div className="w-full md:w-3/4 mx-auto mt-10 mb-14 bg-white border rounded-lg p-8">
      <h3 className="text-center text-xl font-bold">Kepribadian Kami</h3>
      <p className="text-center text-gray-600 px-0 md:px-24 mt-3">Untuk menggambarkan siapa kami dan bagaimana kami bereaksi terhadap situasi tertentu, pada dasarnya kami Simpel, Bahagia, dan Bersama-sama.</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col justify-center items-center">
          <div style={{height: 200}} className="w-full flex items-center justify-center rounded-lg bg-secondary">
            <Image src={"/undraw_note_list_re_r4u9.svg"} width={200} height={200} alt="simple" />
          </div>
          <div className="px-5 mt-6">
            <h3 className="text-lg font-bold text-center mb-3">Simpel</h3>
            <p className="text-center text-gray-600">Kami percaya akan kesederhanaan dan integritas. Memastikan kehidupan yang jujur, rendah hati, dan apa adanya.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div style={{height: 200}} className="w-full flex items-center justify-center rounded-lg bg-secondary">
            <Image src={"/undraw_happy_announcement_re_tsm0.svg"} width={200} height={200} alt="happy" />
          </div>
          <div className="px-5 mt-6">
            <h3 className="text-lg font-bold text-center mb-3">Bahagia</h3>
            <p className="text-center text-gray-600">Kami ramah, menyenangkan dan energetik, serta menyebarkan sukacita kepada semua orang yang kami temui.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div style={{height: 200}} className="w-full flex items-center justify-center rounded-lg bg-secondary">
            <Image src={"/undraw_women_day_re_1xe8.svg"} width={200} height={200} alt="together" />
          </div>
          <div className="px-5 mt-6">
            <h3 className="text-lg font-bold text-center mb-3">Bersama-sama</h3>
            <p className="text-center text-gray-600">Kami menikmati menghabiskan waktu bersama dengan teman-teman dan keluarga sekaligus berbelanja online.</p>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>)
}