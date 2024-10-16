'use client'

import ResponsiveFooter from "./Footer"
import ResponsiveAppBar from "./Navbar"
import QuestionCard from "./QuestionCard"

export default function page(){
  return(
     <>   
         <ResponsiveAppBar/>
         <QuestionCard/>
         <ResponsiveFooter/>
         
    </>
  )

}