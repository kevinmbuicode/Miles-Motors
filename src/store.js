import {configureStore} from "@reduxjs/toolkit"
import querySlice from "./features/query.js"
import typeSlice from "./features/sort.js"
 const store= configureStore({reducer:{
query:querySlice,
type:typeSlice



 }})
 export default store