import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",

  }),
  trustedOrigins: ["http://localhost:5000"],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false
      },
      status: {
        type: "string",
        defaultValue: "unban",
        required: false

      }
    }
  },

  emailAndPassword: {
    enabled: true,
  },
});




