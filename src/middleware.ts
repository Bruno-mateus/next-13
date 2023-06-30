"use server"

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const secret = process.env.NEXTAUTH_SECRET;

export default async function middleware(request: NextRequest) {
    const authToken = request.cookies.get("@auth/my-app");

    if (!authToken?.value) {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "authentication failed",
            }),
            {
                status: 401,
                headers: { "content-type": "application/json" },
            }
        );
    }
 
  try {
      
   
      
    
    } catch (err) {
    console.error(err)
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "authentication failed",
      }),

      {
        status: 401,
        headers: { "content-type": "application/json" },
      }
    );
  }
}


export const config = {
  matcher: ["/dashboard"]
};
