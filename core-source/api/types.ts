export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
  HEAD = "head",
  OPTIONS = "options",
  TRACE = "trace",
}

export enum AuthType {
  PUBLIC,
  COGNITO,
  API_KEY,
}

export type AuthAPIKey = [AuthType.API_KEY, string];

export enum Platform {
  SERVERLESS,
  EXPRESS,
}

export type ServiceDefinition = {
  platforms: Platform[];
  defaultAuthType: AuthType;
  basePath?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _meta?: any;
};

export type APIDefinition = {
  path: string;
  method: Method;
  pathParameters?: string[];
  title: string;
  description: string;
  tags?: string[];
  authType: AuthType;
  cors?: boolean;
  paramsSchema?: unknown;
  querySchema?: unknown;
  bodySchema?: unknown;
  responseSchema?: unknown;
  responseFileType?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _meta?: any;
};
