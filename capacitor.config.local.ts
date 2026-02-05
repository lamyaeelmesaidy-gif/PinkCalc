import type { CapacitorConfig } from '@capacitor/cli';

// Configuration for completely offline/local app
const config: CapacitorConfig = {
  appId: 'com.appstechnology.app',
  appName: 'TECHNOLOGY CALCULATOR',
  webDir: 'dist/public',
  server: {
    // No external server - works completely offline
    androidScheme: 'https'
  },
  plugins: {
    StatusBar: {
      style: 'light',
      backgroundColor: '#F5F0FB',
    },
  },
  android: {
    buildOptions: {
      keystorePath: "app/signing.keystore",
      keystorePassword: "ywHE2xNOa6cf",
      keystoreAlias: "my-key-alias",
      keystoreAliasPassword: "ywHE2xNOa6cf",
      releaseType: "APK"
    },
    allowMixedContent: true
  }
};

export default config;