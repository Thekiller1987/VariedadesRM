const SalesHelper = require('./GenerarInforme');

class SalesService {
    constructor() {
        this.salesHelper = new SalesHelper();
    }

    registerSale(customerName, product, quantity, price, discount = 0) {
        if (this.isValidSale(customerName, product, quantity, price, discount)) {
            this.salesHelper.addSale(customerName, product, quantity, price, discount);
            return { success: true, message: "Venta registrada exitosamente." };
        } else {
            return { success: false, message: "Datos de la venta no válidos." };
        }
    }

    isValidSale(customerName, product, quantity, price, discount) {
        return customerName && product && quantity > 0 && price > 0 && discount >= 0;
    }

    generateSalesReport(startDate, endDate) {
        return this.salesHelper.generateSalesReport(startDate, endDate);
    }

    generateSalesSummary() {
        return this.salesHelper.generateSalesSummary();
    }
}

module.exports = SalesService;
