const SalesHelper = require('../../lib/jasmine_examples/GenerarInforme');

describe('SalesHelper', function() {
    let salesHelper;

    beforeEach(function() {
        salesHelper = new SalesHelper();
    });

    it('should add a sale and calculate the total amount correctly', function() {
        // Arrange
        salesHelper.addSale('John Doe', 'Laptop', 2, 1500, 10);
        
        // Act
        const sale = salesHelper.sales[0];
        
        // Assert
        expect(salesHelper.sales.length).toBe(1);
        expect(sale.totalAmount).toBe(2700); // 3000 - 10% discount
    });

    it('should generate a sales report within a date range', function() {
        // Arrange
        salesHelper.addSale('John Doe', 'Laptop', 2, 1500);
        salesHelper.addSale('Jane Doe', 'Phone', 1, 800);
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2024-12-31');

        // Act
        const report = salesHelper.generateSalesReport(startDate, endDate);

        // Assert
        expect(report.length).toBe(2);
    });

    it('should generate a sales summary correctly', function() {
        // Arrange
        salesHelper.addSale('John Doe', 'Laptop', 2, 1500);
        salesHelper.addSale('Jane Doe', 'Phone', 1, 800);

        // Act
        const summary = salesHelper.generateSalesSummary();

        // Assert
        expect(summary.totalSales).toBe(3800);
        expect(summary.totalItemsSold).toBe(3);
    });
});
