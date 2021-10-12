import {sendResponse} from '@lib1'
import express from 'express'

const app2 = express()

app2.get('*', (_req, res) => {
  sendResponse(res, 'app2')
})

app2.listen(3000)
