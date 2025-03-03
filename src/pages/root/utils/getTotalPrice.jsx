export default function getTotalPrice(data) {
  return data
    .reduce((acc, item) => {
      if (item.quantity <= 0) return acc
      return acc + item.price * item.quantity
    }, 0)
    .toFixed(2)
}
