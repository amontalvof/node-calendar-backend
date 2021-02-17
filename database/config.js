const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('DB Online!');
    } catch (error) {
        console.log(error);
        throw new Error('Error when initializing database');
    }
};

module.exports = { dbConnection };
