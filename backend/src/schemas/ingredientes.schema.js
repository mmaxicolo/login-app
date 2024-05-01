import { z } from "zod";

export const bodyIngredientes = z.object({
    name : z.string({
        required_error: 'name is required'
    }),
    cost : z.number({
        required_error: 'cost is required'
    }),
    unit : z.string({
        required_error: 'unit is required'
    }),
    amount : z.number({
        required_error: 'amount is required'
    })
})