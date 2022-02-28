import express, { Router } from 'express'

import  { CalculerNumberController }  from '../Controller/CalculerNumberController'
import  CheckNumberMidleware  from '../Middleware/CheckNumberMidleware'


const route: Router = express.Router({
    caseSensitive: true
})

route.get('/', CheckNumberMidleware, new CalculerNumberController().calculate)

export default route