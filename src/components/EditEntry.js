import { useState } from "react"

function EditEntry({ entry, handleDiscard, handleSave }) {
    const [date, setDate] = useState(entry.date)
    const [account, setAccount] = useState(entry.account)
    const [description, setDescription] = useState(entry.description)
    const [debit, setDebit] = useState(entry.debit)
    const [credit, setCredit] = useState(entry.credit)

    function editedObject() {
        return {
            id: entry.id,
            date: date,
            account: account,
            description: description,
            debit: parseFloat(debit),
            credit: parseFloat(credit)
        }
    }

    return (
        <tr>
            <td><input type="date" defaultValue={entry.date} onChange={(e) => setDate(e.target.value)}/></td>
            <td><input type="text" name="account" defaultValue={entry.account} onChange={(e) => setAccount(e.target.value)} onFocus={(e) => console.log(e.target.value)}/></td>
            <td><input type="text" name="description" defaultValue={entry.description} onChange={(e) => setDescription(e.target.value)}/></td>
            <td><input type="number" name="debit" defaultValue={entry.debit} onChange={(e) => setDebit(e.target.value)}/></td>
            <td><input type="number" name="credit" defaultValue={entry.credit} onChange={(e) => setCredit(e.target.value)}/></td>
            <td><button onClick={() => handleSave(editedObject())}>Save</button></td>
            <td><button onClick={() => handleDiscard()}>Discard</button></td>
        </tr>
    )
}

export default EditEntry