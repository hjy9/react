import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/Coreconcept/CoreConcepts.jsx";
import Examples from "./components/Examplels.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
