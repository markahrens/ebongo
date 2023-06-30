import * as React from "react"
import Layout from "../components/Layout"

const swoopStyle = {
  borderTopLeftRadius: "100% 50%"  
}

const IndexPage = () => {
  return(
    <Layout>
      <div class="pt-20">
        <div class="min-h-[300px] bg-green-700 pt-8 sm:pt-6 relative" style={swoopStyle} >
          <img src="/bongologo.png"  class="mx-auto sm:inline w-9/12 sm:w-auto w-20 mt-[-80px]" alt="Bongo Logo" />
          <p class="sm:absolute sm:bottom-2 sm:right-2 sm:w-7/12 sm:border-white sm:border sm:bg-zinc-600 opacity-75 text-green-200 mt-16 p-6 text-xl">Bongo was replaced with Transit for the mobile app and <a class="underline" href="https://icareatransit.org">Iowa City Area Transit Services</a> on the web.</p>
        </div>
        <p class="text-2xl font-bold py-6">What was Bongo?</p>
        <p class="pb-6">Bongo was a GPS-based, real-time passenger information system that allows riders to find current bus locations as well as predictions for upcoming bus arrivals for Iowa City, Coralville and the University of Iowa.</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Bongo</title>
