import { Elysia } from "elysia";
import data from "./data.json" with { type: "json" };

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/api", () => data)
  .get(
    "/api/:dinosaur",
    ({ params: { dinosaur } }) =>
      data.find((x) => x.name.toLowerCase() == dinosaur),
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
