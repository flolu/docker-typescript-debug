import {sendResponse} from '@lib1'
import express from 'express'

const app1 = express()

app1.get('*', (_req, res) => {
  sendResponse(res, 'app1')
})

app1.listen(3000)
