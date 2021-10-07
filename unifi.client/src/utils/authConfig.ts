import { Configuration, LogLevel } from "@azure/msal-browser";
import { ProtocolMode } from "@azure/msal-common";

export const MSAL_CONFIG: Configuration = {
  auth: {
    authority: 'https://auth.mattgerega.net/',
    clientId: 'unifiwebclient',
    knownAuthorities: ['https://auth.mattgerega.net/'],
    redirectUri: "http://localhost:3000",
    protocolMode: ProtocolMode.OIDC
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};