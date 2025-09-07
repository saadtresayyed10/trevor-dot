import prisma from "../dbORM";

interface CreateUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
}

export class UserClass {
  private prismaClient;

  constructor(prismaClient = prisma) {
    this.prismaClient = prismaClient;
  }

  async createUser({ id, firstName, lastName, email, profilePic }: CreateUser) {
    const existingUser = await this.prismaClient.users.findUnique({
      where: { email },
    });

    if (existingUser) throw new Error("User already exists");

    return await this.prismaClient.users.create({
      data: {
        id: id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        profile_picture: profilePic,
      },
    });
  }

  async getAllUsers() {
    return await this.prismaClient.users.findMany();
  }
}
