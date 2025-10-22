const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT,
        logging:false
    }
);
(async()=>{
    try{
        await sequelize.authenticate()
        console.log("DAtabase connection succesful")
    }catch{
        console.log("Database connection failed")
    }

})();
const models = require("../models")(sequelize)
const db = {
    sequelize,
    Sequelize,
    ...models,
};

(async()=>{
    try{
        await db.sequelize.sync({force:false});
        console.log("Database sinc OK")
    }
    catch(error){
        console.log("Database connection failed")
    }
    
})();

module.exports=db;
