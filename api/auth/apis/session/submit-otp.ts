import { z, wrapOpenApi, api, Method, AuthType } from "@labs/core.api";
wrapOpenApi(z);

export const SubmitOTP = api({
  method: Method.POST,
  path: "/login/{loginId}/otp/submit",
  title: "Submit OTP",
  description: "Submit OTP for verification",
  cors: true,
  authType: AuthType.VIVA,
  tags: ["Todo"],
  bodySchema: z.object({
    code: z.string().length(6),
  }),
  responseSchema: z.object({
    success: z.boolean(),
  }),
});

// Don't forget to add to ../index.ts
