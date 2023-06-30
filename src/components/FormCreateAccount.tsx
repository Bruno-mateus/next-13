"use client"

import { api } from "@/lib/axios"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from 'zod'
import { UserSchema } from "@/schemas";
import { FormError } from "./FormError";
import { useRouter } from "next/navigation";

export function FormCreateAccount() {
    
 const {push}= useRouter() 

    type UserType = z.infer<typeof UserSchema>
    
    const {
      handleSubmit,
      formState: { errors, isSubmitting },
      register,
    } = useForm<UserType>({
      resolver: zodResolver(UserSchema),
    });

  async function handleForm(data: UserType) {
    
       try {
       await api.post(
         "users/create-user",
         {
           email: data.email,
           name: data.name,
           lastname: data.lastname,
           password: data.password,
         },
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
         push('/signin')
       } catch (err) {
         if (err instanceof AxiosError && err?.response?.data?.error  ) {
           alert(err.response.data.error);
         }
         return console.error(err);
       }
   }
    return (
      <form
        action="submit"
        onSubmit={handleSubmit(handleForm)}
        className="p-4 w-full max-w-lg flex gap-4 flex-col "
      >
        <label className="flex flex-col gap-2">
          <input
            type="text"
            {...register("name")}
            placeholder="Seu nome"
            className="p-4 text-lg w-full bg-gray-900 text-gray-100 placeholder-gray-300"
          />
          {errors.name?.message ? (
            <FormError> {errors.name?.message}</FormError>
          ) : (
            ""
          )}
        </label>
        <label className="flex flex-col gap-2">
          <input
            type="text"
            {...register("lastname")}
            placeholder="Seu sobrenome"
            className="p-4 text-lg w-full bg-gray-900 text-gray-100 placeholder-gray-300"
          />
          {errors.lastname?.message ? (
            <FormError> {errors.lastname?.message}</FormError>
          ) : (
            ""
          )}
        </label>
        <label className="flex flex-col gap-2">
          <input
            type="email"
            {...register("email")}
            placeholder="Seu email"
            className="p-4 text-lg w-full bg-gray-900 text-gray-100 placeholder-gray-300"
          />
          {errors.email?.message ? (
            <FormError> {errors.email?.message}</FormError>
          ) : (
            ""
          )}
        </label>
        <label className="flex flex-col gap-2">
          <input
            type="password"
            {...register("password")}
            placeholder="Sua senha"
            className="p-4 text-lg w-full bg-gray-900 text-gray-100 placeholder-gray-300"
          />
          {errors.password?.message ? (
            <FormError> {errors.password?.message}</FormError>
          ) : (
            ""
          )}
        </label>
        <button
          className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
          type="submit"
        >
          {isSubmitting ? "Cadastrando ..." : "Cadastrar"}
        </button>
      </form>
    );
}