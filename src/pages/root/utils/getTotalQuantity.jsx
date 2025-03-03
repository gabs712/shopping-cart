export default function getTotalQuantity(data) {
  const quantity = data.reduce((acc, item) => acc + item.quantity, 0)
  if (quantity > 999) {
    return 999
  }
  return quantity
}
