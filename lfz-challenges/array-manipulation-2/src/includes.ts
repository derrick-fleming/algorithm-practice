
export default function includes(arr: any, value: any){
  const output = arr.indexOf(value);
  if (output !== -1) return true
  return false;
}
