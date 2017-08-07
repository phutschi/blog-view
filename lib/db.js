const admin = require('firebase-admin')
const { join } = require('path')
const cert = join(__dirname, '../service-account.json')

admin.initializeApp({
  credential: admin.credential.cert(cert),
  databaseURL: "https://quiez-blog.firebaseio.com"
});

console.log(cert)

module.exports = admin.database()
