const SalesService = require('./RegristroVenta'); // Asegúrate de que la ruta sea correcta

describe('SalesService', function() {
    let salesService;

    beforeEach(function() {
        salesService = new SalesService();
    });

    it('should register a sale successfully with valid data', function() {
        const result = salesService.registerSale('John Doe', 'Laptop', 2, 1500);
        expect(result.success).toBe(true);
        expect(result.message).toBe("Venta registrada exitosamente.");
        expect(salesService.sales.length).toBe(1);
        
        const sale = salesService.sales[0];
        expect(sale.customerName).toBe('John Doe');
        expect(sale.product).toBe('Laptop');
        expect(sale.quantity).toBe(2);
        expect(sale.price).toBe(1500);
        expect(sale.totalAmount).toBe(3000);
    });

    it('should not register a sale with invalid data', function() {
        let result = salesService.registerSale('', 'Laptop', 2, 1500);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos de la venta no válidos.");
        expect(salesService.sales.length).toBe(0);

        result = salesService.registerSale('John Doe', '', 2, 1500);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos de la venta no válidos.");
        expect(salesService.sales.length).toBe(0);

        result = salesService.registerSale('John Doe', 'Laptop', -1, 1500);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos de la venta no válidos.");
        expect(salesService.sales.length).toBe(0);

        result = salesService.registerSale('John Doe', 'Laptop', 2, -1500);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos de la venta no válidos.");
        expect(salesService.sales.length).toBe(0);
    });

    it('should validate sale data correctly', function() {
        expect(salesService.isValidSale('John Doe', 'Laptop', 2, 1500)).toBe(true);
        expect(salesService.isValidSale('', 'Laptop', 2, 1500)).toBe(false);
        expect(salesService.isValidSale('John Doe', '', 2, 1500)).toBe(false);
        expect(salesService.isValidSale('John Doe', 'Laptop', -1, 1500)).toBe(false);
        expect(salesService.isValidSale('John Doe', 'Laptop', 2, -1500)).toBe(false);
    });
});
