import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import {API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
}

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    async register(email, password, firstName, lastName){
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: `${firstName} ${lastName}`
        })
    }

    async passwordReset(email){
        return this.auth.sendPasswordResetEmail(email)
    }

   
}

export default new Firebase()