import { useState, useEffect } from "react";
import Entries from "./components/Entries";
import AddEntry from "./components/AddEntry";
import entriesService from "./services/entries"

function App() {
  const [entries, setEntries] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    entriesService.getAll()
      .then(data => setEntries(data))
  }, [])

  function saveEntry(entry) {
    if (!entry.account) {
      throw new Error("An account need to be specified")
    }

    const newEntry = {
      id: entries.length + 1,
      date: new Date().toLocaleDateString(),
      ...entry
    }

    entriesService.create(newEntry)
      .then(data =>
        setEntries(
          entries.concat(data)
        ))
  }

  function deleteEntry(id) {
    entriesService.deleteOne(id)
      .then(setEntries(entries.filter(i => i.id !== id)))
  }

  function editEntry(entry) {
    if (entries.filter(i => i.id === entry.id)) {
      entriesService.update(entry.id, entry)
        .then(
          setEntries(entries.map(i =>
            i.id === entry.id
              ? i = entry
              : i
          ))
        )
    }
  }

  return (
    <div className="App">
      <h1>Accounting Journal</h1>
      <Entries entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      {toggle !== false && <AddEntry saveEntry={saveEntry} />}
      <button onClick={() => setToggle(!toggle)}>{toggle === false ? "Add entry" : "Discard entry"}</button>
    </div>
  );
}

export default App;
