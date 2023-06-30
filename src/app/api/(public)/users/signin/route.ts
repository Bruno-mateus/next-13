import { prisma } from "@/lib/prisma";
import { AuthSchema } from "@/schemas";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { encode } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


const secret = process.env.NEXTAUTH_SECRET

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = AuthSchema.parse(data);
  const signinUser = await prisma.users.findFirst({
    where: {
      email,
    },
  });
  if (!signinUser)
   return NextResponse.json(
      { error: "Senha ou email invalido, tente novamente" },
      { status: 401 }
      
        );
    const checkPassword = await compare(password, signinUser.password)

    if (!checkPassword)
        return NextResponse.json(
          { error: "Senha ou email invalido, tente novamente" },
          { status: 401 }
        );
    //persist on headers token
    const token = sign({}, secret!, {
        subject: signinUser.id,
        expiresIn:"120s"
    });

    
    return NextResponse.json({message:token},{status:200})
}
