import { backendFor } from "@labs/core.backend";

// Fetch the service APIs
import { API } from "@labs/api/users";
import { User } from "@labs/schemas";
import { putUser } from "@labs/be.database/user/put";
import { LabsPlatform } from "@labs/core.database/dynamodb/tables";

// Define and configure the backend function
export const be = backendFor(API.PutUser);

be.tables = [
  LabsPlatform
];

be.handler = async (e) => {
  const user = e.body.users[0];
  
  const parsed = User.Schema.parse(user);

  console.log(parsed);
  
  await putUser(parsed);

  return [
    {
      "success": true,
      "errorMessage": "string",
      "migrationId": "acc529d1-2581-4e0d-87ab-32992ab8f798",
      "userId": "3x4MpL3+id$a"
    }
  ];
};

// Don't forget to add to ../index.ts
