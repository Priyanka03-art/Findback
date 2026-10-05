import { Wallet, Backpack, Smartphone, KeyRound, CreditCard, Headphones, Package } from 'lucide-react'

export const CATEGORIES = ['Wallets', 'Bags', 'Electronics', 'Keys', 'ID Cards', 'Other']

export const CATEGORY_ICONS = {
  Wallets: Wallet,
  Bags: Backpack,
  Electronics: Smartphone,
  Keys: KeyRound,
  'ID Cards': CreditCard,
  Other: Package,
}

export const LOCATIONS = ['Railway Station', 'Bus Stop', 'Public Park', 'Library', 'Shopping Mall', 'College Campus']

export const SAMPLE_ITEMS = [
  { id: 's1', name: 'Black Wallet', type: 'Lost', category: 'Wallets', location: 'Railway Station', date: '2026-10-01', description: 'Black leather wallet with a few cards inside. Lost near the ticket counter.', contactName: 'Aarav Mehta', contactEmail: 'aarav@example.com' },
  { id: 's2', name: 'Blue Backpack', type: 'Found', category: 'Bags', location: 'Public Park', date: '2026-10-02', description: 'Blue backpack with a water bottle and notebooks. Found on a bench near the fountain.', contactName: 'Priya Nair', contactEmail: 'priya@example.com' },
  { id: 's3', name: 'iPhone', type: 'Lost', category: 'Electronics', location: 'Shopping Mall', date: '2026-09-30', description: 'Black iPhone with a clear case. Lost on the food court level.', contactName: 'Rohan Shah', contactEmail: 'rohan@example.com' },
  { id: 's4', name: 'House Keys', type: 'Found', category: 'Keys', location: 'Bus Stop', date: '2026-10-03', description: 'Bunch of three keys with a red keychain. Handed to the bus stop kiosk, available with the finder.', contactName: 'Sneha Kulkarni', contactEmail: 'sneha@example.com' },
  { id: 's5', name: 'Student ID Card', type: 'Found', category: 'ID Cards', location: 'College Campus', date: '2026-10-04', description: 'College ID card found near the canteen. Name on the card starts with "R".', contactName: 'Imran Qureshi', contactEmail: 'imran@example.com' },
  { id: 's6', name: 'Earphones', type: 'Lost', category: 'Electronics', location: 'Library', date: '2026-10-02', description: 'White wireless earphones in a small charging case. Lost on the second floor reading area.', contactName: 'Diya Patel', contactEmail: 'diya@example.com' },
]
