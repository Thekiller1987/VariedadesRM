const DiscountService = require('../../spec/helpers/jasmine_examples/DiscountService');

describe('DiscountService', function() {
    let discountService;

    beforeEach(function() {
        discountService = new DiscountService();
    });

    it('should apply discount correctly', function() {
        const price = 100;
        const discountPercentage = 20;
        const discountedPrice = discountService.applyDiscount(price, discountPercentage);
        expect(discountedPrice).toBe(80);
    });

    it('should handle zero discount', function() {
        const price = 100;
        const discountPercentage = 0;
        const discountedPrice = discountService.applyDiscount(price, discountPercentage);
        expect(discountedPrice).toBe(100);
    });

    it('should handle maximum discount', function() {
        const price = 100;
        const discountPercentage = 100;
        const discountedPrice = discountService.applyDiscount(price, discountPercentage);
        expect(discountedPrice).toBe(0);
    });
});