import Image from 'next/image'
import Link from 'next/link'

const products = [
  { id: '1', name: 'Heavyweight Boxy Sweatshirt', color: 'Heather Grey', price: '$120', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5EshMVrCVLKujiR9wSdyxf_SkvnPMNJrWCh1-peCfg9W3DC4AxaoQLj442Xi3HEmjQuP5upIOGGIJs9UW178ApeGtoqEkagdiW2UoN_oFOIyHOOD7AyEZaWy49K-wsRvz9mWTOuKYtlHEnCK27nP-mqssF1OwHwWyPiHDiS4Y1skU0lglGz9lQ3dHLC4E97XHzngJ7rgvxAMTlX04Jfc416OBftwORCRHTPh34Vp88AxzwlnMEn5t-y1JYoUTw35-uz2X2TJ8Qfud' },
  { id: '2', name: 'Essential Pima Tee', color: 'Optic White', price: '$45', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2hZcMsEv-t2HgYmFL84r67iXUpRWHA1IsPmJKvFr-Uyr-cfcpsIGfLIyoKI9E_t3mteSXBpeuDnaShU9u2bkuf9PCFEmrhOxqmmgSDaU0MlMtmBFDL5fMePYXhtq5cf7fSYptdhseCAYaqRUOp4F7zWSqf8JyLWrk40oF75ri2hA2zGTmmLZXLgsjonq9loA7nxA4QG_-TvykQW27Be0F1zRS8WRiKo_7KKMpoAodPwEQN0XCs2ZFOWuTAHj6Uy78EXD2RUXnWey-' },
  { id: '3', name: 'Merino Wool Crewneck', color: 'Onyx Black', price: '$165', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQEAbA7GK2clBV1xp6NHbnWtxacJbyVxZ_dbrlNZPbBPLFsV5ZagHpyemIBceLM82rwXotC1BHUH-n2a-KfOg7hVF65tXwk8ppnqrSCYBEccGmeX_TFRv2oImrB4oj7t2PhX5EHckyxw92we3p8KpzXzAt1ur_l6fEqZgFuDmXt3wtriAEt5wUvKKCA4JLVoT0jmrm85EYlUVB-yC12AK0l-oTKozYusducYbYd14QVA0IcXub7-9I8fQZYjtrOx6HYjHCXFfop95Y' },
  { id: '4', name: 'Structured Zip Hoodie', color: 'Midnight Navy', price: '$140', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfq5pD_9K4a1QTPU0vhXEvrGknsgjYjx11h-KeqvkI2avf6M-o8zHa3JpqJOHUD0YaPYQnYMJfv9Nwwx1bwin9mSwT4aAUie39R8c37boYWho_-kK4znY4BFWJMhJyxbzq7NXKiA6rN8M5KBnIh0C-P1FFeu07E2hQjWKiu_QFirE4RzTCoNR4ioQCR0XkFZwcfjMXmeiTnZnsHi5fauuAurtlnqE01613QPqbBVs5qnImG0-7ujq8a1PYVhEMGcadwllI7GHqUbbT' },
  { id: '5', name: 'Loopback Lounge Pant', color: 'Stone', price: '$110', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCWai8aBsld0D3CBKQ6RJl5TcEy4-6BhyY1tRubmeOgrbZFTFyKNEFJJP61KgKHUSg3p8DcSw0TuH7Booz2-5k56iCA3IN--aGSD-x9Odvj2WMje73gZinSNlpw492IbkdoXubXlwC-w9rz9PNAUswm-NswLYXpBRuSYdVDGK3Ql7AVXZmY8u5do3UGqgn_ikJy6XGBKdZyzR4llsWAzM6BK_d6iMrsW31G8jwks3BhrW6-bD0jM4bLgHzJCmywqnWKT7X6rK_eFRm' },
  { id: '6', name: 'Long Sleeve Base Layer', color: 'Ash Grey', price: '$65', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWpdkIhsMk4SYj17w2-ZIuq3j25jdSfsliQGgFxfOm7hrSZzeJ0u28RfQ-ouqS5Q-FywOlmgHjFQn9GJeDTzjhjBWoPeQW7EY7G31HtkeDUTU2FQGQioHNU9Q9YHdtaYVJTNNtuj_MQsx3IOL_a7zO2d-oYxZym52ui5O-4S6s42LzCz-3Q1mHR5Q2UWLlFQzek3_DnE7ZEwV-KeBKk4r7BOBk_S3wUU2SydQ69Pjrn8El113Hj24nyRGpXJ1Gn_Y0TvHvSc6qisWk' },
]

export default function ProductsPage() {
  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-8 py-12">
      {/* Page Header */}
      <div className="mb-12 border-b border-[#c6c6cd] pb-8">
        <h1 className="font-serif text-[64px] leading-[1.1] font-bold text-[#0b1c30]">Men</h1>
        <p className="text-[18px] leading-[1.6] text-[#45464d] mt-3 max-w-2xl">
          Discover functional elegance with our curated selection of foundational garments. Designed for longevity and crafted with precision.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 md:sticky md:top-32">
          <div className="flex flex-col gap-6">
            {/* Category */}
            <div className="border-b border-[#c6c6cd] pb-6">
              <h3 className="text-[12px] font-semibold tracking-widest text-[#0b1c30] mb-4 uppercase">Category</h3>
              <div className="flex flex-col gap-3">
                {['Men', 'Sweats', 'Outerwear'].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked={cat !== 'Outerwear'} className="h-4 w-4 text-[#0051d5] border-[#76777d] rounded focus:ring-[#0051d5]" />
                    <span className="text-[16px] text-[#0b1c30] group-hover:text-[#0051d5] transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="border-b border-[#c6c6cd] pb-6">
              <h3 className="text-[12px] font-semibold tracking-widest text-[#0b1c30] mb-4 uppercase">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className={`w-12 h-10 flex items-center justify-center border rounded text-[12px] font-semibold transition-colors ${size === 'M' ? 'border-[#0051d5] bg-[#e5eeff] text-[#0051d5]' : 'border-[#76777d] text-[#0b1c30] hover:border-[#0051d5] hover:text-[#0051d5]'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="border-b border-[#c6c6cd] pb-6">
              <h3 className="text-[12px] font-semibold tracking-widest text-[#0b1c30] mb-4 uppercase">Color</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Black', bg: '#1a1a1a' },
                  { label: 'Light Grey', bg: '#e5e5e5', active: true },
                  { label: 'Navy', bg: '#3b4152' },
                  { label: 'Khaki', bg: '#8b7e6a' },
                ].map((color) => (
                  <button key={color.label} aria-label={color.label} className={`w-6 h-6 rounded-full border border-[#c6c6cd] ring-2 ring-offset-2 transition-all ${color.active ? 'ring-[#0051d5]' : 'ring-transparent hover:ring-[#76777d]'}`} style={{ backgroundColor: color.bg }} />
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-[12px] font-semibold tracking-widest text-[#0b1c30] mb-4 uppercase">Price Range</h3>
              <div className="flex items-center gap-4">
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-[#45464d]">$</span>
                  <input type="number" placeholder="Min" className="w-full pl-7 pr-3 py-2 border border-[#76777d] rounded bg-transparent text-[16px] text-[#0b1c30] focus:border-[#0051d5] outline-none transition-colors" />
                </div>
                <span className="text-[#45464d]">-</span>
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-[#45464d]">$</span>
                  <input type="number" placeholder="Max" className="w-full pl-7 pr-3 py-2 border border-[#76777d] rounded bg-transparent text-[16px] text-[#0b1c30] focus:border-[#0051d5] outline-none transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col cursor-pointer">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#eff4ff] mb-4 rounded">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0051d5] text-white px-8 py-3 text-[12px] font-semibold tracking-[0.05em] whitespace-nowrap rounded">
                    Quick Add
                  </button>
                </div>
              </Link>
              <div className="flex justify-between items-start gap-4">
                <Link href={`/products/${product.id}`}>
                  <h2 className="text-[18px] leading-[1.6] text-[#0b1c30]">{product.name}</h2>
                </Link>
                <span className="text-[16px] font-bold text-[#0b1c30]">{product.price}</span>
              </div>
              <p className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] mt-1">{product.color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
