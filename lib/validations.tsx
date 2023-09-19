import * as z from "zod";

export const CreatePromptValidation = z.object({
  tag: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(15, { message: "Maximum 15 caracters." }),
  prompt: z
    .string()
    .min(10, { message: "Minimum 10 characters." })
    .max(500, { message: "Maximum 500 caracters." }),
});