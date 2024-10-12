import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi";

if (!process.env.NODE_ENV) process.env.NODE_ENV = "dev";
import * as appEnvironment from "@labs/be.environment";
const environment = appEnvironment[process.env.NODE_ENV];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendMessageToWebSocket(connectionId: string, message: any, endpoint?: string) {
  if (!endpoint) endpoint = environment.DOMAIN_WS;
  console.log(`Sending message to ${connectionId} on wss://${endpoint}`);

  if (typeof message !== "string") try {
    message = JSON.stringify(message);
  } catch (e) { /* empty */ }
  
  const client = new ApiGatewayManagementApiClient({ endpoint: `https://${endpoint}` });
  const command = new PostToConnectionCommand({
    ConnectionId: connectionId,
    Data: Buffer.from(message), // Message must be in Buffer format
  });

  return client.send(command);
}