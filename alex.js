/*  
                                   */

// ██████ Integrations █████████████████████████████████████████████████████████

const luna = require("./Structures/Luna");

// ██████ Initialization ███████████████████████████████████████████████████████

const client = new Luna();

client.start();

process.on("rejectionHandled"   , ( err ) => console.error( err ) );

process.on("unhandledRejection" , ( err ) => console.error( err ) );

process.on("uncaughtException"  , ( err ) => console.error( err ) );
