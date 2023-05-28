- Module Introduction ema-john server
- Connect database and create post endpoint
- Insert bulk data many data to the database
- Load data from the server
- Load some products using keys
- Handle Inventory and how to store image on server
- Save orders in a new data collection in mongodb
- A simple overview of node mailer to send email
- A simple introduction to mongoose
- Module Summary and folder architecture
- How to implement search that loads data from database





//MongoDB Start
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i8jndut.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const productsCollection = client.db("emaJohnDb").collection("products");
  // perform actions on the collection object
  console.log("db connected");

  //POST
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    productsCollection.insertOne(product)
    .then(res => {
        console.log(res);
    })
  });
});
//MongoDB End