import { useState } from 'react'
import { CheckCircle, Upload } from 'lucide-react'
import { CATEGORIES, LOCATIONS } from '../data.js'

const EMPTY = { name: '', category: CATEGORIES[0], description: '', location: LOCATIONS[0], date: '', photo: '', contactName: '', contactEmail: '' }

export default function ReportForm({ type, onSubmit, go }) {
  const [form, setForm] = useState(EMPTY)
  const [done, setDone] = useState(false)
  const isLost = type === 'Lost'

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const onPhoto = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setForm((f) => ({ ...f, photo: reader.result }))
    reader.readAsDataURL(file)
  }

  const submit = (e) => {
    e.preventDefault()
    onSubmit({ ...form, type })
    setDone(true)
    window.scrollTo(0, 0)
  }

  const reset = () => {
    setForm(EMPTY)
    setDone(false)
  }

  if (done) {
    return (
      <section className="section container narrow">
        <div className="card success">
          <CheckCircle size={56} />
          <h2>{isLost ? 'Your lost item has been reported successfully!' : 'Thank you! Your found item has been reported.'}</h2>
          <p>{isLost ? 'Keep an eye on the Find Items page for a match.' : 'The owner can now find your report and contact you.'}</p>
          <div className="hero-buttons center">
            <button className="btn btn-primary" onClick={() => go('find')}>Browse Items</button>
            <button className="btn btn-outline" onClick={reset}>Report Another</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section container narrow">
      <h1 className="page-title">{isLost ? 'Report a Lost Item' : 'Report a Found Item'}</h1>
      <p className="sub">{isLost ? 'Tell us what you lost and where.' : 'Tell us what you found and where.'}</p>

      <form className="card form" onSubmit={submit}>
        <label>Item Name
          <input required value={form.name} onChange={set('name')} placeholder="e.g. Black Wallet" />
        </label>

        <div className="row">
          <label>Category
            <select value={form.category} onChange={set('category')}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label>Location
            <select value={form.location} onChange={set('location')}>
              {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </label>
        </div>

        <label>Description
          <textarea required rows="4" value={form.description} onChange={set('description')} placeholder="Colour, brand, marks or anything that helps identify it" />
        </label>

        <div className="row">
          <label>Date
            <input required type="date" value={form.date} onChange={set('date')} />
          </label>
          <label>Upload Photo
            <span className="file-input"><Upload size={16} /> {form.photo ? 'Photo added' : 'Choose a photo'}
              <input type="file" accept="image/*" onChange={onPhoto} />
            </span>
          </label>
        </div>

        <div className="row">
          <label>Contact Name
            <input required value={form.contactName} onChange={set('contactName')} placeholder="Your name" />
          </label>
          <label>Contact Email
            <input required type="email" value={form.contactEmail} onChange={set('contactEmail')} placeholder="you@example.com" />
          </label>
        </div>

        <button className="btn btn-primary btn-lg" type="submit">{isLost ? 'Submit Lost Item' : 'Submit Found Item'}</button>
      </form>
    </section>
  )
}
