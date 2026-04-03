// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

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
  const { Buffer } = await import("buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/app.ts
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite"
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: ["http://localhost:5000", "http://localhost:3000", "https://medi-nest-ten.vercel.app"],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60
      // 5 minutes
    }
  },
  advanced: {
    cookiePrefix: "better-auth",
    useSecureCookies: process.env.NODE_ENV === "production",
    crossSubDomainCookies: {
      enabled: false
    },
    disableCSRFCheck: true
    // Allow requests without Origin header (Postman, mobile apps, etc.)
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
      accessType: "offline",
      prompt: "select_account consent",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  }
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
var addMedicine2 = async (req, res) => {
  try {
    const data = req.body;
    const result = await medicineService.addMedicine(data);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var getAllMedicine2 = async (req, res) => {
  try {
    const { serch, category, minPrice, maxPrice, manufacturer } = req.query;
    const result = await medicineService.getAllMedicine(serch, category, minPrice, maxPrice, manufacturer);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var getMedicineByID2 = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await medicineService.getMedicineByID(id);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var updateMedicine2 = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await medicineService.updateMedicine(id, data);
    console.log(result);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var deleteMedicine2 = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await medicineService.deleteMedicine(id);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
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
var addCatagoty2 = async (req, res) => {
  const { categorieName } = req.body;
  const result = await categorieService.addCatagoty(categorieName);
  res.send(result);
};
var getAllCatagoty2 = async (req, res) => {
  const result = await categorieService.getAllCatagoty();
  res.send(result);
};
var deleteCatagoty2 = async (req, res) => {
  const { id } = req.params;
  const result = await categorieService.deleteCatagoty(id);
  res.send(result);
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
          status
        }
      });
      await tx.orderItem.createMany({
        data: items.map((item) => ({
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity
        }))
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
  try {
    const result = await prisma.orders.findUnique({
      where: {
        id
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
var addOrder2 = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user?.id;
    if (!userID) {
      return res.send("Your user id is null");
    }
    const result = await orderService.addOrder(data, userID);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var getAllOrder2 = async (req, res) => {
  try {
    const result = await orderService.getAllOrder();
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var getOrderByID2 = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await orderService.getOrderByID(id);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var updateOrder2 = async (req, res) => {
  try {
    const { id } = req.body;
    const { status } = req.body;
    console.log(id, status);
    const result = await orderService.updateOrder(id, status);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var deleteOrder2 = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await orderService.deleteOrder(id);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
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
router3.get("/api/orders/:id", auth_default(), orderControler.getOrderByID);
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
var addReview2 = async (req, res) => {
  try {
    const data = req.body;
    const id = req.user?.id;
    if (!id) {
      return res.send("your user id is null");
    }
    const result = await reviewService.addReview(data, id);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var getAllReview2 = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await reviewService.getAllReview(id);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
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
var getAllUser2 = async (req, res) => {
  try {
    const result = await userService.getAllUser();
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var updateUser2 = async (req, res) => {
  try {
    const { id, status } = req.body;
    const result = await userService.updateUser(id, status);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
};
var manageProfile2 = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(id, data);
    const result = await userService.manageProfile(id, data);
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
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
var addCard2 = async (req, res) => {
  const data = req.body;
  const result = await cardService.addCard(data);
  res.send(result);
};
var deleteCard2 = async (req, res) => {
  const ids = req.body.ids;
  console.log(ids);
  const result = await cardService.deleteCard(ids);
  res.send(result);
};
var getAllCard2 = async (req, res) => {
  const result = await cardService.getAllCard();
  res.send(result);
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

// src/app.ts
var app = express();
app.use(express.json());
var allowedOrigins = [
  process.env.APP_URL || "http://localhost:3000"
  // process.env.PROD_APP_URL, // Production frontend URL
].filter(Boolean);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const isAllowed = allowedOrigins.includes(origin) || /^https:\/\/next-blog-client.*\.vercel\.app$/.test(origin) || /^https:\/\/.*\.vercel\.app$/.test(origin);
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
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use("/", medicineRouter);
app.use("/", categorieRouter);
app.use("/", orderRouter);
app.use("/", reviedRouter);
app.use("/", userRouter);
app.use("/", cardRouter);
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
