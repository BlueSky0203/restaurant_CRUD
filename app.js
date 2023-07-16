const express = require("express")
const { engine } = require("express-handlebars")
const methodOverride = require("method-override")
const routes = require('./routes')

const app = express()
const port = 3000

require('./config/mongoose')

app.engine("handlebars", engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})