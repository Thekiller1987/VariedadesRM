class SalesHelper {
    constructor() {
        this.sales = [];
    }

    addSale(customerName, product, quantity, price, discount = 0) {
        const totalAmount = this.calculateTotalAmount(quantity, price, discount);
        const sale = { customerName, product, quantity, price, discount, totalAmount, date: new Date() };
        this.sales.push(sale);
    }

    calculateTotalAmount(quantity, price, discount) {
        const total = quantity * price;
        return total - (total * (discount / 100));
    }

    generateSalesReport(startDate, endDate) {
        return this.sales.filter(sale => sale.date >= startDate && sale.date <= endDate);
    }

    generateSalesSummary() {
        let totalSales = 0;
        let totalItemsSold = 0;

        this.sales.forEach(sale => {
            totalSales += sale.totalAmount;
            totalItemsSold += sale.quantity;
        });

        return {
            totalSales,
            totalItemsSold
        };
    }
}

module.exports = SalesHelper;
