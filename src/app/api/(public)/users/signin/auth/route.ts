import { verify } from "jsonwebtoken";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET

export async function POST(req: NextApiRequest) {
    const authToken = ''

    if (!authToken) {
           return NextResponse.json(
          { error: "É necessário estar autenticado para continuar" },
          { status: 401 })
    }

    

    try {
       verify(authToken, secret!)
        NextResponse.next()
    } catch (err) {
        console.error(err)
        NextResponse.json(
            { error: "Token is not valid" },
            {status:401}
        )
    }
    
}