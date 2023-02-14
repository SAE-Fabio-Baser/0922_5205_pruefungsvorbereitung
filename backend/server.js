import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
const PORT = 3000;
const CONNSTR = "mongodb://root:example@mongo:27017/?authMechanism=DEFAULT";

const mongo = new MongoClient(CONNSTR);

const setupExpress = function () {
  app.get("/posts", async (_req, res) => {
    const coll = mongo.db("sae").collection("posts");

    try {
      const posts = await coll.find({}).toArray();
      res.send({ success: true, data: posts });
    } catch (err) {
      res.send({ success: false, error: err });
    }
  });

  app.listen(PORT, () => {
    console.log("Server läuft auf http://localhost:" + PORT);
  });
};

mongo.connect().then(setupExpress).catch(console.error);
