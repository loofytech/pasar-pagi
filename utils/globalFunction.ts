export const formatIDR = (param: string | number) => {
  let format = param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return format;
}