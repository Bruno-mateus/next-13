import Link from "next/link";
export const metadata = {
  title: "Profile",
};
export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">Profile</h1>
      <p>
        <strong>user:</strong> user-010010
      </p>
      <Link
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
        href={"/dashboard"}
      >
        Back
      </Link>
    </main>
  );
}
