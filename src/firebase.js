import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app= firebase.initializeApp(


    {

 apiKey: "AIzaSyBHu9e5cuW4YGDhOseC5-8GAnRLvx_r2IM",
  authDomain: "miles-auth-37380.firebaseapp.com",
  projectId: "miles-auth-37380",
  storageBucket: "miles-auth-37380.appspot.com",
  messagingSenderId: "639435829172",
  appId: "1:639435829172:web:f2350d86723986f2858ce1"
    
    }
)
export const auth=app.auth()

export default app;
