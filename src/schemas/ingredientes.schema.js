import { z } from "zod";

export const bodyIngredientes = z.object({
    nombre : z.string(),
    costo : z.number(),
    unidad : z.string(),
    cantidad : z.number()
})