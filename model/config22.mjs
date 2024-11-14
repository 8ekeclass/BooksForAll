import 'dotenv/config'
import { Sequelize } from 'sequelize';



const sequelize = new Sequelize(
    {
        host: process.env.postgresql'booklistuser:pvJ5pnC7F99UN9olJ3QAdph8eUxGrTG2@dpg-csju6vhu0jms73b5fev0-a/booklist_5gzb',
        //host: 'localhost',
        port: 5432,
        //port: 15432,
        database: 'postgres',
        schema: 'booklist',
        dialect: 'postgres',
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        logging: false,
        define: {
            timestamps: false,
            freezeTableName: true
        }
    });

export default sequelize