import createConfig from "react-runtime-config";

export const { useConfig: useApiConfig, getConfig: getApiConfig } =
  createConfig({
    namespace: "unifi_client_api",
    schema: {
      backend: {
        type: "string",
        description: "Unifi IP Manager Backend Url",
      },
    },
  });

export const { useConfig: useAuthConfig, getConfig: getAuthConfig } =
  createConfig({
    namespace: "unifi_client_auth",
    schema: {
      authority: {
        type: "string",
        description: "Auth Authority Url",
      },
      clientId: {
        type: "string",
        description: "Auth Client Id",
      },
      redirectUri: {
        type: "string",
        description: "Auth Redirect Uri",
      },
    },
  });
