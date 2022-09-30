import { CapacitorConfig } from '@capacitor/cli';
import { environment } from 'src/environments/environment';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'moapp',
  webDir: 'dist/myapp-webapp',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
