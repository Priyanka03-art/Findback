import { useState } from 'react'
import { Search } from 'lucide-react'
import ItemCard from '../components/ItemCard.jsx'
import { CATEGORIES, LOCATIONS } from '../data.js'

export default function FindItems({ items, go, search, setSearch }) {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')

  const q = search.trim().toLowerCase()
  const results = items.filter(
    (i) =>
      (!q || (i.name + ' ' + i.description).toLowerCase().includes(q)) &&
      (!category || i.category === category) &&
      (!location || i.location === location) &&
      (!type || i.type === type)
  )

  return (
    <section className="section container">
      <h1 className="page-title">Find a Lost or Found Item</h1>

      <div className="searchbar light">
        <Search size={20} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for an item..." />
      </div>

      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Lost &amp; Found</option>
          <option>Lost</option>
          <option>Found</option>
        </select>
      </div>

      {results.length ? (
        <div className="grid grid-3">
          {results.map((item) => <ItemCard key={item.id} item={item} go={go} />)}
        </div>
      ) : (
        <div className="card empty">
          <h3>No items match your search</h3>
          <p>Try different words or clear the filters. You can also report the item yourself.</p>
        </div>
      )}
    </section>
  )
}
