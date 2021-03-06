// ============================
//  Port
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Environment
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Expiration date
// ============================
// 60 secs
//60 mins
//24 hrs
//30d ias
process.env.EXPIRATION_DATE = '48h';

// ============================
//  Auth seed
// ============================
process.env.AUTH_SEED = process.env.AUTH_SEED || 'este-es-el-seed-desarrollo';


// ============================
//  MongoDB
// ============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ============================
//  Google Client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '427354135822-rqt70orau6q5r9b0a7lrvmloirrasko6.apps.googleusercontent.com';