import express, { Request, Response } from 'express'
import config from 'config'

const host: string = config.server.host as string
const port: number = config.server.port as number

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server started on ${host}:${port}`)
})
