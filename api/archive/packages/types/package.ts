import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

// Inferred Types
export type PackageInfo = z.infer<typeof packageInfoSchema>;

// Schemas
export const packageInfoSchema = z.object({
  _id: z.string().openapi({
    example: "sample-package",
    description: "The package name, acting as a unique identifier."
  }),
  _rev: z.string().openapi({
    example: "1-6ddeb6c5fbc7e5b023c41b4c3b7be896",
    description: "The latest revision ID of the package."
  }),
  name: z.string().openapi({
    example: "sample-package",
    description: "The package name as defined in package.json."
  }),
  description: z.string().openapi({
    example: "This is a sample package description.",
    description: "Description of the package from the package.json."
  }),
  "dist-tags": z.object({
    latest: z.string().openapi({
      example: "1.0.0",
      description: "The 'latest' distribution tag, representing the latest version."
    })
  }).openapi({
    description: "An object representing distribution tags, with at least one key, 'latest'."
  }),
  versions: z.array(z.object({
    version: z.string().openapi({
      example: "1.0.0",
      description: "A version string of the package."
    })
  })).openapi({
    description: "A list of all version objects for the package."
  }),
  time: z.object({
    created: z.string().openapi({
      example: "2023-01-01T12:00:00Z",
      description: "The timestamp when the package was created."
    }),
    modified: z.string().openapi({
      example: "2024-01-01T12:00:00Z",
      description: "The timestamp when the package was last modified."
    })
  }).openapi({
    description: "An object containing timestamps for creation and modification."
  }),
  author: z.object({
    name: z.string().optional().openapi({
      example: "John Doe",
      description: "The name of the author."
    }),
    email: z.string().email().optional().openapi({
      example: "johndoe@example.com",
      description: "The email of the author."
    }),
    url: z.string().url().optional().openapi({
      example: "https://johndoe.com",
      description: "The URL of the author's website."
    })
  }).openapi({
    description: "Object representing the author of the package as listed in package.json."
  }),
  repository: z.object({
    type: z.string().openapi({
      example: "git",
      description: "The type of the repository (e.g., git)."
    }),
    url: z.string().url().openapi({
      example: "https://github.com/sample/sample-package.git",
      description: "The URL of the package repository."
    })
  }).openapi({
    description: "Object representing the package's repository as listed in package.json."
  }),
  _attachments: z.record(z.string(), z.object({
    content_type: z.string().openapi({
      example: "application/gzip",
      description: "The content type of the attachment."
    }),
    data: z.string().openapi({
      example: "base64-encoded-data",
      description: "The attachment data in base64 format."
    })
  })).openapi({
    description: "Attachments as defined in CouchDB, with content type and base64-encoded data."
  }),
  readme: z.string().openapi({
    example: "# Sample Package\n\nThis is a sample README for the latest version.",
    description: "The full text of the README for the latest version."
  })
});
