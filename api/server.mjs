var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "postgresql",
  "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel Categories {\n  id            String      @id @default(uuid())\n  categorieName String\n  medicines     Medicines[]\n  createdAt     DateTime    @default(now())\n  updatedAt     DateTime    @updatedAt\n}\n\nmodel Medicines {\n  id           String      @id @default(uuid())\n  medicineName String\n  price        Int\n  image        String?\n  stock        Int\n  detels       String\n  manufacturer String\n  sellerId     String\n  seller       User        @relation(fields: [sellerId], references: [id])\n  categorieId  String\n  categorie    Categories  @relation(fields: [categorieId], references: [id])\n  orderItems   OrderItem[]\n  reviews      Reviews[]\n  createdAt    DateTime    @default(now())\n  updatedAt    DateTime    @updatedAt\n  cards        Card[]\n}\n\nmodel Orders {\n  id         String @id @default(uuid())\n  customerId String\n  customer   User   @relation(fields: [customerId], references: [id])\n\n  items OrderItem[]\n\n  shippingAddress String\n  totalAmount     Int\n  status          orderStatus @default(Pending)\n  createdAt       DateTime    @default(now())\n  updatedAt       DateTime    @updatedAt\n}\n\nmodel OrderItem {\n  id String @id @default(uuid())\n\n  orderId String\n  order   Orders @relation(fields: [orderId], references: [id])\n\n  productId String\n  product   Medicines @relation(fields: [productId], references: [id])\n\n  quantity Int\n}\n\nmodel Reviews {\n  id         String    @id @default(uuid())\n  customerId String\n  customer   User      @relation(fields: [customerId], references: [id])\n  productId  String\n  product    Medicines @relation(fields: [productId], references: [id])\n  rating     Int\n  comment    String?\n  createdAt  DateTime  @default(now())\n  updatedAt  DateTime  @updatedAt\n}\n\nmodel Card {\n  id         String    @id @default(uuid())\n  customerId String\n  customer   User      @relation(fields: [customerId], references: [id])\n  productId  String\n  product    Medicines @relation(fields: [productId], references: [id])\n  quantity   Int\n}\n\nmodel User {\n  id            String    @id\n  name          String\n  email         String\n  emailVerified Boolean   @default(false)\n  image         String?\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n  sessions      Session[]\n  accounts      Account[]\n\n  role      String?     @default("USER")\n  medicines Medicines[]\n  orders    Orders[]\n  reviews   Reviews[]\n\n  status String? @default("unban")\n  cards  Card[]\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nenum orderStatus {\n  Pending\n  Processing\n  Shipped\n  Delivered\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Categories":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"categorieName","kind":"scalar","type":"String"},{"name":"medicines","kind":"object","type":"Medicines","relationName":"CategoriesToMedicines"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Medicines":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"medicineName","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Int"},{"name":"image","kind":"scalar","type":"String"},{"name":"stock","kind":"scalar","type":"Int"},{"name":"detels","kind":"scalar","type":"String"},{"name":"manufacturer","kind":"scalar","type":"String"},{"name":"sellerId","kind":"scalar","type":"String"},{"name":"seller","kind":"object","type":"User","relationName":"MedicinesToUser"},{"name":"categorieId","kind":"scalar","type":"String"},{"name":"categorie","kind":"object","type":"Categories","relationName":"CategoriesToMedicines"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"MedicinesToOrderItem"},{"name":"reviews","kind":"object","type":"Reviews","relationName":"MedicinesToReviews"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"cards","kind":"object","type":"Card","relationName":"CardToMedicines"}],"dbName":null},"Orders":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"customerId","kind":"scalar","type":"String"},{"name":"customer","kind":"object","type":"User","relationName":"OrdersToUser"},{"name":"items","kind":"object","type":"OrderItem","relationName":"OrderItemToOrders"},{"name":"shippingAddress","kind":"scalar","type":"String"},{"name":"totalAmount","kind":"scalar","type":"Int"},{"name":"status","kind":"enum","type":"orderStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Orders","relationName":"OrderItemToOrders"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Medicines","relationName":"MedicinesToOrderItem"},{"name":"quantity","kind":"scalar","type":"Int"}],"dbName":null},"Reviews":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"customerId","kind":"scalar","type":"String"},{"name":"customer","kind":"object","type":"User","relationName":"ReviewsToUser"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Medicines","relationName":"MedicinesToReviews"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Card":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"customerId","kind":"scalar","type":"String"},{"name":"customer","kind":"object","type":"User","relationName":"CardToUser"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Medicines","relationName":"CardToMedicines"},{"name":"quantity","kind":"scalar","type":"Int"}],"dbName":null},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"role","kind":"scalar","type":"String"},{"name":"medicines","kind":"object","type":"Medicines","relationName":"MedicinesToUser"},{"name":"orders","kind":"object","type":"Orders","relationName":"OrdersToUser"},{"name":"reviews","kind":"object","type":"Reviews","relationName":"ReviewsToUser"},{"name":"status","kind":"scalar","type":"String"},{"name":"cards","kind":"object","type":"Card","relationName":"CardToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AccountScalarFieldEnum: () => AccountScalarFieldEnum,
  AnyNull: () => AnyNull2,
  CardScalarFieldEnum: () => CardScalarFieldEnum,
  CategoriesScalarFieldEnum: () => CategoriesScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  MedicinesScalarFieldEnum: () => MedicinesScalarFieldEnum,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  OrderItemScalarFieldEnum: () => OrderItemScalarFieldEnum,
  OrdersScalarFieldEnum: () => OrdersScalarFieldEnum,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  ReviewsScalarFieldEnum: () => ReviewsScalarFieldEnum,
  SessionScalarFieldEnum: () => SessionScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  VerificationScalarFieldEnum: () => VerificationScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.3.0",
  engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  Categories: "Categories",
  Medicines: "Medicines",
  Orders: "Orders",
  OrderItem: "OrderItem",
  Reviews: "Reviews",
  Card: "Card",
  User: "User",
  Session: "Session",
  Account: "Account",
  Verification: "Verification"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var CategoriesScalarFieldEnum = {
  id: "id",
  categorieName: "categorieName",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var MedicinesScalarFieldEnum = {
  id: "id",
  medicineName: "medicineName",
  price: "price",
  image: "image",
  stock: "stock",
  detels: "detels",
  manufacturer: "manufacturer",
  sellerId: "sellerId",
  categorieId: "categorieId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrdersScalarFieldEnum = {
  id: "id",
  customerId: "customerId",
  shippingAddress: "shippingAddress",
  totalAmount: "totalAmount",
  status: "status",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderItemScalarFieldEnum = {
  id: "id",
  orderId: "orderId",
  productId: "productId",
  quantity: "quantity"
};
var ReviewsScalarFieldEnum = {
  id: "id",
  customerId: "customerId",
  productId: "productId",
  rating: "rating",
  comment: "comment",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CardScalarFieldEnum = {
  id: "id",
  customerId: "customerId",
  productId: "productId",
  quantity: "quantity"
};
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  emailVerified: "emailVerified",
  image: "image",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  role: "role",
  status: "status"
};
var SessionScalarFieldEnum = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId"
};
var AccountScalarFieldEnum = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var VerificationScalarFieldEnum = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/client.ts
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/app.ts
import express2 from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { oAuthProxy } from "better-auth/plugins";
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  baseURL: process.env.APP_URL,
  trustedOrigins: [process.env.APP_URL, "http://localhost:3000"],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60
      // 5 minutes
    }
  },
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
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      accessType: "offline",
      prompt: "select_account consent"
    }
  },
  advanced: {
    cookies: {
      session_token: {
        name: "session_token",
        // Force this exact name
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          partitioned: true
        }
      },
      state: {
        name: "session_token",
        // Force this exact name
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          partitioned: true
        }
      }
    }
  },
  plugins: [oAuthProxy()]
});

// src/modules/medicine/medicine.router.ts
import { Router } from "express";

// src/modules/medicine/medicine.service.ts
var addMedicine = async (data) => {
  const { medicineName, price, image, stock, detels, manufacturer, sellerId, categorieId } = data;
  try {
    const result = await prisma.medicines.create({
      data: {
        medicineName,
        price,
        image,
        stock,
        detels,
        manufacturer,
        sellerId,
        categorieId
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var getAllMedicine = async (serch, category, minPrice, maxPrice, manufacturer) => {
  try {
    const allSearchAndFilter = {};
    if (serch) {
      allSearchAndFilter.OR = [
        {
          medicineName: {
            contains: serch,
            mode: "insensitive"
          }
        },
        {
          detels: {
            contains: serch,
            mode: "insensitive"
          }
        },
        {
          manufacturer: {
            contains: serch,
            mode: "insensitive"
          }
        }
      ];
    }
    if (category) {
      const categorie = await prisma.categories.findFirst({
        where: {
          categorieName: category
        }
      });
      console.log("categorie", categorie);
      if (!categorie) {
        return [];
      }
      if (categorie) {
        allSearchAndFilter.categorieId = categorie.id;
      }
    }
    if (minPrice || maxPrice) {
      allSearchAndFilter.price = {};
      if (minPrice) {
        allSearchAndFilter.price.gte = Number(minPrice);
      }
      if (maxPrice) {
        allSearchAndFilter.price.lte = Number(maxPrice);
      }
    }
    if (manufacturer) {
      allSearchAndFilter.manufacturer = {
        contains: manufacturer,
        mode: "insensitive"
      };
    }
    const result = await prisma.medicines.findMany({
      where: allSearchAndFilter,
      include: {
        categorie: true
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var getMedicineByID = async (id) => {
  try {
    const result = await prisma.medicines.findUnique({
      where: {
        id
      },
      include: {
        categorie: true
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var updateMedicine = async (id, data) => {
  const { medicineName, price, image, stock, detels, manufacturer } = data;
  try {
    const result = await prisma.medicines.update({
      where: {
        id
      },
      data: {
        medicineName,
        price,
        image,
        stock,
        detels,
        manufacturer
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var deleteMedicine = async (id) => {
  try {
    const result = await prisma.medicines.delete({
      where: {
        id
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var medicineService = {
  addMedicine,
  getAllMedicine,
  getMedicineByID,
  updateMedicine,
  deleteMedicine
};

// src/modules/medicine/medicine.controler.ts
var addMedicine2 = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await medicineService.addMedicine(data);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var getAllMedicine2 = async (req, res, next) => {
  try {
    const { serch, category, minPrice, maxPrice, manufacturer } = req.query;
    const result = await medicineService.getAllMedicine(serch, category, minPrice, maxPrice, manufacturer);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var getMedicineByID2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await medicineService.getMedicineByID(id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var updateMedicine2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await medicineService.updateMedicine(id, data);
    console.log(result);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var deleteMedicine2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await medicineService.deleteMedicine(id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var medicineControler = {
  addMedicine: addMedicine2,
  getAllMedicine: getAllMedicine2,
  getMedicineByID: getMedicineByID2,
  updateMedicine: updateMedicine2,
  deleteMedicine: deleteMedicine2
};

// src/middleWare/auth.ts
var auth2 = (...role) => {
  return async (req, res, next) => {
    const session = await auth.api.getSession({
      headers: req.headers
    });
    if (!session) {
      return res.send("You are not authroize");
    }
    req.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      role: session.user.role,
      status: session.user.status
    };
    if (role.length && !role.includes(req.user.role)) {
      return res.status(403).json({
        message: "forbidden access"
      });
    }
    next();
  };
};
var auth_default = auth2;

// src/modules/medicine/medicine.router.ts
var router = Router();
router.post("/api/seller/medicines", auth_default("SELER" /* seler */, "ADMIN" /* admin */), medicineControler.addMedicine);
router.get("/api/medicines", medicineControler.getAllMedicine);
router.get("/api/medicines/:id", medicineControler.getMedicineByID);
router.patch("/api/medicines/:id", auth_default("SELER" /* seler */, "ADMIN" /* admin */), medicineControler.updateMedicine);
router.delete("/api/medicines/:id", auth_default("SELER" /* seler */, "ADMIN" /* admin */), medicineControler.deleteMedicine);
var medicineRouter = router;

// src/modules/categorie/categorie.router.ts
import { Router as Router2 } from "express";

// src/modules/categorie/categorie.service.ts
var addCatagoty = async (categorieName) => {
  const result = await prisma.categories.create({
    data: { categorieName }
  });
  return result;
};
var getAllCatagoty = async () => {
  const result = await prisma.categories.findMany();
  return result;
};
var deleteCatagoty = async (id) => {
  const result = await prisma.categories.delete({
    where: {
      id
    }
  });
  return result;
};
var categorieService = {
  addCatagoty,
  getAllCatagoty,
  deleteCatagoty
};

// src/modules/categorie/categorie.controler.ts
var addCatagoty2 = async (req, res, next) => {
  try {
    const { categorieName } = req.body;
    const result = await categorieService.addCatagoty(categorieName);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var getAllCatagoty2 = async (req, res, next) => {
  try {
    const result = await categorieService.getAllCatagoty();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var deleteCatagoty2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await categorieService.deleteCatagoty(id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var categorieControler = {
  addCatagoty: addCatagoty2,
  getAllCatagoty: getAllCatagoty2,
  deleteCatagoty: deleteCatagoty2
};

// src/modules/categorie/categorie.router.ts
var router2 = Router2();
router2.post("/api/catagoty", categorieControler.addCatagoty);
router2.get("/api/catagoty", categorieControler.getAllCatagoty);
router2.delete("/api/catagoty/:id", categorieControler.deleteCatagoty);
var categorieRouter = router2;

// src/modules/order/order.router.ts
import { Router as Router3 } from "express";

// src/modules/order/order.service.ts
var addOrder = async (data, userID) => {
  const { shippingAddress, totalAmount, status, items } = data;
  try {
    const result = await prisma.$transaction(async (tx) => {
      const order = await tx.orders.create({
        data: {
          customerId: userID,
          shippingAddress,
          totalAmount,
          status,
          items: {
            create: items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity
            }))
          }
        },
        include: {
          items: true
        }
      });
      return order;
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var getAllOrder = async () => {
  try {
    const result = await prisma.orderItem.findMany({
      include: {
        order: true,
        product: true
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var getOrderByID = async (id) => {
  console.log("getOrderByID service", id);
  try {
    const result = await prisma.orders.findMany({
      where: {
        customerId: id
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var updateOrder = async (id, status) => {
  try {
    const result = await prisma.orders.update({
      where: {
        id
      },
      data: {
        status
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var deleteOrder = async (id) => {
  try {
    const result = await prisma.orders.delete({
      where: {
        id
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var orderService = {
  addOrder,
  getAllOrder,
  getOrderByID,
  updateOrder,
  deleteOrder
};

// src/modules/order/order.controler.ts
var addOrder2 = async (req, res, next) => {
  try {
    const data = req.body;
    const userID = req.user?.id;
    if (!userID) {
      return res.send("Your user id is null");
    }
    const result = await orderService.addOrder(data, userID);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var getAllOrder2 = async (req, res, next) => {
  try {
    const result = await orderService.getAllOrder();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var getOrderByID2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("right code now");
    console.log(id);
    const result = await orderService.getOrderByID(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "No order found with this ID"
      });
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
var updateOrder2 = async (req, res, next) => {
  try {
    const { id } = req.body;
    const { status } = req.body;
    console.log(id, status);
    const result = await orderService.updateOrder(id, status);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var deleteOrder2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await orderService.deleteOrder(id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var orderControler = {
  addOrder: addOrder2,
  getAllOrder: getAllOrder2,
  getOrderByID: getOrderByID2,
  updateOrder: updateOrder2,
  deleteOrder: deleteOrder2
};

// src/modules/order/order.router.ts
var router3 = Router3();
router3.post("/api/orders", auth_default(), orderControler.addOrder);
router3.get("/api/orders", auth_default(), orderControler.getAllOrder);
router3.get("/api/orders/:id", orderControler.getOrderByID);
router3.patch("/api/orders", auth_default("ADMIN" /* admin */, "SELER" /* seler */), orderControler.updateOrder);
router3.delete("/api/orders/:id", auth_default("ADMIN" /* admin */), orderControler.updateOrder);
var orderRouter = router3;

// src/modules/review/review.router.ts
import { Router as Router4 } from "express";

// src/modules/review/review.service.ts
var addReview = async (data, id) => {
  const { productId, rating, comment } = data;
  try {
    const result = await prisma.reviews.create({
      data: {
        customerId: id,
        productId,
        rating,
        comment
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var getAllReview = async (productId) => {
  try {
    const result = await prisma.reviews.findMany({
      where: {
        productId
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var reviewService = {
  addReview,
  getAllReview
};

// src/modules/review/review.controler.ts
var addReview2 = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.user?.id;
    if (!id) {
      return res.send("your user id is null");
    }
    const result = await reviewService.addReview(data, id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var getAllReview2 = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await reviewService.getAllReview(id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var reviewControler = {
  addReview: addReview2,
  getAllReview: getAllReview2
};

// src/modules/review/review.router.ts
var router4 = Router4();
router4.post("/api/review", auth_default(), reviewControler.addReview);
router4.get("/api/review/:id", auth_default(), reviewControler.getAllReview);
var reviedRouter = router4;

// src/modules/user/user.route.ts
import { Router as Router5 } from "express";

// src/modules/user/user.service.ts
var getAllUser = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var updateUser = async (id, status) => {
  try {
    const result = await prisma.user.update({
      where: {
        id
      },
      data: {
        status
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var manageProfile = async (id, data) => {
  const { name, role, image } = data;
  try {
    const result = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        role,
        image
      }
    });
    return result;
  } catch (error) {
    return { error: error.message };
  }
};
var userService = {
  getAllUser,
  updateUser,
  manageProfile
};

// src/modules/user/user.controller.ts
var getAllUser2 = async (req, res, next) => {
  try {
    const result = await userService.getAllUser();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var updateUser2 = async (req, res, next) => {
  try {
    const { id, status } = req.body;
    const result = await userService.updateUser(id, status);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var manageProfile2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(id, data);
    const result = await userService.manageProfile(id, data);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var userController = {
  getAllUser: getAllUser2,
  updateUser: updateUser2,
  manageProfile: manageProfile2
};

// src/modules/user/user.route.ts
var router5 = Router5();
router5.get("/api/user", auth_default("ADMIN" /* admin */), userController.getAllUser);
router5.patch("/api/user", auth_default("ADMIN" /* admin */), userController.updateUser);
router5.patch("/api/user/:id", auth_default(), userController.manageProfile);
var userRouter = router5;

// src/modules/card/card.router.ts
import { Router as Router6 } from "express";

// src/modules/card/card.service.ts
var addCard = async (card) => {
  const { customerId, productId, quantity } = card;
  const result = await prisma.card.create({
    data: {
      customerId,
      productId,
      quantity
    }
  });
  return result;
};
var getAllCard = async () => {
  const result = await prisma.card.findMany({
    include: {
      customer: true,
      product: true
    }
  });
  return result;
};
var deleteCard = async (ids) => {
  const result = await prisma.card.deleteMany({
    where: {
      id: {
        in: ids
      }
    }
  });
  return result;
};
var cardService = {
  addCard,
  deleteCard,
  getAllCard
};

// src/modules/card/card.controler.ts
var addCard2 = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await cardService.addCard(data);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var deleteCard2 = async (req, res, next) => {
  try {
    const ids = req.body.ids;
    console.log(ids);
    const result = await cardService.deleteCard(ids);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var getAllCard2 = async (req, res, next) => {
  try {
    const result = await cardService.getAllCard();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
var cardControler = {
  addCard: addCard2,
  deleteCard: deleteCard2,
  getAllCard: getAllCard2
};

// src/modules/card/card.router.ts
var router6 = Router6();
router6.post("/addcard", cardControler.addCard);
router6.delete("/deletecard", cardControler.deleteCard);
router6.get("/getcard", cardControler.getAllCard);
var cardRouter = router6;

// src/modules/payment/payment.router.ts
import express from "express";

// src/Errors/AppError.ts
var AppError = class extends Error {
  statusCode;
  isOperational;
  errors;
  constructor(message, statusCode = 500, errors) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.errors = errors;
    this.name = "AppError";
    Error.captureStackTrace(this, this.constructor);
  }
};

// src/modules/payment/payment.controller.ts
import Stripe from "stripe";
var stripeSecretKey = process.env["STRIPE_SECRET_KEY"];
var stripeWebhookSecret = process.env["STRIPE_WEBHOOK_SECRET"];
if (!stripeSecretKey) throw new AppError("STRIPE_SECRET_KEY .env This is not given");
if (!stripeWebhookSecret) throw new AppError("STRIPE_WEBHOOK_SECRET .env This is not given");
var stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16"
});
var createPaymentIntent = async (req, res, next) => {
  try {
    const { totalAmount, shippingAddress, phone, name, items } = req.body;
    if (!totalAmount || !name || !phone || !shippingAddress || !items?.length) {
      return next(new AppError("Not all necessary information was provided.", 400));
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(totalAmount) * 100),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        customerName: name,
        phone,
        shippingAddress,
        itemCount: String(items.length)
      }
    });
    console.log("\u{1F7E1} PaymentIntent create:", paymentIntent.id);
    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("\u274C Error:", error.message);
    return next(error);
  }
};
var handleWebhook = async (req, res, next) => {
  const sig = req.headers["stripe-signature"];
  if (!sig) {
    return next(new AppError("Signature not found", 400));
  }
  let event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      req.body,
      sig,
      stripeWebhookSecret
    );
  } catch (err) {
    console.error("\u274C Webhook error:", err.message);
    return next(err);
  }
  if (event.type === "payment_intent.succeeded") {
    const intent = event.data.object;
  }
  if (event.type === "payment_intent.payment_failed") {
    const intent = event.data.object;
    console.warn(intent.last_payment_error?.message);
  }
  return res.json({ received: true });
};

// src/modules/payment/payment.router.ts
var router7 = express.Router();
router7.post("/create-intent", createPaymentIntent);
router7.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleWebhook
);
var paymentrouter = router7;

// src/Errors/errorMiddleware.ts
import Stripe2 from "stripe";

// node_modules/zod/v4/core/core.js
var NEVER = Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer3(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a2;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}

// node_modules/zod/v4/core/util.js
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
var allowsEval = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};

// node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error2) => {
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue2.path.length) {
          const el = issue2.path[i];
          const terminal = i === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}

// node_modules/zod/v4/core/regexes.js
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);

// node_modules/zod/v4/core/registries.js
var _a;
var $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
      // enumerable: false,
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
      // enumerable: false,
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
};
var ZodError = $constructor("ZodError", initializer2);
var ZodRealError = $constructor("ZodError", initializer2, {
  Parent: Error
});

// src/Errors/PrismaError.ts
function handlePrismaError(err) {
  switch (err.code) {
    case "P2002": {
      const field = err.meta?.target?.join(", ");
      return new AppError(
        `This ${field} Already in use`,
        409
      );
    }
    case "P2025":
      return new AppError("Information not found", 404);
    case "P2003":
      return new AppError("Related information does not exist", 400);
    case "P2014":
      return new AppError("Missed the necessary relationship", 400);
    default:
      return new AppError("There was a database problem.", 500);
  }
}

// src/Errors/stripeError.ts
function handleStripeError(err) {
  switch (err.type) {
    case "StripeCardError":
      return new AppError(err.message ?? "Card payment failed", 402);
    case "StripeInvalidRequestError":
      return new AppError("Payment information is incorrect", 400);
    case "StripeAuthenticationError":
      return new AppError("Payment service is temporarily closed", 503);
    case "StripeRateLimitError":
      return new AppError("Too many requests, please try again later", 429);
    case "StripeConnectionError":
    case "StripeAPIError":
      return new AppError("There was a problem with payment, please try again later.", 502);
    default:
      return new AppError("payment failed", 500);
  }
}

// src/Errors/errorMiddleware.ts
function errorMiddleware(err, req, res, next) {
  let error;
  if (err instanceof AppError) {
    error = err;
  } else if (err instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
    error = handlePrismaError(err);
  } else if (err instanceof Stripe2.errors.StripeError) {
    error = handleStripeError(err);
  } else if (err instanceof ZodError) {
    error = new AppError("Data verification failed", 422, err.flatten().fieldErrors);
  } else if (err instanceof Error) {
    error = new AppError(err.message, 500);
  } else {
    error = new AppError("An unknown problem has occurred", 500);
  }
  const isProd = process.env.NODE_ENV === "production";
  if (isProd && error.statusCode === 500) {
    error = new AppError("There is a problem with the server", 500);
  }
  res.status(error.statusCode).json({
    success: false,
    statusCode: error.statusCode,
    message: error.message,
    ...error.errors && { errors: error.errors },
    ...!isProd && { stack: error.stack }
  });
}

// src/app.ts
var app = express2();
var allowedOrigins = [
  process.env.APP_URL,
  "http://localhost:3000"
].filter(Boolean);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const isAllowed = allowedOrigins.includes(origin) || /^https:\/\/.*\.vercel\.app$/.test(origin);
      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"]
  })
);
app.use(
  "/api/payment/webhook",
  express2.raw({ type: "application/json" })
);
app.use(express2.json());
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use("/api/payment", paymentrouter);
app.use("/", medicineRouter);
app.use("/", categorieRouter);
app.use("/", orderRouter);
app.use("/", reviedRouter);
app.use("/", userRouter);
app.use("/", cardRouter);
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// src/server.ts
async function main() {
  const port = process.env.PORT;
  try {
    await prisma.$connect();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    await prisma.$disconnect();
    console.log(error);
  }
}
main();
