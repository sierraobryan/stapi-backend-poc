
"use strict";

const admin = require("firebase-admin");
const serviceAccount = require("../../serviceAccountKey.json"); // add serviceAccountKey from firebase to root directory
module.exports = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseUrl: "https://strapi-poc-7c175.firebaseio.com"
  });
  strapi.firebase = admin;
};