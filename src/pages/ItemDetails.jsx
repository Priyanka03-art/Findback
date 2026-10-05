import { useState } from 'react'
import { ArrowLeft, MapPin, Calendar, Tag, Mail, User } from 'lucide-react'
import { ItemImage, Badge } from '../components/ItemCard.jsx'

export default function ItemDetails({ item, go }) {
  const [showContact, setShowContact] = useState(false)

  return (
    <section className="section container">
      <button className="back" onClick={() => go('find')}><ArrowLeft size={18} /> Back to items</button>

      <div className="card details">
        <ItemImage item={item} big />
        <div className="details-body">
          <div className="item-top">
            <h1>{item.name}</h1>
            <Badge type={item.type} />
          </div>
          <p className="meta"><Tag size={16} /> {item.category}</p>
          <p className="meta"><MapPin size={16} /> {item.location}</p>
          <p className="meta"><Calendar size={16} /> {item.date}</p>

          <h3>Description</h3>
          <p className="desc">{item.description}</p>

          <button className="btn btn-primary btn-lg" onClick={() => setShowContact(!showContact)}>Contact / Claim Item</button>

          {showContact && (
            <div className="contact-box">
              <p><User size={16} /> {item.contactName}</p>
              <p><Mail size={16} /> <a href={'mailto:' + item.contactEmail}>{item.contactEmail}</a></p>
              <small>Email them with details to prove the item is yours.</small>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
