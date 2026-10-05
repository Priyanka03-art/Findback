# FindBack - Lost Something? Find It Back.

Digital Lost-and-Found for Public Spaces (B.Sc. CS CEP project).

## Run
```bash
npm install
npm run dev
```

## Structure
- `src/App.jsx` - page switching, shared state, localStorage
- `src/data.js` - categories, locations, 6 sample items
- `src/pages/` - Home, FindItems, ReportForm (Lost + Found), HowItWorks, ItemDetails, Login
- `src/components/` - Navbar, Footer, ItemCard
- `src/index.css` - all styling

Flow: Report -> Search -> Find -> Contact -> Reunite.
Reported items are saved in the browser's localStorage. Login is demo only.
