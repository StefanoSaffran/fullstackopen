import React from 'react';

const PersonForm = ({ name, number, handleNewName, handleNewNumber, addContact}) => {
    return (
        <form onSubmit={addContact}>
            <div>
                name: <input value={name} onChange={handleNewName} />
            </div>
            <div>
                number: <input value={number} onChange={handleNewNumber} />
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    );
};

export default PersonForm;