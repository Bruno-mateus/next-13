import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Home</h1>
      <Link
        href={"/dashboard"}
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
      >
        Dashboard
      </Link>
    </main>
  );
}
