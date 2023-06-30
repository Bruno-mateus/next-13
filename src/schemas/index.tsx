import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter no minímo 3 caracteres." })
    .refine((name) => name.trim().length > 0, {
      message: "Espaços em branco não são considerado caracteres validos.",
    }),
  lastname: z
    .string()
    .min(3, { message: "O sobrenome precisa ter no minímo 3 caracteres." })
    .refine((name) => name.trim().length > 0, {
      message: "Espaços em branco não são considerado caracteres validos.",
    }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(8, { message: "A senha necessita ter no minimo 8 caractéres" })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, {
      message:
        "A senha necessita ter ao menos um número ou uma letra e no mínimo 8 caracteres",
    }),
});

export const AuthSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(8, { message: "A senha necessita ter no minimo 8 caractéres" })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, {
      message:
        "A senha necessita ter ao menos um número ou uma letra e no mínimo 8 caracteres",
    }),
});