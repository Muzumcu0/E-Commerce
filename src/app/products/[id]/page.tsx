'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const product = {
  id: '1',
  name: 'The Heritage Heavyweight Crew',
  price: '$185.00',
  description: 'Crafted from 14oz brushed French terry cotton, this crewneck is designed for architectural structure and uncompromising comfort. Garment-dyed for a nuanced, lived-in palette.',
  colors: [
    { label: 'Charcoal', hex: '#333333' },
    { label: 'Oatmeal', hex: '#D1CFCD' },
    { label: 'Navy', hex: '#2A3441' },
  ],
  sizes: ['S', 'M', 'L', 'XL'],
  outOfStock: ['XL'],
  images: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAj17qCrhnDLhjNbFiDOKE_YSWcz2F7tz0ktRuVNwEt_tOto_xt5-8M9mHi4KNyZ01TioRbSaL_8oqYBPAc2CKQ0BHK12mQFP41P4kmjaesf2xZFT4PNT7mG9-axOEgSX9TRKQB07Xis42mLjVn1wbC3HfnIqtgd23xGX5nmZ3t1N9r4vt5XVONGp7wnfGH3PimXwP_mb-rZ2XN0rSrfIZjEzC80YkaY-AMhN1cbg5ah_52jNwe2vYILW7si1eAwMsWxvVWmHnAZwTq',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC17vKL9SN7T4fJWNSSB1bw5CJ-ceYk5o2OLa42aL3wpdahEaUW1KBLUaO57NI_EoN0xkpKBFobMTRcKnflgXpvJGySnQ-31IIYJZZALgtuSdmkqjOUCAy5qe2AHiiHNYe_mig4NOjvu7ijPm9ghJ6K6gB4aXyBIaLGYiSU2UGiy8B-ZQa573wVS-rAp7OJUwdWrjAIw2iBbSknbky702bY5Ac-0pRBlTgl7eC4sMSM_UUUV70XIYFaAl6ruCoFCTnZWyq5zm3uQWw0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAuleaPnI5H4jsItTOh4fZ3NutaT4WwKJlBL2j5kzaNctbvnUSQIiRDNTn6UTYV0-9QR4Y3s8m8aQtZ6mlFLaHRZSOqmOc4XIK50Pcf-5qwqjoWxpHlvsniZib4EuP19ZLvb61YvSQyEht3b9iAPj52nYOSk0i6WVMXFDSWncRH20dbAIoNhS4xjTC3sH9Y0pWC9cM7RfserPRNB0mgSwuoZ67ry4hY_IElV4KprK6J6Nf-Kg86EjEigKKBmXME-xHmYCuglfE_BJB9',
  ],
}

const relatedProducts = [
  { name: 'Tailored Twill Trouser', price: '$220.00', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlKuVtvnXoyGtYdYWACyWnhHNxNx0ZbY0uVOHodxyWjS0QcRhrK6dAgmtsrXH1cWeu-zgbOW-KMdcXcI0Fr0EBCAiQwSKu9eSs4F1ex7Hg7faqV9bYpSVmzk80InfF8rIPwXODjVjmVlINnBrKmrwPaaPFNNdnh3dDRhbTKlVb5wAFTQ41G65xmpQux1IhgNV9-RpWojISe0vOmzxNlI9G5rC2tkOiUDvIBDGVSrr_7SU81zBEXiOs3LbSmWCC_GhB-jvzlfZTq27M' },
  { name: 'Essential Heavy Tee', price: '$65.00', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjtom_tcCI3DRVnk85Bot6n8ynrt1rdjaV7fejRuqp5XqRt5H1dd_4YznwHHDf8Sd7gFZPJmY25mkYF4Ob3t1pJGBRQL7Ds9S7P_TJ_yYZlrxKoltIZvKM0Kol6VaIyrcW5AtzRw-RPYfiyR3p20hTHOyVFbaGUVpdsuFr9CMddk7lhDc0axvTBkMGm8TKFQk2zL7HKMiupw87dwNHghaT4ewrQD02s56hRe4-YPK63nFndZILD3svUxf3rxgs0ddmTpxThJl0avh0' },
  { name: 'Court Sneaker 01', price: '$295.00', hidden: true, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyI3FNDAIfm0rbs29HQISv2A3WZaF_p7OPIHO3J5t5PXCOsDK_zGTWUlNeL_LFsiq2fr9hHMR-nkrox2CJRGg0DZvhmNoOM9sT-j0bG9E22nUyYs51G0PAqrpFJCiwk_IZRcEQrsbTuGUwr1VHC31CUkrYRk9h0GpErHenI6_oIZ5uFCy6mlqVepxgAzOzBx4YIuZgmp4MLy6KOd76GeP3O4m6pZ0r2UH_dsxeh_uvlcR1SOfjmgroGbvjgAU65AcEp3I1UVXOaIZ5' },
  { name: 'Utility Canvas Tote', price: '$110.00', hidden: true, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_5gnxEXcK6s1HQ1UbsT1OuochlK7eVGrbir-uBexLJ7JiOWknh9bEblTGlSfet3lawfQgIOpthlaBgenuqmPkhuPe7C4GVR-q36qQ8Jzbe4qhf3QGknK3p3JKBDwvCXlBN8QC4vhfYpzcQh67OcyrHoLH8UltVfuZt4jf2qSlVNYDUy-eVrlk6h9CSXadcHzc5SY4hZ0B8xDJXx5y7aXfG1SZrxRr_DMiDX3C6dfxZwzDTotL3EJyDkxH64jE7oQ2-BY_2n9BgzKD' },
]

export default function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].label)
  const [selectedSize, setSelectedSize] = useState('M')
  const [mainImage, setMainImage] = useState(0)

  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-6 py-12 mb-24 md:mb-0">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-2">
          <div className="w-full aspect-[3/4] bg-[#e5eeff] overflow-hidden rounded relative group cursor-crosshair">
            <Image
              src={product.images[mainImage]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`aspect-[3/4] bg-[#e5eeff] overflow-hidden rounded border transition-all ${i === mainImage ? 'border-[#0b1c30] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <div className="relative w-full h-full">
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-[100px] h-fit pt-4 lg:pt-0">
          <div className="flex flex-col gap-3">
            <nav className="flex gap-2 text-[#45464d] text-[12px] font-semibold tracking-[0.05em] uppercase">
              <Link href="/products" className="hover:text-black transition-colors">Men</Link>
              <span>/</span>
              <Link href="/products?category=sweats" className="hover:text-black transition-colors">Sweats</Link>
            </nav>
            <h1 className="font-serif text-[40px] font-semibold leading-[1.2] text-black">{product.name}</h1>
            <p className="font-serif text-[32px] font-semibold leading-[1.3] text-[#45464d]">{product.price}</p>
          </div>

          <p className="text-[18px] leading-[1.6] text-[#45464d] border-b border-[#dce9ff] pb-3">
            {product.description}
          </p>

          {/* Color */}
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-semibold tracking-[0.05em] text-black uppercase">Color: {selectedColor}</span>
            <div className="flex gap-4">
              {product.colors.map((color) => (
                <button
                  key={color.label}
                  aria-label={color.label}
                  onClick={() => setSelectedColor(color.label)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.label ? 'border-black' : 'border-transparent hover:border-[#c6c6cd]'}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <span className="text-[12px] font-semibold tracking-[0.05em] text-black uppercase">Size</span>
              <button className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] underline hover:text-black transition-colors">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => {
                const isOut = product.outOfStock.includes(size)
                return (
                  <button
                    key={size}
                    disabled={isOut}
                    onClick={() => !isOut && setSelectedSize(size)}
                    className={`py-3 px-4 border text-[12px] font-semibold tracking-[0.05em] uppercase rounded-lg transition-colors relative overflow-hidden
                      ${isOut ? 'border-[#e5eeff] text-[#76777d] bg-white cursor-not-allowed opacity-50' : selectedSize === size ? 'border-black bg-black text-white' : 'border-[#c6c6cd] text-black hover:border-black bg-white'}`}
                  >
                    {size}
                    {isOut && <div className="absolute w-full h-px bg-[#76777d] top-1/2 left-0 -rotate-12" />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full bg-black text-white text-[12px] font-semibold tracking-widest py-5 px-8 uppercase hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
              Add to Cart
            </button>
            <div className="flex items-center gap-2 text-[#45464d] text-[12px] font-semibold justify-center py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> In Stock. Ships within 24 hours.
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-4 border-t border-[#dce9ff]">
            {['Details & Fit', 'Materials & Care', 'Shipping & Returns'].map((item) => (
              <button key={item} className="w-full py-4 flex justify-between items-center text-black hover:text-[#45464d] transition-colors border-b border-[#dce9ff]">
                <span className="text-[12px] font-semibold tracking-[0.05em] uppercase">{item}</span>
                <span className="material-symbols-outlined">add</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Complete the Look */}
      <section className="mt-12 border-t border-[#dce9ff] pt-12">
        <h2 className="font-serif text-[32px] font-semibold text-black mb-6 text-center">Complete the Look</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.name} href="/products" className={`group flex flex-col gap-2 ${p.hidden ? 'hidden md:flex' : ''}`}>
              <div className="w-full aspect-[3/4] bg-[#e5eeff] overflow-hidden rounded relative">
                <Image src={p.src} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white/90 backdrop-blur-sm text-black text-[12px] font-semibold tracking-[0.05em] py-3 px-4 rounded uppercase shadow-sm">Quick Add</button>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-[16px] text-[#45464d]">{p.name}</span>
                <span className="text-[12px] font-semibold tracking-[0.05em] text-black mt-1">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
