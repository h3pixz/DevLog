import Header from "./components/Header";
import Hero from "./components/Hero";
import LogCard from "./components/LogCard";
import entries from "./locales/entries.json"

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      {entries.map((entry) => (
        <LogCard key={entry.id} entry={entry} />
      ))}
    </>
  );
}
