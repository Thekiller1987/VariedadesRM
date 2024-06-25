class SparePartService {
    constructor() {
        this.spareParts = [];
    }

    /**
     * Registra un nuevo repuesto si los datos son válidos.
     * @param {string} name - Nombre del repuesto.
     * @param {string} partNumber - Número de parte del repuesto.
     * @param {number} quantity - Cantidad disponible del repuesto.
     * @returns {Object} - Un objeto con propiedades `success` y `message` que indican si el registro fue exitoso y un mensaje adicional.
     */
    registerSparePart(name, partNumber, quantity) {
        if (this.isValidSparePart(name, partNumber, quantity)) {
            const sparePart = { name, partNumber, quantity };
            this.spareParts.push(sparePart);
            return { success: true, message: "Repuesto registrado exitosamente." };
        } else {
            return { success: false, message: "Datos del repuesto no válidos." };
        }
    }

    /**
     * Verifica si los datos del repuesto son válidos.
     * @param {string} name - Nombre del repuesto.
     * @param {string} partNumber - Número de parte del repuesto.
     * @param {number} quantity - Cantidad disponible del repuesto.
     * @returns {boolean} - `true` si los datos son válidos, `false` de lo contrario.
     */
    isValidSparePart(name, partNumber, quantity) {
        return name.trim().length > 0 && partNumber.trim().length > 0 && quantity > 0;
    }
}

module.exports = SparePartService;
