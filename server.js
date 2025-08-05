const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const initSqlJs = require('sql.js');

const app = express();
app.use(cors());
const PORT = 3000;
const DB_FILE = "./set-storage.db";

// 初始化 SQLite 数据库
async function initDB() {
  const SQL = await initSqlJs();
  
  let db;
  let dbData = new Uint8Array();
  
  // 如果数据库文件存在，加载它
  if (fs.existsSync(DB_FILE)) {
    dbData = new Uint8Array(fs.readFileSync(DB_FILE));
    db = new SQL.Database(dbData);
  } else {
    db = new SQL.Database();
  }
}

// db.exec()
