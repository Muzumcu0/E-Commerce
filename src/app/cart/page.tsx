'use client'

import Image from 'next/image'

const cartItems = [
  {
    id: '1',
    name: 'Cashmere Tailored Coat',
    variant: 'Camel / Italian Wool',
    size: '40R',
    price: 1250,
    quantity: 1,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD93nxpC3ugz1wxW9po1Bvri8hyuApORJJ7l23POb_dsrqQna7zKmsVwb7Wy5HgPDY_t19Vm6vXHc_eYiI0HFRquV62xEd1JR6Z-C-wONYraxFSjph7Fjxn7wKC723ezSC4e81wZlPT7azcfxLnkFGZyrZg-x7Vvu0E1mym1JMrZXG8bLNSm8tIBUB68O7UHVfD1RfuVKCUwCM53xpfa5VXKWpYIf1dnUPB0dA3_y7D7q-xmkLXvFNOcZ7pKj96L7W_HcRJIV7hPETH',
  },
  {
    id: '2',
    name: 'Merino Mock Neck',
    variant: 'Obsidian / Extra Fine',
    size: 'M',
    price: 195,
    quantity: 2,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwh2VAWOZUEnSBCkMQHnHbNXfjfnZkfMxort3rSbMptXQKwzUz2uMQbWOgGR9S7caaZHO37Q6OkTdTVvG6uKzHSXMPaBloLnuElwBMquAzpPtPDyYZL5vm2MROXtzqhK-jBDLt86ZnBMtd7-swEmzaLGFGlfbYQenLo1YPLofze3EU5AAwwfVbo5hnmhLW9Ag6mJLp2OnXvCRoRGmRQQRfjZNHi8CnXNn4ZACXXkxDhtPTuo3r0t7PvNfjfD_R-LtFokyc2tKO5Wgw',
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const taxes = subtotal * 0.085
  const total = subtotal + taxes

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 py-12">
      {/* Minimal header for checkout */}
      <div className="flex justify-center items-center py-6 border-b border-[#c6c6cd] mb-12 relative">
        <span className="font-serif text-[32px] font-semibold tracking-tighter uppercase font-black text-black">Luxe Clothing</span>
        <div className="absolute right-0 flex items-center gap-2 text-[#76777d]">
          <span className="material-symbols-outlined text-[20px]">lock</span>
          <span className="text-[12px] font-semibold tracking-[0.05em] uppercase">Secure Checkout</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <section className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex justify-between items-baseline border-b border-black pb-3">
            <h1 className="font-serif text-[40px] font-semibold leading-[1.2] text-black">Your Bag</h1>
            <span className="text-[16px] text-[#45464d]">{cartItems.length} Items</span>
          </div>

          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <article key={item.id} className="flex gap-6 pb-6 border-b border-[#c6c6cd] group">
                <div className="w-[120px] md:w-[160px] aspect-[3/4] bg-[#e5eeff] flex-shrink-0 relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between py-2">
                  <div>
                    <h2 className="text-[18px] leading-[1.6] text-black font-bold">{item.name}</h2>
                    <p className="text-[16px] text-[#45464d] mt-1">{item.variant}</p>
                    <p className="text-[12px] font-semibold tracking-[0.05em] text-[#76777d] mt-3 uppercase">Size: {item.size}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-6">
                    {/* Quantity */}
                    <div className="flex items-center border border-[#c6c6cd] w-[100px] h-[40px]">
                      <button className="flex-1 h-full flex items-center justify-center text-[#76777d] hover:text-black transition-colors">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove</span>
                      </button>
                      <span className="text-[16px] text-black flex-1 text-center">{item.quantity}</span>
                      <button className="flex-1 h-full flex items-center justify-center text-[#76777d] hover:text-black transition-colors">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                      </button>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end w-full md:w-auto gap-2">
                      <span className="text-[18px] leading-[1.6] text-black">${(item.price * item.quantity).toLocaleString()}.00</span>
                      <button className="text-[12px] font-semibold tracking-widest text-[#76777d] hover:text-[#ba1a1a] uppercase transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Order Summary + Form */}
        <section className="lg:col-span-5">
          <div className="sticky top-6 flex flex-col gap-6">
            {/* Summary */}
            <div className="bg-white border border-[#c6c6cd] p-6 flex flex-col gap-3">
              <h3 className="font-serif text-[32px] font-semibold leading-[1.3] text-black border-b border-[#c6c6cd] pb-3">Order Summary</h3>
              <div className="flex justify-between items-center py-2">
                <span className="text-[16px] text-[#45464d]">Subtotal</span>
                <span className="text-[16px] text-black">${subtotal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[16px] text-[#45464d]">Shipping</span>
                <span className="text-[16px] text-black">Calculated at next step</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[16px] text-[#45464d]">Taxes</span>
                <span className="text-[16px] text-black">${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-3 mt-3 border-t border-black">
                <span className="text-[18px] font-bold text-black">Total</span>
                <span className="text-[18px] font-bold text-black">USD ${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="bg-white border border-[#c6c6cd] p-6">
              <form className="flex flex-col gap-6">
                {/* Contact */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-black border-b border-[#c6c6cd] pb-2">Contact Information</h3>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="Required for order updates" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                  </div>
                </div>

                {/* Shipping */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-black border-b border-[#c6c6cd] pb-2">Shipping Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="fname">First Name</label>
                      <input id="fname" type="text" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="lname">Last Name</label>
                      <input id="lname" type="text" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="address">Address</label>
                    <input id="address" type="text" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1 col-span-3 md:col-span-1">
                      <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="city">City</label>
                      <input id="city" type="text" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1 col-span-1">
                      <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="state">State</label>
                      <select id="state" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors appearance-none">
                        <option value="">Select</option>
                        <option value="ny">NY</option>
                        <option value="ca">CA</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                      <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="zip">ZIP Code</label>
                      <input id="zip" type="text" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-black border-b border-[#c6c6cd] pb-2">Payment</h3>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="card">Card Number</label>
                    <div className="relative">
                      <input id="card" type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 pl-12 focus:border-[#0051d5] outline-none transition-colors" />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#76777d]">credit_card</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="exp">Expiration</label>
                      <input id="exp" type="text" placeholder="MM/YY" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase" htmlFor="cvc">Security Code</label>
                      <input id="cvc" type="text" placeholder="CVC" className="w-full bg-transparent border border-[#c6c6cd] text-black text-[16px] py-3 px-4 focus:border-[#0051d5] outline-none transition-colors" />
                    </div>
                  </div>
                </div>

                <button type="button" className="mt-3 w-full bg-[#0051d5] text-white text-[12px] font-semibold tracking-widest uppercase py-4 px-8 hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>lock</span>
                  Place Order
                </button>
                <p className="text-[12px] font-semibold tracking-[0.05em] text-[#76777d] text-center mt-2">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
