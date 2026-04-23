import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[716px] md:h-[870px] bg-[#e5eeff] flex items-center justify-center overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCumP0IXMZcCMG8hadfLJVnbcVF70EAzSVaXK8J5XclANLkJkTEsiL0sPr5bKfXIf0MGvxv2-3dGOe_0V1nTpcAn1BnnV0yQRn3MJtL9w2bje_aeInlmq_sWCTlycdxqVIs7UmSl3CZ9jV2Apc5jBC7AKrDUbhIm9bZSe4JzrwuMyXVt7aPX8Z1cic0DTg-02Fxj-Dopu_u2bVuWr7piY_bWMllHNT5qcqCVCmzwiAosIryy301X7Mykg0dx2X4vell3ZOUvOWLw4Dh"
          alt="Hero editorial shot"
          fill
          className="object-cover object-center opacity-90 mix-blend-multiply"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-serif text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6 drop-shadow-lg">
            Elevate Your Essentials.
          </h1>
          <p className="text-[18px] leading-[1.6] text-white mb-12 drop-shadow-md max-w-xl mx-auto">
            Discover the new Fall/Winter collection. Crafted for the modern individual who values quiet luxury and uncompromising quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products?category=men" className="bg-[#0051d5] text-white text-[12px] font-semibold tracking-[0.05em] py-4 px-8 uppercase hover:-translate-y-1 transition-transform shadow-md inline-block">
              Shop Men
            </Link>
            <Link href="/products" className="bg-transparent border border-white text-white text-[12px] font-semibold tracking-[0.05em] py-4 px-8 uppercase hover:bg-white hover:text-[#0b1c30] transition-colors inline-block backdrop-blur-sm">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      <div className="h-12" />

      {/* Featured Categories */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 w-full">
        <div className="flex justify-between items-end mb-6 border-b border-[#c6c6cd] pb-2">
          <h2 className="font-serif text-[32px] font-semibold leading-[1.3] text-[#0b1c30]">Curated Edit</h2>
          <Link href="/products" className="text-[12px] font-semibold tracking-[0.05em] text-[#0051d5] uppercase hover:underline flex items-center gap-1">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <Link href="/products?category=men" className="group relative col-span-1 md:col-span-8 h-[400px] md:h-full overflow-hidden bg-[#e5eeff] rounded-lg block">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrwa165X9tE3dy9D1v-xvjUk4K8MObWfacxdMY1YDCrJwdSJPD0G3XriKnBn7rSspxxyb3JzJb0D83g28pRh4E1spa9OPq6cTXAVAm7u8RZlMDoGOkCk0IzEk8Xk-nL1GDcseU2P5mbXn9wHMc1F1rLDFwk1maiE0wt9rwEsEiLwaGQaamkVCkRlqB4Kv7UGLqV0szfzUMUmd2_oZSaRPWX8_8qp5qUFGELTLv6NzxxWDnRwmNncoxyE8jtLOBR2dK8OLnAAIWJWp-"
              alt="Men's Tailoring"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[12px] font-semibold tracking-[0.05em] px-3 py-1 mb-2 border border-white/30">Focus</span>
                <h3 className="font-serif text-[40px] font-semibold text-white">Men&apos;s Tailoring</h3>
              </div>
              <span className="material-symbols-outlined text-white bg-white/20 backdrop-blur-md p-3 rounded-full group-hover:bg-white group-hover:text-[#0b1c30] transition-colors border border-white/30">arrow_forward</span>
            </div>
          </Link>

          <div className="col-span-1 md:col-span-4 flex flex-col gap-6 h-full">
            <Link href="/products?category=sweats" className="group relative flex-1 min-h-[250px] overflow-hidden bg-[#e5eeff] rounded-lg block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1H2-3iwHRH2qJKh4OrfyVi-b0W48cqeRqgeubHOcJkCe4yLZOzBuGHHZVos4za2dJ84uICE7wDzhO5RTmAfxWIhCG7pBuUgnb4bJjFXnrFofXgN9i7gpEHoxxQ8O_JIAqgtowNR1F03_EG-1ToDFIhoFAHITZTxS1IoTpTecK7VlSAyV9yFKeHJnj0lgZFrV7FL6oxyg3MrGE0i8luE7o6jwWCcVyBwFSV6nxrlR8mh8N4niOj1Je1bkLQk7-adhulBWj7vGEGO9p"
                alt="Premium Sweats"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-serif text-[32px] font-semibold text-white mb-1">Premium Sweats</h3>
                <p className="text-[12px] font-semibold tracking-widest text-white/80 uppercase">Heavyweight Comfort</p>
              </div>
            </Link>
            <Link href="/products?category=accessories" className="group relative flex-1 min-h-[250px] overflow-hidden bg-[#e5eeff] rounded-lg block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuiV6GsR5VY2DYeE2HvLM7R7JwwI6TNBI_kAltVYpzxMpjefNbSS__7uRRURpp7fRs7mKspkLWJcN_mj9sITtlnNmFbWcnoo5rGp9w7PFKY4e_ODXb-l02A9Z-cijzRBtRLqpJyeSYLfzVx-0bTAz5tXqGdQsMijXrwthE3vZqLNiH34ocPEmPNBIkVzHsV-XMlkPRLfEmtN8D3G-EVZRfbD5nURXTpN-X7C9O9a5eZVKGTZOvzRfXOwdwEJ9weEQG6hrgfI_2q-AW"
                alt="Accessories"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-serif text-[32px] font-semibold text-white mb-1">Accessories</h3>
                <p className="text-[12px] font-semibold tracking-widest text-white/80 uppercase">The Final Touch</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-12" />

      {/* Trending Products */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 w-full bg-[#eff4ff] py-6 rounded-xl">
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-serif text-[32px] font-semibold text-[#0b1c30]">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div key={product.name} className={`group flex flex-col ${product.hidden ? 'hidden md:flex' : ''}`}>
              <Link href="/products">
                <div className="relative aspect-[3/4] bg-[#e5eeff] mb-4 overflow-hidden rounded-lg border border-[#c6c6cd]/30">
                  <Image src={product.src} alt={product.name} fill className="object-cover group-hover:opacity-80 transition-opacity" />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-white/80 backdrop-blur-md text-[#0b1c30] text-[10px] font-semibold px-2 py-1 uppercase">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                    <button className="bg-white text-[#0b1c30] text-[12px] font-semibold tracking-[0.05em] py-2 px-6 rounded-full hover:bg-[#0051d5] hover:text-white transition-colors uppercase w-full">
                      Quick Add
                    </button>
                  </div>
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-serif text-[18px] font-semibold text-[#0b1c30] leading-tight mb-1">{product.name}</h4>
                  <p className="text-[12px] font-semibold tracking-[0.05em] text-[#45464d] uppercase">{product.color}</p>
                </div>
                <span className="text-[16px] text-[#0b1c30] font-semibold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-12" />
    </div>
  )
}

const trendingProducts = [
  {
    name: 'Essential Pima Tee',
    color: 'Bone White',
    price: '$45',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP39QQKISjo45js-SWr8Csdql_PY3SZ9TvPal6r8iKCDem9BS5mTmO43lT5Rm3LNa7PxN-cQx_1nFZ1Y8GgRBdFQ-TjYYgAwgkddaNYEkZ1_ER7gi5yMaTvgk_08JRHVLMpou3wTVBFQKBcXsgNNDwKvYF7i6z1aFq08hhkf__N9JqmrCHqfiWBJ_TlRha5pcAjN3kKIaLOzR3E35XtFd3Us_71-t5IvpO-LCqQljpxPB0DbQy35Co0Oywh-216w5sZyjNzMJUNvOZ',
  },
  {
    name: 'Mock Neck Knit',
    color: 'Heather Grey',
    price: '$120',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-g71UUAJXJFsbS6rLCNe7AsD1XWu7UscEEU9O6LMXCO963yuapFG-qMNypHPFLd8SKyXd6f9Tm_34eZl2NB2-jyAU31WqwU2HTVeNugBFiFuukDBDGqHWusGaj9_Snbg6t29XJ8KcCNX_XRy_B6M8X4ZmvHn2ir8xORQHWJF8aRWMbZqr-tt_NyQgiXo-dBmDcnBEsIlbbTvcMXgv8dbheVVIFV--r8IQO0emovEsu7M1SmmAifIVEDUrzSaQ5z0iRNayPnNxoay3',
  },
  {
    name: 'Everyday Trouser',
    color: 'Charcoal',
    price: '$95',
    hidden: true,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo72BD_qQxuty7AusOP5_GDgZkYtPn0CuWqS0Ye75CTPPwFoavhhMQmHEYghJDsjtTJ1SSuj9OIKC3aUlgsmAL-0Dkw6QH5HFlDdRWQ0yOTe3ZsYUpmlZ-nCPqY4kol4TSPaNk3NfjRlSnmqymT0h5RMkeDygwLPB3lqCfr-3WYOJBkiVHIIPHwLGbea9N9KRzsqCfk-SMtr5w1tgLIgVA6m9UqvStKcSM5075OL7ZPl_W8YDFmBrxsqbNAyq6fXIGS4YhDz5w1aD7',
  },
  {
    name: 'Leather Bomber',
    color: 'Midnight Black',
    price: '$350',
    badge: 'Low Stock',
    hidden: true,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIZX01THNdY-81MKKQDZnuNyNBjeAGXFTVeA7aMlJOqw99_6GiX66nG1WiuBfB-60Sw8IoUxH5Qfkhc6CIFUNgDOUFGMY8zcZd-04aQ6Y4i50O0l3OqK-eCZ9AiWtUD8plXF5V8-JF6MPReFu0eDock4LyJzDzEoPpoUV_RiTR3lcHK99rgTsTfbvbhGn3wRnmNnD47V12u7ed3_zGdundgkzFWFIBH7N_HB7DewGc30YjkluyxE50r0RODL5eCH-BFRpmfzo0xnx4',
  },
]
