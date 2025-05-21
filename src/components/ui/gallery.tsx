import Image from 'next/image'

const photos = [
  {
    src: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Planting Trees'
  },
  {
    src: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Community Gathering'
  },
  {
    src: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Art Workshop'
  },
  {
    src: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Nature Walk'
  },
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {photos.map((img, idx) => (
        <div key={idx} className="rounded-lg overflow-hidden shadow-md border border-green-700">
          <Image
            src={img.src}
            alt={img.alt}
            width={400}
            height={250}
            className="object-cover w-full h-40"
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}
