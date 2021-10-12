import {sendResponse} from '@lib1'
import express from 'express'

const app1 = express()

app1.get('*', (_req, res) => {
  sendResponse(res, 'app1 test 1 2 3 4')
})

app1.listen(3000)
