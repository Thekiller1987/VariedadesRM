class DiscountService {
    applyDiscount(price, discountPercentage) {
        return price - (price * (discountPercentage / 100));
    }
}

module.exports = DiscountService;