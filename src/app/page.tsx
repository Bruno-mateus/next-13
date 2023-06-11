import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="absolute top-0 w-full p-4 bg-gray-900 text-gray-100 flex justify-center">
        <h1 className="text-xl">Hello</h1>
      </header>
      <h1 className="text-4xl">Home</h1>

      <Link
        href={"/signin"}
        as={"/signin"}
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
      >
        Singin
      </Link>
    </main>
  );
}
