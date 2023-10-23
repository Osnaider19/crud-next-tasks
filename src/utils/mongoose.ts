import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};
export async function connectDb() {

  if (conn.isConnected) return;
  const db = await connect("mongodb://localhost:27017/tasks");
 
  conn.isConnected = db.connections[0].readyState;
  console.log(db.connection.db.databaseName)
}

connection.on("connect", () => {
  console.log("mongose is connected");
});
connection.on("error", (error) => {
  console.log("mongose  connected error", error);
});
