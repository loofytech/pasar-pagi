export const formatIDR = (param: string | number) => {
  let format = param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return format;
}

export const completeCheckoutCOD = (data?: any) => {
  // *Nama Lenagkap* Agung Ardiyanto
  // *Email* agungd3v@gmail.com
  // *No. Telepon / HP* 082179099557
  // *Alamat Lengkap* Rahasia illahi
  const name = "*Nama%20Lenagkap*%20Agung%20Ardiyanto";
  const email = "*Email*%20agungd3v@gmail.com";
  const phone = "*No.%20Telepon%20/%20HP*%20082179099557";
  const address = "*Alamat%20Lengkap*%20Rahasia%20illahi";

  const productName = "https://loofytech.com";
  const productPrice = "Rp23.500";
  const productQuantity = "2";
  const subTotal = "Rp47.000";

  const txt = `https://api.whatsapp.com/send?phone=6281398170163&text=${name}%0A${email}%0A${phone}%0A${address}%0A%0A*Informasi%20Pesanan*%0A${productName}%0A*${productPrice}%20(x${productQuantity})*%0A%0ASubtotal%20*${subTotal}*`;

  return window.open(txt);
}