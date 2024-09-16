export default function formatPrice(number) {
  const newPrice = Intl.NumberFormat("ba-BH", {
    style: "currency",
    currency: "BAM",
  }).format(number / 10);
  return newPrice;
}
