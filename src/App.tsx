import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}