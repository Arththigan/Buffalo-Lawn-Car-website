const photos = [
  {
    src: 'https://images.unsplash.com/photo-1625766924125-7b2ad2b4e3c2?q=65&w=700&auto=format&fit=crop&fm=webp',
    caption: 'Striped precision mowing',
    span: 'lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1642541744624-7a2a89545a32?q=65&w=700&auto=format&fit=crop&fm=webp',
    caption: 'Hedge trimming & edging',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1645693228140-a90b27b6be51?q=65&w=700&auto=format&fit=crop&fm=webp',
    caption: 'Healthy, dew-fresh turf',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1641570599342-36953beede98?q=65&w=700&auto=format&fit=crop&fm=webp',
    caption: 'Spacious yard maintenance',
    span: 'sm:col-span-2',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="px-3 py-16 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">Our work</p>
          <h2 className="font-display mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Lawns we&rsquo;ve brought back to life
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[180px]">
          {photos.map((p) => (
            <div key={p.caption} className={`group relative overflow-hidden rounded-2xl ${p.span}`}>
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                decoding="async"
                className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 lg:min-h-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/0 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-bold text-white">{p.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
