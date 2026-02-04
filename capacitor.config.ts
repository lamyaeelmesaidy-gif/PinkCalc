import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.appstechnology.app',
  appName: 'TECHNOLOGY CALCULATOR',
  webDir: 'dist/public',
  server: {
    // For development with localhost
    url: 'http://localhost:5000',
    cleartext: true,
    // For production build
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
    // Allow localhost access
    allowMixedContent: true
  }
};

export default config;
