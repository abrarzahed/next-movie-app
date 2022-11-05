import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="bg-slate-700 py-6 px-4 text-gray-300 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
