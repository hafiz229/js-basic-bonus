const products = [
  { name: "samsung s3 phone", price: 12000 },
  { name: "asus laptop", price: 30000 },
  { name: "apple watch", price: 10000 },
  { name: "binding paper", price: 100 },
  { name: "smart phone", price: 15000 },
  { name: "old phone", price: 100 },
];

function searchProducts(products, searchText) {
  const matched = [];
  searchText = searchText.toLowerCase();
  for (const product of products) {
    const name = product.name;
    if (name.indexOf(searchText) != -1) {
      matched.push(product);
    }
  }
  return matched;
}
const matched = searchProducts(products, "PHONE");
console.log(matched);
