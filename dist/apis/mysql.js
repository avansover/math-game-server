"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlQueryMaker = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const sqlPool = mysql2_1.default.createPool(process.env.DATABASE_URL);
const sqlQueryMaker = (query, params) => {
    return new Promise((resolve, reject) => {
        sqlPool.getConnection((err, conn) => {
            if (err) {
                reject(err);
                return;
            }
            conn.query(query, params, (err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
                conn.release();
            });
        });
    });
};
exports.sqlQueryMaker = sqlQueryMaker;
//import mysql from 'mysql2/promise';
// const pool: mysql.Pool = mysql.createPool({
// 	host: 'mysql-rfam-public.ebi.ac.uk',
// 	port: 4497,
// 	user: 'rfamro',
// 	database: 'Rfam',
// 	enableKeepAlive: false,
// 	connectionLimit: 1,
// 	idleTimeout: 1000,
// });
// interface Taxonomy extends mysql.RowDataPacket {
// 	id: number;
// 	species: string;
// }
// const interval: NodeJS.Timer = setInterval(async () => {
// 	const [ rows ] = await pool.query<Taxonomy[]>(`SELECT ncbi_id AS id, LEFT(species, 10) AS species FROM taxonomy ORDER BY species ASC LIMIT 10`);
// 	for (const row of rows) {
// 		console.log({ id: row.id, species: row.species });
// 	}
// }, 2000);
// pool.on('acquire', () => console.log('acquire event'));
// pool.on('connection', () => console.log('connection event'));
// pool.on('enqueue', () => console.log('enqueue event'));
// pool.on('release', () => console.log('release event'));
// setTimeout(() => {
// 	clearInterval(interval);
// 	pool.end();
// }, 10000);
