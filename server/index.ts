import register from "@react-ssr/express/register";
import body_parser from "body-parser";
import express from "express";

const DEFAULT_HTTP_PORT = 3000;

const app = express();

app.use(express.static("public"));

(async () => {
  await register(app);

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true }));

  app.use("/", require("./routes").default);

  app.listen(DEFAULT_HTTP_PORT, () => {
    console.log(`Ready on http://localhost:${DEFAULT_HTTP_PORT}`);
  });
})();
