const menu = [
  { Menu: 'Ayam Goreng Krispi', Tipe: 'Makanan', Harga: 15000 },
  { Menu: 'Ayam Puk Puk (Bukan di geprek)', Tipe: 'Makanan', Harga: 13000 },
  { Menu: 'Ayam Bakar', Tipe: 'Makanan', Harga: 20000 },
  { Menu: 'Es Teh', Tipe: 'Minuman', Harga: 5000 },
  { Menu: 'Es Jeruk', Tipe: 'Minuman', Harga: 7000 }
];
function calculateTotalCost(order) {
  let totalCost = 0;

  order.forEach(item => {
      const menuItem = menu.find(menuItem => menuItem.Menu === item.menu);
      if (menuItem) {
          const taxRate = (menuItem.Tipe === 'Makanan') ? 1.05 : 1.03;
          totalCost += menuItem.Harga * item.quantity * taxRate;
      }
  });
  return totalCost * 1.15;
}
const rehanOrder = [
  { menu: 'Ayam Bakar', quantity: 2 },
  { menu: 'Es Teh', quantity: 1 }
];
const roniOrder = [
  { menu: 'Ayam Puk Puk (Bukan di geprek)', quantity: 1 },
  { menu: 'Es Teh', quantity: 3 }
];
const faizOrder = [
  { menu: 'Ayam Goreng Krispi', quantity: 1 },
  { menu: 'Ayam Puk Puk (Bukan di geprek)', quantity: 1 },
  { menu: 'Ayam Bakar', quantity: 1 },
  { menu: 'Es Teh', quantity: 1 },
  { menu: 'Es Jeruk', quantity: 1 }
];
const rehanCost = calculateTotalCost(rehanOrder);
const roniCost = calculateTotalCost(roniOrder);
const faizCost = calculateTotalCost(faizOrder);
console.log(`Rehan Whangsap harus membayar: ${rehanCost.toFixed(2)}`);
console.log(`Amba Roni harus membayar: ${roniCost.toFixed(2)}`);
console.log(`Faiz ngawi harus membayar: ${faizCost.toFixed(2)}`);
