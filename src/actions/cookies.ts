"use server";
import { cookies } from "next/headers";


export async function setCookie(token: string) {
    const cookieStore = cookies();
     cookieStore.set("@auth/my-app", token, { secure: true });
}