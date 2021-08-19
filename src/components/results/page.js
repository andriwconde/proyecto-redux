import React,{Fragment} from'react'
import  AppBar  from '../appBar'
import { CssBaseline } from '@material-ui/core'

function Page(props){
    return(
        <Fragment>
            <CssBaseline/>
            <AppBar/>
        </Fragment>
    )
}
export default Page