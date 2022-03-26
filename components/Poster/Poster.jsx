import Image from 'next/image';

const Poster = ({ result, onClick }) => {
  return (
    <div
      className="flex flex-col space-y-2 w-48 rounded-md bg-slate-300"
      onClick={() => onClick(result.id)}
    >
      <div className="relative h-64">
        <Image
          alt={`${result.original_title}`}
          className="rounded-md"
          aria-label={`${result.original_title}`}
          src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="flex space-x-2 pb-2 self-center items-center">
        <span className="text-lg font-semibold">{result.title}</span>
        <span>({new Date(result.release_date).getFullYear()})</span>
      </div>
    </div>
  );
};

export default Poster;
