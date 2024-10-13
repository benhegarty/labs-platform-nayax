import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

// Inferred Types
export type StaticAuthResponse = z.infer<typeof staticAuthResponseSchema>;
export type StaticSettResponse = z.infer<typeof staticSettResponseSchema>;
export type StaticCancelResponse = z.infer<typeof staticCancelResponseSchema>;
export type StaticSaleResponse = z.infer<typeof staticSaleResponseSchema>;
export type StaticVoidResponse = z.infer<typeof staticVoidResponseSchema>;
export type StaticRefundResponse = z.infer<typeof staticRefundResponseSchema>;

// Schemas
export const statusSchema = z.object({
  Verdict: z.string().openapi({
    example: "Approved",
    description: "The status of the transaction, such as 'Approved' or 'Declined'."
  }),
  Code: z.number().optional().openapi({
    example: 0,
    description: "Status code indicating the outcome."
  }),
  StatusMessage: z.string().optional().openapi({
    example: "Transaction approved",
    description: "Detailed message about the transaction status."
  })
});

export const paymentInfoSchema = z.object({
  SrvTranId: z.string().openapi({
    example: "236584335969834429321847829253667359",
    description: "Server transaction ID."
  }),
  AuthCode: z.string().openapi({
    example: "333333",
    description: "Authorization code."
  }),
  AuthAmount: z.number().openapi({
    example: 0.1,
    description: "Amount authorized."
  }),
  SettAmount: z.number().openapi({
    example: 0.1,
    description: "Amount settled."
  }),
  RRN: z.string().openapi({
    example: "111111",
    description: "Retrieval Reference Number."
  }),
  Token: z.string().openapi({
    example: "Token",
    description: "Token for the transaction."
  }),
  AuthDateTime: z.string().openapi({
    example: "230221101008",
    description: "Authorization date and time."
  }),
  SettDateTime: z.string().openapi({
    example: "230221101009",
    description: "Settlement date and time."
  }),
  TraceNumber: z.string().openapi({
    example: "4444",
    description: "Trace number."
  }),
  AuthSource: z.string().openapi({
    example: "55555",
    description: "Source of the authorization."
  }),
  IsGatewayTimeout: z.boolean().openapi({
    example: false,
    description: "Indicates if there was a gateway timeout."
  })
}).nullable();

export const staticAuthResponseSchema = z.object({
  Status: statusSchema,
  PaymentInfo: paymentInfoSchema
}).openapi({
  description: "Response schema for Static QR Authorization."
});

export const staticSettResponseSchema = z.object({
  Status: statusSchema
}).openapi({
  description: "Response schema for Static QR Settlement."
});

export const staticCancelResponseSchema = z.object({
  Status: statusSchema
}).openapi({
  description: "Response schema for Static QR Cancel."
});

export const staticSaleResponseSchema = z.object({
  Status: statusSchema,
  PaymentInfo: paymentInfoSchema
}).openapi({
  description: "Response schema for Static QR Sale."
});

export const staticVoidResponseSchema = z.object({
  Status: statusSchema,
  PaymentInfo: paymentInfoSchema
}).openapi({
  description: "Response schema for Static QR Void."
});

export const staticRefundResponseSchema = z.object({
  Status: statusSchema,
  PaymentInfo: paymentInfoSchema
}).openapi({
  description: "Response schema for Static QR Refund."
});
