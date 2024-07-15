import sqlite from "sqlite3"

export const db = new sqlite.Database(":memory:");

db.on("open", () => {
  console.log("Db open");
});

