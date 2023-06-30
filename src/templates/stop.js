import * as React from "react"
import Layout from "../components/Layout"

const zeroPad = (num, places) => String(num).padStart(places, '0')

const swoopStyle = {
  borderBottomLeftRadius: "100% 90%"  
}

const StopPage = ({ pageContext }) => {
  const { number } = pageContext
  
  return(
    <Layout>
      <div>
        <div class="min-h-[100px] bg-green-700 pt-8 sm:pt-6 relative" style={swoopStyle} >
          <img src="/bongologo.png"  class="mx-auto sm:inline w-9/12 sm:w-auto w-20" alt="Bongo Logo" />
        </div>
        <p class="text-4xl font-bold py-8">Stop {zeroPad(number,4)}</p>
        <p class="pb-6 text-xl">Bongo was retired in June 2023. You can find the updated stop page at <a class="font-bold text-green-700" href="https://icareatransit.org/stop/{zeroPad(number,4)}">https://icareatransit.org/stop/{zeroPad(number,4)}</a> or this page will automatically redirect after 10 seconds. </p>
      </div>
    </Layout>
  )
}

export default StopPage

export const Head = ({ pageContext }) => {
  const { number } = pageContext
  return(
    <>
      <title>Stop {zeroPad(number,4)} | Bongo</title>
      <meta name="robots" content="noindex,nofollow"></meta>
      <meta http-equiv="refresh" content={`10;URL='https://icareatransit.org/stop/${zeroPad(number,4)}'`}/>
    </>
  )
}