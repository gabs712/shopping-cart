export default function getAddedItems(data) {
  return data.filter((item) => item.quantity > 0)
}
