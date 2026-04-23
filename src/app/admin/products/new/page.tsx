'use client'

import Link from 'next/link'
import { useState } from 'react'

const SIZES = ['S', 'M', 'L', 'XL']
const PRESET_COLORS = [
  { label: 'Black', hex: '#000000' },
  { label: 'White', hex: '#ffffff' },
  { label: 'Navy', hex: '#00174b' },
]

export default function NewProductPage() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const toggleColor = (label: string) => {
    setSelectedColors((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (minimal — same as dashboard) */}
      <aside className="fixed left-0 top-0 flex flex-col h-full w-64 border-r border-slate-200 bg-slate-50 z-50">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-serif font-bold text-slate-900">Admin Panel</h2>
          <p className="font-sans text-sm text-slate-500">Inventory Manager</p>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-1">
          <Link href="/admin" className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 text-sm font-medium hover:text-slate-900 transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 bg-white text-[#0051d5] border-r-4 border-[#0051d5] px-4 py-3 text-sm font-medium">
            <span className="material-symbols-outlined">inventory_2</span>
            Products
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 overflow-y-auto px-4 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="font-serif text-[40px] font-semibold leading-[1.2] text-[#0b1c30]">Add New Product</h1>
              <p className="text-[16px] text-[#45464d] mt-2">Create a new item in the inventory.</p>
            </div>
            <Link href="/admin" className="text-[#45464d] hover:text-[#0b1c30] transition-colors">
              <span className="material-symbols-outlined text-[32px]">close</span>
            </Link>
          </header>

          <form className="space-y-12 bg-white p-8 rounded border border-[#c6c6cd] shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            {/* Basic Info */}
            <section className="space-y-6">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.3] text-[#0b1c30] border-b border-[#c6c6cd] pb-2">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]" htmlFor="product-name">Product Name</label>
                  <input
                    id="product-name"
                    type="text"
                    placeholder="e.g. Classic Oxford Shirt"
                    className="w-full bg-[#f8f9ff] border border-[#c6c6cd] rounded px-4 py-3 text-[16px] text-[#0b1c30] focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]" htmlFor="category">Category</label>
                  <select
                    id="category"
                    className="w-full bg-[#f8f9ff] border border-[#c6c6cd] rounded px-4 py-3 text-[16px] text-[#0b1c30] focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select Category</option>
                    <option value="men">Men</option>
                    <option value="sweats">Sweatshirts</option>
                    <option value="outerwear">Outerwear</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]" htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Product details..."
                  className="w-full bg-[#f8f9ff] border border-[#c6c6cd] rounded px-4 py-3 text-[16px] text-[#0b1c30] focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none transition-colors"
                />
              </div>
            </section>

            {/* Pricing & Inventory */}
            <section className="space-y-6">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.3] text-[#0b1c30] border-b border-[#c6c6cd] pb-2">Pricing &amp; Inventory</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]" htmlFor="price">Price (USD)</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#45464d] text-[16px]">$</span>
                    <input id="price" type="number" min="0" step="0.01" placeholder="0.00" className="w-full bg-[#f8f9ff] border border-[#c6c6cd] rounded pl-8 pr-4 py-3 text-[16px] text-[#0b1c30] focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]" htmlFor="stock">Stock Count</label>
                  <input id="stock" type="number" min="0" step="1" placeholder="0" className="w-full bg-[#f8f9ff] border border-[#c6c6cd] rounded px-4 py-3 text-[16px] text-[#0b1c30] focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] outline-none transition-colors" />
                </div>
              </div>
            </section>

            {/* Variants */}
            <section className="space-y-6">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.3] text-[#0b1c30] border-b border-[#c6c6cd] pb-2">Variants</h2>
              <div className="space-y-4">
                <span className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]">Available Sizes</span>
                <div className="flex flex-wrap gap-4">
                  {SIZES.map((size) => (
                    <label key={size} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => toggleSize(size)}
                        className="h-5 w-5 text-[#0051d5] border-[#c6c6cd] rounded focus:ring-[#0051d5] bg-[#f8f9ff]"
                      />
                      <span className="text-[16px] text-[#0b1c30]">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <span className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]">Colors</span>
                <div className="flex flex-wrap gap-3">
                  {PRESET_COLORS.map((color) => (
                    <button
                      key={color.label}
                      type="button"
                      aria-label={color.label}
                      onClick={() => toggleColor(color.label)}
                      className={`w-10 h-10 rounded border-2 transition-colors ${selectedColors.includes(color.label) ? 'border-[#0051d5]' : 'border-[#c6c6cd] hover:border-[#0051d5]'}`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                  <button type="button" className="w-10 h-10 rounded border-2 border-[#76777d] hover:border-[#0051d5] transition-colors flex items-center justify-center bg-[#f8f9ff]">
                    <span className="material-symbols-outlined text-[#76777d]">add</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Media */}
            <section className="space-y-6">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.3] text-[#0b1c30] border-b border-[#c6c6cd] pb-2">Media</h2>
              <div className="space-y-2">
                <label className="block text-[12px] font-semibold tracking-[0.05em] text-[#0b1c30]">Product Images</label>
                <div className="border-2 border-dashed border-[#c6c6cd] rounded p-12 flex flex-col items-center justify-center bg-[#f8f9ff] hover:bg-[#d3e4fe] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[48px] text-[#45464d] mb-4">cloud_upload</span>
                  <p className="text-[16px] text-[#0b1c30] font-semibold mb-1">Click to upload or drag and drop</p>
                  <p className="text-[12px] text-[#45464d]">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="pt-6 flex justify-end gap-4 border-t border-[#c6c6cd]">
              <Link href="/admin" className="px-8 py-3 rounded border border-black text-black text-[12px] font-semibold tracking-wider uppercase hover:bg-[#e5eeff] transition-transform hover:-translate-y-0.5">
                Cancel
              </Link>
              <button type="submit" className="px-8 py-3 rounded bg-[#0051d5] text-white text-[12px] font-semibold tracking-wider uppercase hover:opacity-90 transition-transform hover:-translate-y-0.5 shadow-md">
                Save Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
