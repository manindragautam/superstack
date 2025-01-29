import { Elysia, file } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import data from "./data.json" with { type: "json" };

const app = new Elysia()
  .use(staticPlugin({ assets: "dist/static", prefix: "/static" }))
  .get("/", () => file("dist/index.html"))
  .get("/dinosaur/:name", () => file("dist/index.html"))
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
