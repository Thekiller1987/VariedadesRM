class SalesHelper {
    constructor() {
        this.sales = [];
    }

    /**
     * Agrega una venta a la lista de ventas registradas.
     * @param {string} customerName - Nombre del cliente.
     * @param {string} product - Nombre del producto vendido.
     * @param {number} quantity - Cantidad vendida.
     * @param {number} price - Precio por unidad del producto.
     * @param {number} discount - Descuento aplicado a la venta (en porcentaje).
     */
    addSale(customerName, product, quantity, price, discount = 0) {
        const totalAmount = this.calculateTotalAmount(quantity, price, discount);
        const sale = { customerName, product, quantity, price, discount, totalAmount, date: new Date() };
        this.sales.push(sale);
    }

    /**
     * Calcula el monto total después de aplicar el descuento.
     * @param {number} quantity - Cantidad vendida.
     * @param {number} price - Precio por unidad del producto.
     * @param {number} discount - Descuento aplicado a la venta (en porcentaje).
     * @returns {number} - Monto total después de aplicar el descuento.
     */
    calculateTotalAmount(quantity, price, discount) {
        const total = quantity * price;
        return total - (total * (discount / 100));
    }

    /**
     * Genera un informe de ventas en un rango de fechas específico.
     * @param {Date} startDate - Fecha de inicio del informe.
     * @param {Date} endDate - Fecha de fin del informe.
     * @returns {Array} - Lista de ventas en el rango de fechas especificado.
     */
    generateSalesReport(startDate, endDate) {
        return this.sales.filter(sale => sale.date >= startDate && sale.date <= endDate);
    }

    /**
     * Genera un resumen de ventas totales.
     * @returns {Object} - Un objeto con el total de ventas y la cantidad total de artículos vendidos.
     */
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