import { useState } from 'react'
import { Search as SearchIcon, Menu, X, LogIn, LogOut } from 'lucide-react'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'find', label: 'Find Items' },
  { id: 'lost', label: 'Report Lost' },
  { id: 'found', label: 'Report Found' },
  { id: 'how', label: 'How It Works' },
]

export default function Navbar({ page, go, user, logout }) {
  const [open, setOpen] = useState(false)
  const nav = (id) => {
    setOpen(false)
    go(id)
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="logo" onClick={() => nav('home')}>
          <span className="logo-mark"><SearchIcon size={18} /></span>
          FindBack
        </button>

        <nav className={'nav-links' + (open ? ' open' : '')}>
          {LINKS.map((l) => (
            <button key={l.id} className={'nav-link' + (page === l.id ? ' active' : '')} onClick={() => nav(l.id)}>
              {l.label}
            </button>
          ))}
          <div className="nav-auth-mobile">
            {user ? (
              <button className="btn btn-outline" onClick={logout}>Logout</button>
            ) : (
              <button className="btn btn-primary" onClick={() => nav('login')}>Login</button>
            )}
          </div>
        </nav>

        <div className="nav-auth">
          {user ? (
            <>
              <span className="hello">Hi, {user.name}</span>
              <button className="btn btn-outline btn-sm" onClick={logout}><LogOut size={15} /> Logout</button>
            </>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => nav('login')}><LogIn size={15} /> Login</button>
          )}
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
