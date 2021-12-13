import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";

// Start the server
const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOST || "0.0.0.0";
app.listen(port, hostname, () => {
  logger.info("Express server started on port: " + port);
});
