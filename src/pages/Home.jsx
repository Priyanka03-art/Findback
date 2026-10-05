import { useState } from 'react'
import { Search, ClipboardList, HeartHandshake } from 'lucide-react'
import ItemCard from '../components/ItemCard.jsx'

const STEPS = [
  { icon: ClipboardList, title: '1. Report', text: 'Tell us what you lost or found.' },
  { icon: Search, title: '2. Search', text: 'Browse reported items.' },
  { icon: HeartHandshake, title: '3. Reunite', text: 'Connect with the right person and get the item back.' },
]

export default function Home({ items, go, onSearch }) {
  const [text, setText] = useState('')

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Lost Something? Find It Back.</h1>
          <p>Report lost items and find recovered belongings in your community.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg" onClick={() => go('lost')}>Report Lost Item</button>
            <button className="btn btn-light btn-lg" onClick={() => go('found')}>Report Found Item</button>
          </div>
          <form className="searchbar" onSubmit={(e) => { e.preventDefault(); onSearch(text) }}>
            <Search size={20} />
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Search for an item..." />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">How It Works</h2>
        <div className="grid grid-3">
          {STEPS.map(({ icon: Icon, title, text }) => (
            <div className="card step-card" key={title}>
              <span className="icon-circle"><Icon size={26} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Recent Items</h2>
        <div className="grid grid-3">
          {items.slice(0, 6).map((item) => <ItemCard key={item.id} item={item} go={go} />)}
        </div>
      </section>
    </>
  )
}
