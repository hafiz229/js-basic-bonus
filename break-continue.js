const products = [
  { name: "samsung s3 phone", price: 12000 },
  { name: "asus laptop", price: 30000 },
  { name: "dell laptop", price: 45000 },
  { name: "apple watch", price: 10000 },
  { name: "binding paper", price: 100 },
  { name: "smart phone", price: 15000 },
  { name: "old phone", price: 100 },
];

// for (const product of products) {
//   if (product.price < 10000) {
//     break;
//   }
//   console.log(product);
// }

for (const product of products) {
  if (product.price < 10000) {
    continue;
  }
  console.log(product);
}
