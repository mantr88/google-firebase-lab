/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDD0YV0gwBTUm67JOkd1JAjshuUNZGhBRM",
  authDomain: "friendlychat-ant.firebaseapp.com",
  projectId: "friendlychat-ant",
  storageBucket: "friendlychat-ant.appspot.com",
  messagingSenderId: "924995939248",
  appId: "1:924995939248:web:717eb44dfaa12a751b0475"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}