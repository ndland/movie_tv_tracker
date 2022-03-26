import Image from 'next/image';

const Poster = ({ info: { results }, onClick }) => {
  return (
    <div
      className="flex flex-col space-y-2 w-48 rounded-md bg-slate-300"
      onClick={() => onClick(results[0].id)}
    >
      <div className="relative h-64">
        <Image
          alt={`${results[0].original_title}`}
          className="rounded-md"
          aria-label={`${results[0].original_title}`}
          src={`https://image.tmdb.org/t/p/original${results[0].poster_path}`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="flex space-x-2 pb-2 self-center items-center">
        <span className="text-lg font-semibold">{results[0].title}</span>
        <span>({new Date(results[0].release_date).getFullYear()})</span>
      </div>
    </div>
  );
};

export default Poster;
