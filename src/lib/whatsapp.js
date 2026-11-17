export function waLink(number, text = "") {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
