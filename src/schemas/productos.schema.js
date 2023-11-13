import { z } from "zod";

export const bodyProductos = z.object({
    nombre : z.string(),
    margen : z.number(),
    packaging : z.number(),
    agregado : z.number(),
    cantidadReceta : z.number(),
})

const bodyIngredientesCantidad = z.object({
    id : z.string(),
    cantidad : z.number()
})


export const bodyProductosIngrdientes = z.object({
        ingredientes : z.array(bodyIngredientesCantidad)
})