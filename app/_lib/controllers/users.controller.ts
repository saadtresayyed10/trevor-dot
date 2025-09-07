import { NextRequest, NextResponse } from "next/server";
import { UserClass } from "../services/users.service";

const usersServices = new UserClass();

export const createUserController = async (req: NextRequest) => {
  const { id, firstName, lastName, email, profilePic } = await req.json();

  try {
    const user = await usersServices.createUser(
      id,
      firstName,
      lastName,
      email,
      profilePic
    );

    NextResponse.json({ message: "User created", data: user }, { status: 201 });
  } catch (error) {
    NextResponse.json({ message: "Error adding user to DB" }, { status: 500 });
  }
};

export const getAllUsersController = async (_req: NextRequest) => {
  try {
    const users = await usersServices.getAllUsers();
    return NextResponse.json(
      { data: users, total: users.length },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ message: "Error fetching users" }, { status: 400 });
  }
};
