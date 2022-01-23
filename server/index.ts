import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(csrf({ cookie: true }))

// Import and Set Nuxt.js options
