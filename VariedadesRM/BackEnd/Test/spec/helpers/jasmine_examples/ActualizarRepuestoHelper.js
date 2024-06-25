class SparePartHelper {
    constructor() {
        this.spareParts = [];
    }

    /**
     * Agrega un repuesto a la lista de repuestos registrados.
     * @param {string} name - Nombre del repuesto.
     * @param {string} partNumber - Número de parte del repuesto.
     * @param {number} quantity - Cantidad disponible del repuesto.
     */
    addSparePart(name, partNumber, quantity) {
        const sparePart = { name, partNumber, quantity };
        this.spareParts.push(sparePart);
    }

    /**
     * Verifica si un repuesto ya está registrado.
     * @param {string} partNumber - Número de parte del repuesto.
     * @returns {boolean} - `true` si el repuesto ya está registrado, `false` de lo contrario.
     */
    isSparePartRegistered(partNumber) {
        return this.spareParts.some(sparePart => sparePart.partNumber === partNumber);
    }

    /**
     * Obtiene todos los repuestos registrados.
     * @returns {Array} - Lista de todos los repuestos registrados.
     */
    getAllSpareParts() {
        return this.spareParts;
    }

    /**
     * Limpia la lista de repuestos registrados.
     */
    clearSpareParts() {
        this.spareParts = [];
    }
}

module.exports = SparePartHelper;
