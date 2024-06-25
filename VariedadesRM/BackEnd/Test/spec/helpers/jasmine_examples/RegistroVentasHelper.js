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
     */
    addSale(customerName, product, quantity, price) {
        const totalAmount = quantity * price;
        const sale = { customerName, product, quantity, price, totalAmount };
        this.sales.push(sale);
    }

    /**
     * Verifica si una venta ya está registrada.
     * @param {string} customerName - Nombre del cliente.
     * @param {string} product - Nombre del producto vendido.
     * @returns {boolean} - `true` si la venta ya está registrada, `false` de lo contrario.
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
}

module.exports = SalesHelper;
