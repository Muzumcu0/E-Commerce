import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full border-t border-slate-200 py-12 px-8 flex-col items-center gap-6 hidden md:flex">
      <div className="font-serif text-lg font-bold text-slate-900">LUXE CLOTHING</div>
      <ul className="flex gap-6">
        <li>
          <Link href="#" className="font-sans text-xs text-slate-500 uppercase tracking-wider hover:text-slate-900 transition-colors hover:underline">
            Sustainability
          </Link>
        </li>
        <li>
          <Link href="#" className="font-sans text-xs text-slate-500 uppercase tracking-wider hover:text-slate-900 transition-colors hover:underline">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="#" className="font-sans text-xs text-slate-500 uppercase tracking-wider hover:text-slate-900 transition-colors hover:underline">
            Shipping &amp; Returns
          </Link>
        </li>
        <li>
          <Link href="#" className="font-sans text-xs text-slate-500 uppercase tracking-wider hover:text-slate-900 transition-colors hover:underline">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <div className="font-sans text-xs text-slate-500 uppercase tracking-wider mt-4">
        © 2024 Luxe Clothing Craftsmanship. All rights reserved.
      </div>
    </footer>
  )
}
