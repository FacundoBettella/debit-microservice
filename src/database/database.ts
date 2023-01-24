import 'dotenv/config';
import * as admin from "firebase-admin"
import { applicationDefault } from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"


admin.initializeApp({
  credential: applicationDefault()
})

export const db = getFirestore()
