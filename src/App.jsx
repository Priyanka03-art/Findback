import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import FindItems from './pages/FindItems.jsx'
import ReportForm from './pages/ReportForm.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import ItemDetails from './pages/ItemDetails.jsx'
import Login from './pages/Login.jsx'
import { SAMPLE_ITEMS } from './data.js'

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) : fallback
  } catch {
    return fallback
  }
}

export default function App() {
  // Simple page switching with state (no router needed)
  const [page, setPage] = useState('home')
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')
  const [userItems, setUserItems] = useState(() => load('findback_items', []))
  const [user, setUser] = useState(() => load('findback_user', null))

  useEffect(() => {
    try {
      localStorage.setItem('findback_items', JSON.stringify(userItems))
    } catch {
      /* storage full - ignore */
    }
  }, [userItems])

  const items = [...userItems, ...SAMPLE_ITEMS]

  const go = (name, item = null) => {
    setPage(name)
    setSelected(item)
    window.scrollTo(0, 0)
  }

  const addItem = (item) => setUserItems([{ ...item, id: 'u' + Date.now() }, ...userItems])

  const login = (u) => {
    setUser(u)
    localStorage.setItem('findback_user', JSON.stringify(u))
    go('home')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('findback_user')
  }

  const searchFromHome = (text) => {
    setSearch(text)
    go('find')
  }

  return (
    <div className="app">
      <Navbar page={page} go={go} user={user} logout={logout} />
      <main>
        {page === 'home' && <Home items={items} go={go} onSearch={searchFromHome} />}
        {page === 'find' && <FindItems items={items} go={go} search={search} setSearch={setSearch} />}
        {page === 'lost' && <ReportForm key="lost" type="Lost" onSubmit={addItem} go={go} />}
        {page === 'found' && <ReportForm key="found" type="Found" onSubmit={addItem} go={go} />}
        {page === 'how' && <HowItWorks go={go} />}
        {page === 'details' && selected && <ItemDetails item={selected} go={go} />}
        {page === 'login' && <Login onLogin={login} />}
      </main>
      <Footer go={go} />
    </div>
  )
}
