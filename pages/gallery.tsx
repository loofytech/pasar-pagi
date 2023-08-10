import AppLayout from "@/layouts/AppLayout";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [data, setData] = useState<any>([]);

  const getGallery = async () => {
    const request = await fetch("/sample/gallery.json");
    const response = await request.json();

    return setData(response);
  }

  useEffect(() => {
    getGallery();
  }, []);

  return (<AppLayout>
    <div className="w-3/4 mx-auto py-10 grid grid-cols-1 gap-5">
      {data.length > 0 && data.map((dt: any, ix: number) => {
        return (<div className="flex items-start gap-5">
          <div className="w-full md:w-72 lg:w-80">
            <h3 className="font-bold">{dt.title}</h3>
            <div className="text-sm">{dt.description}</div>
          </div>
          <div className="w-full md:w-auto flex-1">
            <div className="gap-4 grid grid-cols-4">
              {dt.photos.length > 0 && dt.photos.map((dtp: any, ixl: number) => {
                return (<div className="w-full h-28 bg-blue-200 rounded-lg overflow-hidden p-2">
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