import { MapPin, Calendar } from 'lucide-react'
import { CATEGORY_ICONS } from '../data.js'

export function ItemImage({ item, big = false }) {
  const Icon = CATEGORY_ICONS[item.category] || CATEGORY_ICONS.Other
  return (
    <div className={'item-img ' + item.type.toLowerCase() + (big ? ' big' : '')}>
      {item.photo ? <img src={item.photo} alt={item.name} /> : <Icon size={big ? 72 : 48} strokeWidth={1.5} />}
    </div>
  )
}

export function Badge({ type }) {
  return <span className={'badge ' + type.toLowerCase()}>{type}</span>
}

export default function ItemCard({ item, go }) {
  return (
    <article className="card item-card">
      <ItemImage item={item} />
      <div className="item-body">
        <div className="item-top">
          <h3>{item.name}</h3>
          <Badge type={item.type} />
        </div>
        <p className="meta"><MapPin size={15} /> {item.location}</p>
        <p className="meta"><Calendar size={15} /> {item.date}</p>
        <button className="btn btn-outline btn-block" onClick={() => go('details', item)}>View Details</button>
      </div>
    </article>
  )
}
