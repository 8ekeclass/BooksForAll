import { Sequelize, Op, Model, DataTypes} from 'sequelize';

const sequelize = new Sequelize(
    {
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        schema: 'mybooklist',
        dialect: 'postgres',
        //username: 'booklistuser',
        //password: 'booklistuser',
        logging: false,
        define: {
            timestamps: false,
            freezeTableName: true
        },
    });

export default sequelize