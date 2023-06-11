import Link from "next/link";
export const metadata = {
  title: "Singin | Next 13",
};
export default function Singin() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="absolute top-0 w-full p-4 bg-gray-900 text-gray-100 flex justify-center">
        <h1 className="text-xl">Enter with your account</h1>
      </header>
      <h1 className="text-4xl">Singin</h1>
      <Link
        href={"/dashboard"}
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
      >
        Login with user-010010
      </Link>
    </main>
  );
}
