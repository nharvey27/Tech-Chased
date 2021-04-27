import express from "express";

const main = async () => {
  const app = express();

  app.listen(4000, () => {
    console.log("server started on  localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
