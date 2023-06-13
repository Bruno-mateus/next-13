"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";



interface PageProps {
  params: {
    id: string;
    name: string;
  };
}

interface ReviewsProps {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: params.name,
  };
}


export default async function Products({ params }: PageProps) {
  const navigate = useRouter();
  const response: ReviewsProps[] = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      cache: "no-store",
    }
  ).then((response) => response.json());

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">My Product</h1>

      <ul>
        <li>
          <strong>productId:</strong>
          {params.id}
        </li>
        <li>
          <strong>ProductName</strong>: {params.name}
        </li>
      </ul>
      <Link
        className="text-white font-bold hover:bg-green-500 rounded-lg p-4 bg-green-600"
        href={"/dashboard"}
      >
        Back
      </Link>
      <button
        className="text-white font-bold mt-4 hover:bg-green-500 rounded-lg p-4 bg-green-600"
        onClick={()=>navigate.refresh()}
      >
        refresh
      </button>
      <section className="mt-8 text-center">
        <h2 className="text-2xl">reviews</h2>
        {response.map((review) => {
          return (
            <div key={review.id} className="mt-8 p-4 w-96 m-auto text-left">
              <strong>{review.name}</strong>
              <p className="mt-1">{review.body}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
