const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); 
const app = express();
const connectDB = require("./config/db"); // Import the DB connection function
const userRoute = require("./routes/userRoute");  
const productRoute = require("./routes/productRoute");  
const cartRoute = require("./routes/cartRoute");  

app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = 9000;
//Connect DB
 connectDB();

app.get("/", (req, res) => {
    res.send("WELCOME TO RABBIT API!");
});

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
