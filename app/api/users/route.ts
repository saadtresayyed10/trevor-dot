import { getAllUsersController } from "@/app/_lib/controllers/users.controller";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return getAllUsersController(req);
}
