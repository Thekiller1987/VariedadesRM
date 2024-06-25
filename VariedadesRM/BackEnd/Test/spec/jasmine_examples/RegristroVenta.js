class SalesService {
    constructor() {
        this.sales = [];
    }

    /**
     * Registra una nueva venta si los datos son válidos.
     * @param {string} customerName - Nombre del cliente.
     * @param {string} product - Nombre del producto vendido.
     * @param {number} quantity - Cantidad vendida.
     * @param {number} price - Precio por unidad del producto.
     * @returns {Object} - Un objeto con propiedades `success` y `message` que indican si el registro fue exitoso y un mensaje adicional.
     */
    registerSale(customerName, product, quantity, price) {
        if (this.isValidSale(customerName, product, quantity, price)) {
            const totalAmount = quantity * price;
            const sale = { customerName, product, quantity, price, totalAmount };
            this.sales.push(sale);
            return { success: true, message: "Venta registrada exitosamente." };
        } else {
            return { success: false, message: "Datos de la venta no válidos." };
        }
    }

    /**
     * Verifica si los datos de la venta son válidos.
     * @param {string} customerName - Nombre del cliente.
     * @param {string} product - Nombre del producto vendido.
     * @param {number} quantity - Cantidad vendida.
     * @param {number} price - Precio por unidad del producto.
     * @returns {boolean} - `true` si los datos son válidos, `false` de lo contrario.
     */
    isValidSale(customerName, product, quantity, price) {
        return customerName.trim().length > 0 && product.trim().length > 0 && quantity > 0 && price > 0;
    }
}

module.exports = SalesService;
