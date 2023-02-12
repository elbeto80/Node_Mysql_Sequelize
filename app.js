import app from "./src/index.js";

import { PORT } from "./config.js";

app.listen(PORT, () => {
  console.log("corriendo app " + PORT);
});
