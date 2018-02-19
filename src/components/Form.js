import React from 'react';
import Datetime from 'react-datetime';

import '../styles/react-datetime.css';


const Form = (props) => {
    let {begin, end} = props;
    
    return (
        <div className="form">
            <form>
                <label htmlFor="begin">Begin</label>
                <Datetime 
                    id="begin" 
                    locale="fr-ca"
                    viewMode="years"
                    onChange={ props.onDate1Change }
                    closeOnSelect={true} />
                <br />

                <label htmlFor="end">End</label>
                <Datetime 
                    id="end" 
                    locale="fr-ca"
                    viewMode="years"
                    onChange={ props.onDate2Change }
                    closeOnSelect={true} />
                <br />

                <div className="text-center">
                    <button 
                        disabled={!begin || !end}
                        onClick={props.calculDifference}
                        className="btn btn-default">
                        Difference (End - Begin)
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;