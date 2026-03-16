import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket) => {
  console.log("User connected:", socket.id)

  socket.on("message", (msg: string) => {
    console.log(msg)
    io.emit("message", msg)
  })

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id)
  })
})

app.get("/", (req, res) => {
  res.send("Server running")
})

server.listen(3000, () => {
  console.log("Server running on port 3000")
})