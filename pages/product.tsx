import FilterProduct from "@/components/FilterProduct";
import AppLayout from "@/layouts/AppLayout";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { formatIDR } from "@/utils/globalFunction";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Product() {
  const [products, setProducts] = useState<any>([]);
  const [pict, setPict] = useState<string>("");

  const router = useRouter();

  const requestProduct = async () => {
    try {
      const request = await fetch("/sample/product.json");
      const response = await request.json();

      return setProducts(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestProduct();
  }, []);

  return (<AppLayout>
    <div className="h-32 bg-primary relative"></div>
    <div className="select-none text-sm flex items-center relative -top-6 rounded-md p-3 shadow bg-white w-full md:w-3/4 mx-auto">
      <Link href={"/"} className="text-primary">Beranda</Link>
      <BiChevronRight size={20} />
      <span className="">Produk Siswa</span>
    </div>
    <div className="w-full px-5 md:px-0 md:w-3/4 mx-auto flex flex-col md:flex-row gap-5 mb-8">
      <div>
        <FilterProduct />
      </div>
      <div className="w-full gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((dts: any, ins: number) => {
          return <Card
            key={ins}
            hoverable
            className="c-product shadow"
            cover={
              <Image
                alt="product"
                src={dts.photo}
                width={300}
                height={201}
                rel="preload"
                onError={() => setPict(`/pasar_pagi.png`)}
              />
            }
            onClick={() => router.push(`/product/${dts.id}`)}
          >
            <div className="h-10 overflow-hidden leading-5">{dts.product_name}</div>
            <div className="mt-3 text-lg font-bold text-primary">Rp{formatIDR(dts.product_price)}</div>
          </Card>
        })}
      </div>
    </div>
  </AppLayout>);
}