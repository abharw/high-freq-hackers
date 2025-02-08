var fb = require('firebase')

var appIni = fb.initializeA({
    apiKey: "AIzaSyB7pTnsNqgx0ubEn5AfEBHYner0Onzu71o",
    authDomain: "ecosort-c044a.firebaseapp.com",
    databaseURL: "https://ecosort-c044a-default-rtdb.firebaseio.com",
    projectId: "ecosort-c044a",
    storageBucket: "ecosort-c044a.firebasestorage.app",
    messagingSenderId: "1057830166128",
    appId: "1:1057830166128:web:114e2d2deba1e376f55eb5",
    measurementId: "G-S3W3SEBX8G"
})

var firebaseDB = fb.getDatabase(appIni)

const dataRef = firebaseDB.ref("Status");

dataRef.on("value", (snapshot) => {
    const data = snapshot.val();
    console.log("🔄 Updated Data from Firebase:");
    console.log(`FPS: ${data.fps}`);
    console.log(`Recycling: ${data.recycling}`);
    console.log(`Trash: ${data.trash}`);
  }, (error) => {
    console.error("❌ Error fetching data:", error);
  });
