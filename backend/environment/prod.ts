import { EnvironmentVariables } from "@labs/core.backend/types";

// Global environment variables
export const env: EnvironmentVariables = {
  NODE_ENV: "prod",
  DOMAIN_HTTP: "api.the-hub.works",
  DOMAIN_WS: "ws.the-hub.works",
  DOMAIN_IOT: "iot.the-hub.works",
  HTTPS_CERT_NAME: "api.the-hub.works",
  HTTPS_CERT_NAME_IOT: "iot.the-hub.works",
  DYNAMODB_LEGACY_TABLE_SUFFIX: "-k5r5hyaijzgszl2xs5ysna5urq-prod",
  COGNITO_AUTH_URL: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_PQjXE3bPg",
  COGNITO_CLIENT_ID: "q13bjf9l998jcgl1bmqpuhps2",
  API_KEY_NAYAX: "$*&$^%)*&^dsljfjKHLJHGdjs"
};