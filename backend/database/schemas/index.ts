// import { z, ZodSchema } from "zod";

// import { Index, SchemaType } from "@labs/core.database/single-table/types";
// import {
//   WalletSchema,
//   WalletTransactionSchema
// } from "./wallet";
// import {
//   UserSchema
// } from "./user/user";

// // Helper function to create an entity with nested entities as functions
// const createEntity = <T>(
//   schema: T,
//   nestedEntities?: (id?: string) => Record<string, (id?: string) => any>
// ) => {
//   return (id?: string) => {
//     const entity = { id, schema };

//     // If there are nested entities, attach them as functions
//     if (nestedEntities) {
//       const nested = nestedEntities(id);
//       // Convert each nested entity into a callable function
//       Object.keys(nested).forEach(key => {
//         entity[key] = nested[key];
//       });
//     }

//     return entity;
//   };
// };

// // Define schemas with chainable nested entities
// export const Indexes = {
//   // Location
//   PRIMARY: {
//     Wallet: createEntity(WalletSchema, () => ({
//       User: createEntity(UserSchema),
//     })),
//   },

//   // Member
//   GSI1: {
//     User: createEntity(UserSchema, () => ({
//       Wallet: createEntity(WalletSchema, () => ({
//         WalletTransaction: createEntity(WalletTransactionSchema),
//       })),
//     })),
//   }
// };


// export const Indexes = {

//   // Location
//   PRIMARY: {
//     Wallet: () => {
//       return {
//         PK: "wallet",
//         schema: WalletSchema,
//         User: (id?) => {
//           return {
//             id,
//             schema: UserSchema,
//           };
//         }
//       };
//     }
//   },

//   // Member
//   GSI1: {
//     User: (id?) => {
//       return {
//         id,
//         schema: UserSchema,
//         Wallet: (id?) => {
//           return {
//             id,
//             schema: WalletSchema,
//             WalletTransaction: (id?) => {
//               return {
//                 id,
//                 schema: WalletTransactionSchema
//               };
//             }
//           };
//         }
//       };
//     }
//   }
// };