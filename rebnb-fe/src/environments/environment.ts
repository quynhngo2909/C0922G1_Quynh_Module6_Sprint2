// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig : {
    apiKey: 'AIzaSyDOZneTsbNUzGaDr4OJDrr23gkIItVClaw',
    authDomain: 'rebnb-8cc26.firebaseapp.com',
    projectId: 'rebnb-8cc26',
    storageBucket: 'rebnb-8cc26.appspot.com',
    messagingSenderId: '641677068241',
    appId: '1:641677068241:web:9f69f8856c200e478e82f0'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
