import { PackageX, ClipboardList, PackageCheck, Search, HeartHandshake } from 'lucide-react'

const STEPS = [
  { icon: PackageX, title: 'Step 1', text: 'Someone loses an item.' },
  { icon: ClipboardList, title: 'Step 2', text: 'They report it on FindBack.' },
  { icon: PackageCheck, title: 'Step 3', text: 'Someone who finds an item can report it.' },
  { icon: Search, title: 'Step 4', text: 'Users can search for matching items.' },
  { icon: HeartHandshake, title: 'Step 5', text: 'The owner contacts the finder and the item is returned.' },
]

export default function HowItWorks({ go }) {
  return (
    <section className="section container narrow">
      <h1 className="page-title">How It Works</h1>
      <p className="sub">Report, search, find, contact, reunite. Five simple steps.</p>

      <ol className="timeline">
        {STEPS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="timeline-item">
            <span className="icon-circle"><Icon size={24} /></span>
            <div className="card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="hero-buttons center">
        <button className="btn btn-primary" onClick={() => go('lost')}>Report Lost Item</button>
        <button className="btn btn-outline" onClick={() => go('found')}>Report Found Item</button>
      </div>
    </section>
  )
}
