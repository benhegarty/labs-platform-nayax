import { z } from "zod";
import { wrapOpenApi } from "@labs/core.api";
wrapOpenApi(z);

// Inferred Types
export type PackageVersion = z.infer<typeof packageVersionSchema>;

// Schemas
export const packageVersionSchema = z.object({
  name: z.string().openapi({
    example: "sample-package",
    description: "The package name as listed in package.json."
  }),
  version: z.string().openapi({
    example: "1.0.0",
    description: "The version number of the package."
  }),
  homepage: z.string().url().optional().openapi({
    example: "https://samplepackage.com",
    description: "The homepage URL as listed in package.json."
  }),
  repository: z.object({
    type: z.string().openapi({
      example: "git",
      description: "The type of the repository (e.g., git)."
    }),
    url: z.string().url().openapi({
      example: "https://github.com/sample/sample-package.git",
      description: "The URL of the package repository as listed in package.json."
    })
  }).openapi({
    description: "Repository information for the package."
  }),
  dependencies: z.record(z.string(), z.string()).optional().openapi({
    example: { "lodash": "^4.17.21" },
    description: "Object with dependencies and their versions as listed in package.json."
  }),
  devDependencies: z.record(z.string(), z.string()).optional().openapi({
    example: { "jest": "^26.6.3" },
    description: "Object with devDependencies and their versions as listed in package.json."
  }),
  scripts: z.record(z.string(), z.string()).optional().openapi({
    example: { "test": "jest" },
    description: "Object containing scripts as defined in package.json."
  }),
  author: z.object({
    name: z.string().optional().openapi({
      example: "John Doe",
      description: "The name of the author as listed in package.json."
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
    description: "Information about the author of the package."
  }),
  license: z.string().optional().openapi({
    example: "MIT",
    description: "The license type as listed in package.json."
  }),
  readme: z.string().openapi({
    example: "# Sample Package\n\nThis is the README content.",
    description: "The full text of the README file."
  }),
  readmeFilename: z.string().openapi({
    example: "README.md",
    description: "The filename of the README file."
  }),
  _id: z.string().openapi({
    example: "sample-package@1.0.0",
    description: "The unique identifier combining the package name and version."
  }),
  description: z.string().openapi({
    example: "A sample package description.",
    description: "Description of the package as listed in package.json."
  }),
  dist: z.object({
    shasum: z.string().openapi({
      example: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4",
      description: "The SHA-1 checksum of the tarball."
    }),
    tarball: z.string().url().openapi({
      example: "https://registry.npmjs.org/sample-package/-/sample-package-1.0.0.tgz",
      description: "The tarball URL of the package."
    })
  }).openapi({
    description: "Distribution object containing the tarball URL and checksum."
  }),
  _npmVersion: z.string().openapi({
    example: "6.14.11",
    description: "The version of npm used to publish the package."
  }),
  _npmUser: z.object({
    name: z.string().openapi({
      example: "npmuser",
      description: "The name of the npm user who published the package."
    }),
    email: z.string().email().openapi({
      example: "npmuser@example.com",
      description: "The email of the npm user who published the package."
    })
  }).openapi({
    description: "The npm user who published the package."
  }),
  maintainers: z.array(z.object({
    name: z.string().openapi({
      example: "Jane Doe",
      description: "The maintainer's name."
    }),
    email: z.string().email().optional().openapi({
      example: "janedoe@example.com",
      description: "The maintainer's email."
    }),
    url: z.string().url().optional().openapi({
      example: "https://janedoe.com",
      description: "The maintainer's URL."
    })
  })).openapi({
    description: "An array of maintainers with their details."
  }),
  directories: z.record(z.string(), z.string()).optional().openapi({
    example: { "lib": "./lib", "test": "./test" },
    description: "Directories related to the package (if available)."
  })
});
