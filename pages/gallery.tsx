import AppLayout from "@/layouts/AppLayout";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Gallery() {
  const [data, setData] = useState<any>([]);
  const router = useRouter();

  const getGallery = async () => {
    const request = await fetch("/sample/gallery.json");
    const response = await request.json();

    return setData(response);
  }

  useEffect(() => {
    getGallery();
  }, []);

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
    <div className="w-3/4 mx-auto py-10 grid grid-cols-1 gap-5">
      {data.length > 0 && data.map((dt: any, ix: number) => {
        return (<div className="flex items-start gap-5" key={ix}>
          <div className="w-full md:w-72 lg:w-80">
            <h3 className="font-bold">{dt.title}</h3>
            <div className="text-sm">{dt.description}</div>
          </div>
          <div className="w-full md:w-auto flex-1">
            <div className="gap-4 grid grid-cols-4">
              {dt.photos.length > 0 && dt.photos.map((dtp: any, ixl: number) => {
                return (<div className="w-full h-28 bg-blue-200 rounded-lg overflow-hidden p-2" key={ixl}>
                  <div className="w-full h-full bg-white bg-cover" style={{backgroundImage: `url(${dtp})`}}></div>
                </div>);
              })}
            </div>
          </div>
        </div>);
      })}
    </div>
  </AppLayout>)
}