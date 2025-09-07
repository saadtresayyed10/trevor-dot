import * as usersControllers from "@/app/_lib/controllers/users.controller";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return usersControllers.createUserController(req);
}

export async function GET(req: NextRequest) {
  return usersControllers.getAllUsersController(req);
}
