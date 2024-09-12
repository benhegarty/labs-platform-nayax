import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

export type Event<T> = Omit<APIGatewayProxyEvent, "body"> & {
  body: T;
};
export type APIGatewayProxyResultJSON<T> = Omit<APIGatewayProxyResult, "body"> & {
  body: T;
};
export type Response<T> = Promise<
  APIGatewayProxyResult | APIGatewayProxyResultJSON<T>
>;

export type Statement = {
  Effect: "Allow" | "Deny";
  Action: string | string[];
  Resource: string | string[];
};

export type ServerlessFunctionConfig = {
  handler: string;
  timeout?: number;
  events?: [
    {
      httpApi: {
        method: string;
        path: string;
        cors?: boolean;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authorizer?: any;
      };
    }
  ];
  iamRoleStatementsName?: string;
  iamRoleStatements?: Partial<Statement>[];
};