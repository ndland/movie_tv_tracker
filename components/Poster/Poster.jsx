import Image from 'next/image';

const Poster = ({ info: { results } }) => {
  return (
    <div className="relative w-48 h-64">
      <Image
        alt="image"
        className="rounded-md"
        aria-label={`${results[0].original_title}`}
        src={`https://image.tmdb.org/t/p/original${results[0].poster_path}`}
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
};

export default Poster;
