import {Response} from 'express'

export function sendResponse(res: Response, appName: string) {
  const span = `<span style="text-decoration: underline;">${appName}<span/>`
  const heading = `<h1>This is ${span}</h1>`
  res.send(heading)
}
