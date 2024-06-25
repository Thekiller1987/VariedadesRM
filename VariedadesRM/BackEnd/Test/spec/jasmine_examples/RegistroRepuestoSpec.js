const SparePartService = require('./RegistroRepuesto');

describe('SparePartService', function() {
    let sparePartService;

    beforeEach(function() {
        sparePartService = new SparePartService();
    });

    it('should register a spare part successfully with valid data', function() {
        const result = sparePartService.registerSparePart('Filtro de aire', 'FA1234', 10);
        expect(result.success).toBe(true);
        expect(result.message).toBe("Repuesto registrado exitosamente.");
        expect(sparePartService.spareParts.length).toBe(1);
    });

    it('should not register a spare part with invalid data', function() {
        let result = sparePartService.registerSparePart('', 'FA1234', 10);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos del repuesto no válidos.");
        expect(sparePartService.spareParts.length).toBe(0);

        result = sparePartService.registerSparePart('Filtro de aire', '', 10);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos del repuesto no válidos.");
        expect(sparePartService.spareParts.length).toBe(0);

        result = sparePartService.registerSparePart('Filtro de aire', 'FA1234', -5);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos del repuesto no válidos.");
        expect(sparePartService.spareParts.length).toBe(0);
    });

    it('should validate spare part data correctly', function() {
        expect(sparePartService.isValidSparePart('Filtro de aire', 'FA1234', 10)).toBe(true);
        expect(sparePartService.isValidSparePart('', 'FA1234', 10)).toBe(false);
        expect(sparePartService.isValidSparePart('Filtro de aire', '', 10)).toBe(false);
        expect(sparePartService.isValidSparePart('Filtro de aire', 'FA1234', -5)).toBe(false);
    });
});
