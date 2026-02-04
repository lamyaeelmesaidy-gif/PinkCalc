import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.appstechnology.app',
  appName: 'TECHNOLOGY CALCULATOR',
  webDir: 'dist/public',
  server: {
    // For local production build, we don't use a localhost URL
    // Capacitor will load the files directly from the webDir
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