export declare enum Method {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
    PATCH = "patch",
    HEAD = "head",
    OPTIONS = "options",
    TRACE = "trace"
}
export declare enum AuthType {
    PUBLIC = 0,
    COGNITO = 1,
    API_KEY = 2
}
export type AuthAPIKey = [AuthType.API_KEY, string];
export declare enum Platform {
    SERVERLESS = 0,
    EXPRESS = 1
}
export type ServiceDefinition = {
    platforms: Platform[];
    defaultAuthType: AuthType;
    basePath?: string;
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
    _meta?: any;
};
