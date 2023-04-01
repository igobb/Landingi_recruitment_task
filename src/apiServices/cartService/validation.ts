import * as yup from "yup";

export const addCartSchema = yup.object({
  userId: yup.number().required("Id of user is required"),
  productId: yup.number().required("You must choosen product"),
  productQuantity: yup.number().required("You must select value").test("Is positive?", "Quantity must be greater than 0!", (value) => value > 0),
});

// export type FormValues = yup.InferType<typeof addCartSchema> & { id?: string };
