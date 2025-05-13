"use client";
import Hero from "./views/hero";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import GlitchedPanel from "./components/glitched-panel";
import About from "./views/about";



export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderContent = () => {
    switch (currentPage) {
      case 'inicio': return <Hero />
      case 'about': return <About />
      default: return <Hero />
    }
  }

  return (
    <GlitchedPanel >     
      <main  style={{ flex: 1 }}>
        {renderContent()}
      </main>
      <Sidebar active={currentPage} onSelect={setCurrentPage} />
    </GlitchedPanel>
  )
}
