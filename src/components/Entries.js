/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import EditEntry from "./EditEntry"

function Entries({ entries, deleteEntry, editEntry }) {
    const [actualEntry, setActualEntry] = useState(null)
    const [totalDebit, setTotalDebit] = useState(0)
    const [totalCredit, setTotalCredit] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)

    useEffect(() => {
        setTotalDebit(entries.reduce((acc, i) => acc + i.debit, 0))
        setTotalCredit(entries.reduce((acc, i) => acc + i.credit, 0))
        setTotalBalance(totalDebit - totalCredit)
    });

    if (entries.length === 0) {
        return null
    }

    function handleEdit(id) {
        setActualEntry(id)
    }

    function handleEditDiscard() {
        setActualEntry(null)
    }

    function handleEditSave(entry) {
        editEntry(entry)
        setActualEntry(null)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>account</th>
                    <th>description</th>
                    <th>debit</th>
                    <th>credit</th>
                </tr>
            </thead>
            <tbody>
                {
                    entries.map((i) =>
                        actualEntry === i.id
                            ? (
                                <EditEntry key={i.id} entry={i} handleDiscard={handleEditDiscard} handleSave={handleEditSave} />
                            ) : (
                                <tr key={i.id}>
                                    <td>{i.date}</td>
                                    <td>{i.account}</td>
                                    <td>{i.description}</td>
                                    <td>{i.debit}</td>
                                    <td>{i.credit}</td>
                                    <td><button onClick={() => deleteEntry(i.id)}>X</button></td>
                                    <td><button onClick={() => handleEdit(i.id)}>...</button></td>
                                </tr>
                            )
                    )
                }
                <tr>
                    <td colSpan={3}>Total</td>
                    <td>{totalDebit}</td>
                    <td>{totalCredit}</td>
                </tr>
                <tr>
                    <td colSpan={3}>Total Balance</td>
                    <td colSpan={2}>{totalBalance}</td>
                </tr>
            </tbody>
        </table >
    )
}

export default Entries