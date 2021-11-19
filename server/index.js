const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes = [
           "A beautiful, smart, and loving person will be coming into your life.",
					 "A dubious friend may be an enemy in camouflage.",
					 "A faithful friend is a strong defense.",
           "A feather in the hand is better than a bird in the air.",
           "A fresh start will put you on your way."
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});

app.post("/api/movies/", (req, res) => {
  res.send(["MY SALINGER YEAR",
  "PALMER", "CRUELLA", "PERCY VS GOLIATH","PIXIE"])
  
});
app.get("/api/favorites-car/", (req, res) => {
  res.send(["Lambo"])
  
});
app.post("/api/favorites-animal/", (req, res) => {
  res.send(["post gitDog"])
  
});
app.delete('/api/delete/', (req, res) => {
  res.send("DELETE Request Called")
})


app.put('/api/put/', (req, res) => {
  res.send("PUT Request Called")
})

const quotes =[];
app.post(`/api/quotes`, (req, res)=>{


quotes.push(req.body.newQuote)
 quotes.reverse();
  res.status(200).send(quotes)
  

})





app.listen(4000, () => console.log("Server running on 4000"));
