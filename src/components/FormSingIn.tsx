"use client"

import { api } from "@/lib/axios";

import {  signIn } from "next-auth/react";

import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "@/schemas";
import { FormError } from "./FormError";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { setCookie } from "@/actions/cookies";

export function FormSignIn() {
  const { push } = useRouter();

  type UserType = z.infer<typeof AuthSchema>;

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<UserType>({
    resolver: zodResolver(AuthSchema),
  });

  async function handleForm(data: UserType) {
    try {
      const token = await api.post("users/signin", {
        email: data.email,
        password: data.password,
      });
      console.log(token.data)
      setCookie(token.data.message)
     push("/dashboard")
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.error) {
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
        className="text-white font-bold flex items-center justify-center d hover:bg-green-500 rounded-lg p-4 bg-green-600
          disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed
        "
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Entrando..." : "Login"}
      </button>
    </form>
  );
}
