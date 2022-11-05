export default function Results({ results }) {
  return (
    <div>
      {results.map((r, i) => (
        <h1 key={i}>{r.title}</h1>
      ))}
    </div>
  );
}
