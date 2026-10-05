import { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Demo only: any email + password works. No real authentication.
  const submit = (e) => {
    e.preventDefault()
    onLogin({ name: email.split('@')[0] || 'User', email })
  }

  return (
    <section className="section container tiny">
      <div className="card form">
        <h1 className="page-title small">Login to FindBack</h1>
        <p className="sub">This is a demo login. No real account is needed.</p>
        <form onSubmit={submit} className="form-plain">
          <label>Email
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <label>Password
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" />
          </label>
          <button className="btn btn-primary btn-block" type="submit">Login</button>
        </form>
        <button className="btn btn-outline btn-block" onClick={() => onLogin({ name: 'Demo User', email: 'demo@findback.com' })}>Demo Login</button>
      </div>
    </section>
  )
}
