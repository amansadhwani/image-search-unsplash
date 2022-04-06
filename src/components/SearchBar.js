import React, { useState } from 'react';
const SearchBar = (props) => {

    const [term, setTerm] = useState('')
    const onSumbitForm = (event) => {
        event.preventDefault();
        props.onFetchTextEntered(term);

    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onSumbitForm}>
                <div className="field">
                    <h4> Image Search </h4>

                    <input
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        placeholder="Search images here"></input>

                </div>
            </form>
        </div>
    );
}


export default SearchBar;