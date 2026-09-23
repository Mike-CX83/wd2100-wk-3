import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'

function App() {
  return (
    // Router keeps the header on screen and only swaps the page in main
    <Router>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <Navbar />
        <main className="container mx-auto w-full max-w-7xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
