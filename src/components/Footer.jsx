export default function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>FindBack</strong>
          <p>Lost Something? Find It Back.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => go('find')}>Find Items</button>
          <button onClick={() => go('lost')}>Report Lost</button>
          <button onClick={() => go('found')}>Report Found</button>
          <button onClick={() => go('how')}>How It Works</button>
        </div>
      </div>
      <p className="copy">© 2026 FindBack · Digital Lost-and-Found for Public Spaces · College CEP Project</p>
    </footer>
  )
}
