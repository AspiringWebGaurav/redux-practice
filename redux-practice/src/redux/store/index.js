import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../slices/index'

export default configureStore({
    reducers : {
        counter : counterReducer
    }
})