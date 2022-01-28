const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

let officeCharacters = {
  "stanley hudson": {
    realName: "Leslie David Baker",
  },
  "phyllis vance": {
    realName: "Phyllis Smith",
  },
  "toby flenderson": {
    realName: "Paul Lieberstein",
  },
  "darryl philbin": {
    realName: "Craig Robinson",
  },
  "unknown character": {
    realName: "unknown",
  },
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/api/officeCharacters/:input", (req, res) => {
  const name = req.params.input.toLowerCase()

  if (officeCharacters[name]) {
    res.json(officeCharacters[name])
  } else {
    res.json(officeCharacters["unknown character"])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
