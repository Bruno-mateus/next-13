import { prisma } from "@/lib/prisma";
import { UserSchema } from "@/schemas";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const data = await req.json()

  const { email, lastname, name, password } = UserSchema.parse(data);

  if (
    !email ||
    !password ||
    !name ||
    !lastname ||
    email.trim().length <= 0 ||
    name.trim().length <= 0 ||
    password.trim().length <= 0
  ) {
    return NextResponse.json(
      { error: "Todos os campos do formulário são obrigatórios." },
      { status: 400 }
    );
  }

  const findUser = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return NextResponse.json(
      { error: "Já existe uma conta cadastrada com este email" },
      { status: 400 }
    );
  }

  const hashPassword = await hash(password, 8);

  try {
    await prisma.users.create({
      data: {
        email: email,
        password: hashPassword,
        name: name,
        lastname: lastname,
      },
    });

    return NextResponse.json(
      {
        message: "Usuario criado com sucesso.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    
    console.error(error);
  } finally {
  }
}
