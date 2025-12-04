import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = process.env.FIREBASE_ADMIN
  ? JSON.parse(process.env.FIREBASE_ADMIN)
  : null;

if (!admin.apps.length) {
  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    // Initialize with a dummy project ID to allow build to pass
    admin.initializeApp({
      projectId: 'amber-website-demo'
    });
  }
}

const db = admin.firestore();

export { db };
