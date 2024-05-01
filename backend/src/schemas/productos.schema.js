import { z } from "zod";

const bodyIngredientesCantidad = z.object({
  id: z.string({
    required_error: "ingrediente is required",
  }),
  amount: z.number({
    required_error: "amount is required",
  }),
});

export const bodyProductosIngrdientes = z.array(bodyIngredientesCantidad, {
  required_error: "ingredinetes is required",
})

export const bodyProductos = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  margen: z.number({
    required_error: "Margen is required",
  }),
  packaging: z.number({
    required_error: "Packaging is required",
  }),
  aggregate: z.number({
    required_error: "Aggregate is required",
  }),
  amountRecipe: z.number({
    required_error: "Amount Recipe is required",
  }),
  ingredientes: bodyProductosIngrdientes,
});
