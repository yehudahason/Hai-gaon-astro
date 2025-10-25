import cluster from "cluster";
import os from "os";
import { handler as astroHandler } from "./dist/server/entry.mjs";
import http from "http";

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Master PID ${process.pid}: starting ${numCPUs} workers...`);
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  const server = http.createServer(astroHandler);
  server.listen(process.env.PORT || 6500, "0.0.0.0", () => {
    console.log(
      `Worker PID ${process.pid}: listening on port ${process.env.PORT || 6500}`
    );
  });
}
