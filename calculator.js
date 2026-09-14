function calculateTotal(price, quantity) {
  return price * quantity;
}

function applyDiscount(total, discountPercent) {
  return total - discountPercent;
}

module.exports = {
  calculateTotal,
  applyDiscount
};
