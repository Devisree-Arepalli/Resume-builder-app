'use client'

import Navbar from "@/components/Navbar"
import Header from "../components/Header"
import ResumeTabs from "../components/ResumeTabs"
import CustomTabs from "../components/Tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Header just below navbar */}
      <div className="pt-[64px] border-b shadow-sm"> {/* Add top padding to offset fixed Navbar */}
        <Header />
      </div>

      {/* Resume Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
        {/*}  <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-blue-200">RESUME</h1>*/}
          {/* <p className="text-lg mt-1 text-muted-foreground">Resumate builds your Resume with AI assistant</p> */}
        </div>

        {/* Tabs and Resume Section */}
        <div className="space-y-6">
        
          <CustomTabs />
        </div>
      </main>
    </div>
  )
}
