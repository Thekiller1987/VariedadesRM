const SparePartService = require('./ActualizarRepuesto');

describe('SparePartService - Update Spare Part', function() {
    let sparePartService;

    beforeEach(function() {
        sparePartService = new SparePartService();
        sparePartService.registerSparePart('Filtro de aire', 'FA1234', 10);
    });

    it('should update a spare part successfully with valid data', function() {
        const result = sparePartService.updateSparePart('FA1234', 'Filtro de aire actualizado', 15);
        expect(result.success).toBe(true);
        expect(result.message).toBe("Repuesto actualizado exitosamente.");

        const updatedSparePart = sparePartService.spareParts.find(sp => sp.partNumber === 'FA1234');
        expect(updatedSparePart.name).toBe('Filtro de aire actualizado');
        expect(updatedSparePart.quantity).toBe(15);
    });

    it('should not update a spare part with invalid data', function() {
        let result = sparePartService.updateSparePart('FA1234', '', 15);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos del repuesto no válidos o repuesto no encontrado.");

        result = sparePartService.updateSparePart('FA1234', 'Filtro de aire actualizado', -5);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos del repuesto no válidos o repuesto no encontrado.");
    });

    it('should not update a non-existing spare part', function() {
        const result = sparePartService.updateSparePart('FA9999', 'Filtro inexistente', 15);
        expect(result.success).toBe(false);
        expect(result.message).toBe("Datos del repuesto no válidos o repuesto no encontrado.");
    });
});
