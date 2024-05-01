export const Unidades = [
    "kg",
    "gr",
    "l",
    "ml",
    "unidad"
]
export class Ingrediente {
    constructor(id, name, cost, unidad, cantidad) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.unidad = unidad;
        this.cantidad = cantidad;
    }
    get getId() {
        return this.id;
    }
    get getname() {
        return this.name;
    }
    get getcost() {
        return this.cost;
    }
    get getUnidad() {
        return this.unidad;
    }
    get getCantidad() {
        return this.cantidad;
    }

    /**
     * @param {any} x
     */
    set setId(x) {
        this.id = x;
    }
    /**
     * @param {any} x
     */
    set setname(x) {
        this.name = x;
    }
    /**
     * @param {any} x
     */
    set setcost(x) {
        this.cost = x;
    }
    /**
     * @param {any} x
     */
    set setUnidad(x) {
        this.unidad = x;
    }
    /**
     * @param {any} x
     */
    set setCantidad(x) {
        this.cantidad = x;
    }
    costCantidad(cantidad) {
        return cantidad * this.cost / this.cantidad;
    }
}
export class Producto {
    constructor(id, name, margen, packaging,  aggregate, amountRecipe, ingredientes) {
        this.id = id;
        this.name = name;
        this.margen = margen;
        this.packaging = packaging;
        this.aggregate = aggregate;
        this.amountRecipe = amountRecipe;
        this.ingredientes = ingredientes;
        this.cost = this.calcularcost();
    }
    get getId() {
        return this.id;
    }
    get getname() {
        return this.name;
    }
    get getMargen() {
        return this.margen;
    }
    get getPackaging() {
        return this.packaging;
    }
    get getIngredientes() {
        return this.ingredientes;
    }
    get getcost() {
        return this.cost;
    }
    get getaggregate() {
        return this.aggregate;
    }
    get getamountRecipe() {
        return this.amountRecipe;
    }
    /**
     * @param {any} x
     */
    set setId(x) {
        this.id = x;
    }
    /**
     * @param {any} x
     */
    set setname(x) {
        this.name = x;
    }
    /**
     * @param {any} x
     */
    set setMargen(x) {
        this.margen = x;
    }
    /**
     * @param {any} x
     */
    set setPackaging(x) {
        this.packaging = x;
    }
    /**
     * @param {any} x
     */
    set setIngredientes(x) {
        this.ingredientes = x;
    }
    /**
     * @param {any} x
     */
    set setcost(x) {
        this.cost = x;
    }
    /**
     * @param {any} x
     */
    set setaggregate(x) {
        this.aggregate = x;
    }
    /**
     * @param {any} x
     */
    set setamountRecipe(x) {
        this.amountRecipe = x;
    }
    calcularcost() {
        let costTotal = this.calcularcostUnidad();
        this.cost = ((costTotal + this.packaging) * ((this.aggregate / 100) + 1)) * ((this.margen / 100) + 1);
        return this.cost;
    }
    calcularcostIngredientes() { 
        let costTotal = 0;
        if (this.ingredientes != null) {
            this.ingredientes.forEach(element => {
                costTotal += element.ingrediente.costCantidad(element.amount);
            });
        }
        return costTotal;
    }
    calcularcostUnidad() { 
        let costTotal = this.calcularcostIngredientes();
        if (this.amountRecipe == null) {
            this.setamountRecipe = 1;
        }
        return costTotal/this.amountRecipe;
    }
    buscarIngredientes(buscado) {
        let encontrados = {
            getIngredientes: []
        };
        this.ingredientes.find(ingredient => {
            let cont = 0;
            let n1 = ingredient[0].getname.toLowerCase();
            buscado = buscado.toLowerCase();
            for (let i = 0; i < buscado.length; i++) {
                if (n1[i] === buscado[i]) {
                    cont++;
                }
            }
            if (cont == buscado.length) {
                encontrados.getIngredientes.push(ingredient);
            }
        });
        return encontrados;
    }
}
export class Sistema {
    constructor(productos, ingredientes) {
        this.productos = productos;
        this.ingredientes = ingredientes;
    }
    get getProductos() {
        return this.productos;
    }
    get getIngredientes() {
        return this.ingredientes;
    }
    /**
     * @param {any} x
     */
    set setProductos(x) {
        this.productos = x;
    }
    /**
     * @param {any} x
     */
    set setIngredientes(x) {
        this.ingredientes = x;
    }

    buscarIngredientes(buscado) {
        let encontrados = [];
        this.ingredientes.find(ingredient => {
            let cont = 0;
            let n1 = ingredient.getname.toLowerCase();
            buscado = buscado.toLowerCase();
            for (let i = 0; i < buscado.length; i++) {
                if (n1[i] === buscado[i]) {
                    cont++;
                }
            }
            if (cont == buscado.length) {
                encontrados.push(ingredient);
            }
        });
        return encontrados;
    }
    buscarProductos(buscado) {
        let encontrados = [];
        this.productos.find(producto => {
            let cont = 0;
            let n1 = producto.getname.toLowerCase();
            buscado = buscado.toLowerCase();
            for (let i = 0; i <= buscado.length; i++) {
                if (n1[i] === buscado[i]) {
                    cont++;
                }
            }
            if (cont == buscado.length) {
                encontrados.push(producto);
            }
        });
        return encontrados;
    }
    verificarIngrediente(ingrediente) {
        return(this.verificarnameIngrediente(ingrediente) && this.verificarNumerosIngrediente(ingrediente));
    }
    verificarnameIngrediente(ingrediente) {
        return this.ingredientes.some(currentIngrediente => {
            return(currentIngrediente.getname == ingrediente.getname);
        });
    }
    verificarNumerosIngrediente(ingrediente) {
        return(typeof ingrediente.getcost === "number" && typeof ingrediente.getCantidad === "number")
    }
    agregaringrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }
    verificarnameProducto(producto) {
        return this.productos.some(currentProducto => {
            return(currentProducto.getname === producto.getname);
        });
    }
    verificarNumerosProductos(producto) {
        return(typeof producto.getPackging === "number" && typeof producto.getMargen === "number" && typeof producto.getaggregate === "number" && typeof producto.getamountRecipe === "number");
    }
    verificarProducto(producto) {
        return this.verificarNumerosProductos(producto) && this.verificarnameProducto(producto);
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
}

