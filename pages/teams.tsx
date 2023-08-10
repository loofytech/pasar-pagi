import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";

export default function Teams() {
  return (<AppLayout>
    <div className="w-full md:w-3/4 mx-auto my-10 md:my-20 px-5 md:px-0">
      <h1 className="text-center text-3xl font-bold text-primary">Meet the marketing team that crafts perfection</h1>
      <div className="grid cols-grid-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className="bg-white rounded-lg px-5 py-10 flex flex-col items-center justify-center">
          <div style={{width: 100, height: 100}} className="overflow-hidden rounded-full border-4 border-primary mb-3">
            <Image src={"/teams/1.jpg"} width={100} height={100} className="" alt="" />
          </div>
          <h4 className=" font-bold">Ustadz Ave Suakanila F, S.Pd</h4>
          <h6 className="text-sm font-bold text-primary">Chief Project Director</h6>
        </div>
        <div className="bg-white rounded-lg px-5 py-10 flex flex-col items-center justify-center">
          <div style={{width: 100, height: 100}} className="overflow-hidden rounded-full border-4 border-primary mb-3">
            <Image src={"/teams/2.png"} width={100} height={100} className="" alt="" />
          </div>
          <h4 className=" font-bold">M Romadona, S.Pd</h4>
          <h6 className="text-sm font-bold text-primary">Head of Project</h6>
        </div>
        <div className="bg-white rounded-lg px-5 py-10 flex flex-col items-center justify-center">
          <div style={{width: 100, height: 100}} className="overflow-hidden rounded-full border-4 border-primary mb-3">
            <Image src={"/teams/3.png"} width={100} height={100} className="" alt="" />
          </div>
          <h4 className=" font-bold">Nurul Indah Safitri</h4>
          <h6 className="text-sm font-bold text-primary">Creative Director</h6>
        </div>
        <div className="bg-white rounded-lg px-5 py-10 flex flex-col items-center justify-center">
          <div style={{width: 100, height: 100}} className="overflow-hidden rounded-full border-4 border-primary mb-3">
            <Image src={"/teams/4.jpg"} width={100} height={100} className="" alt="" />
          </div>
          <h4 className="text-center font-bold">Arif Putra Permana</h4>
          <h6 className="text-sm font-bold text-primary">Project Director</h6>
        </div>
      </div>
    </div>
  </AppLayout>)
}