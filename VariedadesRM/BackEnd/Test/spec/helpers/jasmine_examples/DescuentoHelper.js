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
        const sale = { customerName, product, quantity, price, discount, totalAmount };
        this.sales.push(sale);
    }

    /**
     * Verifica si una venta ya está registrada.
     * @param {string} customerName - Nombre del cliente.
     * @param {string} product - Nombre del producto vendido.
     * @returns {boolean} - true si la venta ya está registrada, false de lo contrario.
     */
    isSaleRegistered(customerName, product) {
        return this.sales.some(sale => sale.customerName === customerName && sale.product === product);
    }

    /**
     * Obtiene todas las ventas registradas.
     * @returns {Array} - Lista de todas las ventas registradas.
     */
    getAllSales() {
        return this.sales;
    }

    /**
     * Limpia la lista de ventas registradas.
     */
    clearSales() {
        this.sales = [];
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
}

module.exports = SalesHelper;