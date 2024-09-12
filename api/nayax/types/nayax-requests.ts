import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

// Inferred Types
export type StaticAuthRequest = z.infer<typeof staticAuthRequestSchema>;
export type StaticSettRequest = z.infer<typeof staticSettRequestSchema>;
export type StaticCancelRequest = z.infer<typeof staticCancelRequestSchema>;
export type StaticSaleRequest = z.infer<typeof staticSaleRequestSchema>;
export type StaticVoidRequest = z.infer<typeof staticVoidRequestSchema>;
export type StaticRefundRequest = z.infer<typeof staticRefundRequestSchema>;

// Schemas
export const staticAuthRequestSchema = z.object({
  BasicInfo: z.object({
    TransactionId: z.string().openapi({
      example: "236584335969834429321847829253667359",
      description: "Unique identifier for the transaction."
    }),
    Amount: z.number().openapi({
      example: 0.1,
      description: "Transaction amount."
    }),
    CurrencyCode: z.string().openapi({
      example: "USD",
      description: "Currency code (ISO format)."
    }),
    CurrencyNumeric: z.number().openapi({
      example: 376,
      description: "Numeric currency code."
    }),
    SiteId: z.number().openapi({
      example: 12,
      description: "Site ID where the transaction occurred."
    })
  }).nullable(),
  MachineInfo: z.object({
    Id: z.number().openapi({
      example: 869761713,
      description: "Machine ID."
    }),
    Name: z.string().openapi({
      example: "TestPayStaticQR V2",
      description: "Machine name."
    }),
    TerminalId: z.number().openapi({
      example: 987654321,
      description: "Terminal ID."
    }),
    DecimalPlace: z.number().openapi({
      example: 2,
      description: "Decimal places for amounts."
    }),
    Offset: z.number().openapi({
      example: 2,
      description: "Offset value."
    }),
    GroupId: z.string().openapi({
      example: "Beverages",
      description: "Group ID."
    }),
    OperatorId: z.number().openapi({
      example: 12345,
      description: "Operator ID."
    }),
    ZipCode: z.number().openapi({
      example: 10001,
      description: "Machine location zip code."
    }),
    Country: z.object({
      Name: z.string().openapi({
        example: "United States of America",
        description: "Country name."
      }),
      NumericCode: z.number().openapi({
        example: 840,
        description: "Country numeric code."
      }),
      Alpha2Code: z.string().openapi({
        example: "US",
        description: "Country alpha-2 code."
      }),
      Alpha3Code: z.string().openapi({
        example: "USA",
        description: "Country alpha-3 code."
      })
    })
  }).nullable(),
  ActorInfo: z.object({
    Id: z.number().openapi({
      example: 2001102296,
      description: "Actor ID."
    }),
    Name: z.string().openapi({
      example: "Far East Dev Zone",
      description: "Actor name."
    }),
    OperatorId: z.number().openapi({
      example: 2000305191,
      description: "Operator ID."
    }),
    OperatorName: z.string().openapi({
      example: "TanyaT_OP",
      description: "Operator name."
    }),
    MerchantId: z.number().openapi({
      example: 10011,
      description: "Merchant ID."
    })
  }).nullable(),
  CustomData: z.object({
    DirectActor: z.number().openapi({
      example: 12312312,
      description: "Direct actor ID."
    }),
    Operator: z.number().openapi({
      example: 123121434134,
      description: "Operator ID."
    }),
    Distributor: z.string().openapi({
      example: "superDistributor",
      description: "Distributor name."
    }),
    Actor: z.number().openapi({
      example: 12312312,
      description: "Actor ID."
    }),
    Machine: z.number().openapi({
      example: 131231348,
      description: "Machine ID."
    })
  }).nullable()
});

export const staticSettRequestSchema = staticAuthRequestSchema
  .extend({
    Products: z.array(z.object({
      Code: z.number().openapi({
        example: 0,
        description: "Product code."
      }),
      Name: z.string().openapi({
        example: "Stella",
        description: "Product name."
      }),
      Price: z.number().openapi({
        example: 0.1,
        description: "Product price."
      }),
      UnitOfMeasurement: z.string().openapi({
        example: "USD",
        description: "Unit of measurement."
      }),
      Measurement: z.number().openapi({
        example: 1,
        description: "Measurement value."
      })
    }))
  });

export const staticCancelRequestSchema = staticAuthRequestSchema
  .extend({
    ReasonCode: z.number().openapi({
      example: 2,
      description: "Cancellation reason code."
    }),
    ReasonText: z.string().openapi({
      example: "Cashless cancelled by consumer",
      description: "Cancellation reason text."
    })
  });

export const staticSaleRequestSchema = staticAuthRequestSchema
  .extend({
    Products: z.array(z.object({
      Code: z.number().openapi({
        example: 0,
        description: "Product code."
      }),
      Name: z.string().openapi({
        example: "Stella",
        description: "Product name."
      }),
      Price: z.number().openapi({
        example: 0.1,
        description: "Product price."
      }),
      UnitOfMeasurement: z.string().openapi({
        example: "USD",
        description: "Unit of measurement."
      }),
      Measurement: z.number().openapi({
        example: 1,
        description: "Measurement value."
      })
    })).openapi({
      description: "List of products in the sale."
    })
  });

export const staticVoidRequestSchema = staticCancelRequestSchema;
export const staticRefundRequestSchema = staticVoidRequestSchema;