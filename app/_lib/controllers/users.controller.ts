import { NextRequest, NextResponse } from "next/server";
import { UserClass } from "../services/users.service";

const usersServices = new UserClass();

export const getAllUsersController = (_req: NextRequest) => {
  try {
    const users = usersServices.getAllUsers();
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: "Error fetching users" }, { status: 400 });
  }
};
