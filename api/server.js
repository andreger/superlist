const app = require("./app");
const { MONGODB_URI } = require("./core/database");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`MongoDB URI: ${MONGODB_URI}`);
});
