export default function FilterProduct() {
  return (<div className="w-full md:w-60 static md:sticky top-28 bg-white rounded-lg md:rounded overflow-hidden">
    <div className="bg-primary font-bold text-white p-3 tracking-wider">Filter</div>
    <div className="p-3 flex flex-col items-start gap-1.5 text-sm">
      <button type="button" className="block">Aksesoris</button>
      <button type="button" className="block">Pakaian Pria</button>
      <button type="button" className="block">Pakaian Wanita</button>
      <button type="button" className="block">Makanan Ringan</button>
    </div>
  </div>);
}