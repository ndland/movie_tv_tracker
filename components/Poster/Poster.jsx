import Image from 'next/image';

const Poster = () => (
  <div className="relative w-48 h-64">
    <Image
      alt="image"
      aria-label="image"
      src="https://m.media-amazon.com/images/I/610fuvWAaqL._AC_SL1039_.jpg"
      objectFit="cover"
      layout="fill"
    />
  </div>
);

export default Poster;
