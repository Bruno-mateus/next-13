"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


export const metadata = {
  title: "Dashboard"
};
export default async function Dashboard() {
  const {push} = useRouter()
 
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Dashboard </h1>
      <Link
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
        href={"/profile"}
      >
        Profile
      </Link>
      <Link
        className="text-white mt-4 font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
        href={"/product/123/shirt"}
      >
        My product
      </Link>
      <button className="text-white mt-4 font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600" onClick={()=>console.log('saiu')}>
        Sair
      </button>
    </main>
  );
}
