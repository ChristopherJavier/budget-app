import { useState } from "react"

function AddEntry({ saveEntry }) {
    const [account, setAccount] = useState("")
    const [description, setDescription] = useState("")
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")

    function handleLogin(event) {
        event.preventDefault()

        saveEntry({
            account: account, 
            description: description || "", 
            debit: parseFloat(debit) || 0, 
            credit: parseFloat(credit) || 0
        })

        setAccount("")
        setDescription("")
        setDebit("")
        setCredit("")
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    account
                    <input type="text" name="account" onChange={(e) => setAccount(e.target.value)} value={account}/>
                </label>
                <br />
                <label>
                    description
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
                </label>
                <br />
                <label>
                    debit
                    <input type="number" name="debit" onChange={(e) => setDebit(e.target.value)} value={debit}/>
                </label>
                <br />
                <label>
                    credit
                    <input type="number" name="credit" onChange={(e) => setCredit(e.target.value)} value={credit}/>
                </label>
                <br />
                <input type="submit" value="Save Entry"/>
            </form>
        </div>
    )
}

export default AddEntry