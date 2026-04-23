import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { label: 'Total Sales', value: '$124,500.00', change: '+14.5% vs last month', icon: 'payments', positive: true },
  { label: 'New Orders', value: '342', change: '+5.2% vs last month', icon: 'local_mall', positive: true },
  { label: 'Out of Stock', value: '12', change: 'Requires immediate attention', icon: 'warning', positive: false },
]

const products = [
  { name: 'Essential Supima Tee', category: 'T-Shirts', price: '$45.00', stock: 145, status: 'Active', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAix8LjhEhA1e8WM3KxyMXlzZ7839DXc1GaMaqWK2TLHJVlm5nkCZktdiIHflQTZLSzx3gaVnMvsiIzUOyp1CEtsEeC2pU-S3LizDCvE19E6tuCJyGeEa0jN-v0tdrPCZyktE4IhQ57av7VGReusGoAFJv8jfA3Hrk5uX8YKdVmYq_qdMucIGOl3yhTkEVv0PNg6DyV94SVQMwkzRYrolEVmttWu_A4rXGB-FxO_ZjpIBpxze8tifkbS3XPA8V1k7HWfhTewzpPyOS5' },
  { name: 'Heavyweight Selvedge Denim', category: 'Jeans', price: '$185.00', stock: 12, status: 'Low Stock', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDewwZYd63RPtJZ_XUwd1CT3X4RSuF6yr1gRg0Y9vt36uAEAqsJZzeR_M1cCP6v7lP6QR5N8hqhULC2OUmooDZkmm3TvxTSQuqKsVq57epabYp0mOaUPWHpJqsjiW79hTU6uv00EGx83D0lPe_JKjUuP8I9fWiId11C-h8_3J7Y9xlQ29DeZpfqQLz5bm2ib0MwMUJBa2fvQpKNJqfAW8ok4qF9b_Kje7tPFztZ1NAN9z2ZnLlA4ubeoseSm4GhdXGklB5TOWXICuzc' },
  { name: 'Cashmere Blend Crew', category: 'Knitwear', price: '$220.00', stock: 0, status: 'Out of Stock', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAhlLcF2bRYdSYYB79UlxYHcp0oZfEbCm1PpZ1iHyZNC45vRK6YzZvxurv4uEY-xQ5yGhK3q1GvZEG5dNyy1nn1IxKn7TgotOsNM89TfQjYvoOsDjqnA2sNrPdp9SflIg_ID3xUCLQiVl3XpvCGC1W3ZM6Qyqdybze4R9mzTSTkgtYE3d87Y_164xdtK7GJk-KPiXNK6RXBPLAlhUn26UKVZruiHKECsXpGfTkCwjkxTqDLLvL4Q_z3cPWMYWLroEDWhHwijW9VRBt' },
  { name: 'Structured Wool Overcoat', category: 'Outerwear', price: '$450.00', stock: 34, status: 'Active', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPha-YIfr9VTZzVOGgwNYcLfQ2hCzUPXwBFoCt4Wb5WU0zYiwzBPjiPboUi-8YGPJ56CxND470_iRFo2qtWQQpjFVHNIg7_QbXfiNce8ROyzem86m7Ays3H-dHOaLC81ByU4CnEYC7IQiwcuI9sbWD8Kz8KNtxaT9E080ko3Rcs1xB5A1r4BrHHT5i8dI0KxGRTtFnJRczanaQRm_1VH00al2LNHLGx5C52r-vgKkrx5RPRrjqa4s5AcVmIPn1tyORmcHWiL5Q5aVM' },
]

const statusStyle: Record<string, string> = {
  'Active': 'bg-[#e5eeff] text-[#00174b]',
  'Low Stock': 'bg-[#ffdad6]/50 text-[#93000a]',
  'Out of Stock': 'bg-[#d3e4fe] text-[#45464d]',
}

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 flex flex-col h-full w-64 border-r border-slate-200 bg-slate-50 z-50">
        <div className="p-6 flex items-center gap-4 border-b border-slate-200">
          <div className="w-10 h-10 rounded-full bg-[#e5eeff] border border-[#c6c6cd] overflow-hidden relative flex-shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7CuNe1iuqN0rvjxqNJMCmTF19cy7JkY3l0GIk1Js5270tdn9dqaHBEzUAEKjFQSnXoJq9FVYFmxy-BryohGGy4rd5Je0_gpxyNcFDIA9B5OF-ZpVsWCz42WACRP45Qjs6hL0luygM9DhODIH2uIKgG0G2RKKxl5dKpm9Qq-9yR2YMaFjlzdUF_rOWBlcrbat7rORF9308VV3kog2_h9UwAXwgK4RZ2x2pqFqkadw5eclS9SpS0UE2jcKp7lNZrRx7wfmHWum0-8ac"
              alt="Admin"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-serif font-bold text-slate-900">Admin Panel</h2>
            <p className="font-sans text-sm text-slate-500">Inventory Manager</p>
          </div>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1">
          <Link href="/admin" className="flex items-center gap-3 bg-white text-[#0051d5] border-r-4 border-[#0051d5] px-4 py-3 text-sm font-medium">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 text-sm font-medium hover:text-slate-900 transition-colors">
            <span className="material-symbols-outlined">inventory_2</span>
            Products
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 text-sm font-medium hover:text-slate-900 transition-colors">
            <span className="material-symbols-outlined">reorder</span>
            Orders
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 text-sm font-medium hover:text-slate-900 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <Link href="/admin/products/new" className="block w-full bg-[#0051d5] text-white text-[12px] font-semibold tracking-[0.05em] py-3 px-6 text-center uppercase hover:opacity-90 transition-opacity">
            Add New Product
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 p-8 lg:p-12 max-w-[1280px]">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="font-serif text-[40px] font-semibold leading-[1.2] text-[#0b1c30]">Overview</h1>
            <p className="text-[16px] text-[#45464d] mt-2">Welcome back. Here&apos;s what&apos;s happening with your store today.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase">Oct 24, 2023</span>
            <button className="border border-black text-black text-[12px] font-semibold tracking-[0.05em] py-2 px-6 rounded hover:bg-[#eff4ff] transition-colors">
              Export Report
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-[#c6c6cd] p-6 rounded-lg flex flex-col justify-between h-40">
              <div className="flex justify-between items-start">
                <h3 className="text-[12px] font-semibold tracking-widest text-[#45464d] uppercase">{stat.label}</h3>
                <span className="material-symbols-outlined text-[#45464d]">{stat.icon}</span>
              </div>
              <div>
                <div className="font-serif text-[32px] font-semibold leading-[1.3] text-[#0b1c30]">{stat.value}</div>
                <div className={`text-[12px] font-semibold tracking-[0.05em] mt-1 flex items-center gap-1 ${stat.positive ? 'text-[#0051d5]' : 'text-[#ba1a1a]'}`}>
                  <span className="material-symbols-outlined text-[14px]">{stat.positive ? 'trending_up' : 'trending_down'}</span>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Products Table */}
        <section className="bg-white border border-[#c6c6cd] rounded-lg overflow-hidden">
          <div className="p-6 border-b border-[#c6c6cd] flex justify-between items-center bg-[#eff4ff]/50">
            <h2 className="font-serif text-[24px] text-[#0b1c30]">Recent Products</h2>
            <button className="text-[12px] font-semibold tracking-[0.05em] text-[#0051d5] hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#c6c6cd] bg-white">
                  {['Product Name', 'Category', 'Price', 'Stock', 'Status'].map((col) => (
                    <th key={col} className="py-4 px-6 text-[12px] font-semibold tracking-widest text-[#45464d] uppercase">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c6c6cd] text-[16px] text-[#0b1c30]">
                {products.map((product) => (
                  <tr key={product.name} className="hover:bg-[#eff4ff]/50 transition-colors">
                    <td className="py-4 px-6 flex items-center gap-4">
                      <div className="w-12 h-12 relative flex-shrink-0 rounded border border-[#c6c6cd] overflow-hidden">
                        <Image src={product.src} alt={product.name} fill className="object-cover" />
                      </div>
                      <span className="font-semibold text-black">{product.name}</span>
                    </td>
                    <td className="py-4 px-6 text-[#45464d]">{product.category}</td>
                    <td className="py-4 px-6">{product.price}</td>
                    <td className={`py-4 px-6 ${product.stock === 0 ? 'text-[#ba1a1a]' : ''}`}>{product.stock}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.05em] rounded-lg ${statusStyle[product.status]}`}>
                        {product.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
