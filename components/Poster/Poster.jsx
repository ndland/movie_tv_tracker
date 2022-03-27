import Image from 'next/image';

const Poster = ({ result, onClick }) => {
  return (
    <div className="flex flex-col" onClick={() => onClick(result)}>
      <div className="relative h-64">
        <Image
          alt={`${result.original_title}`}
          className="rounded-md"
          aria-label={`${result.original_title}`}
          src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          layout="fill"
        />
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Poster;
