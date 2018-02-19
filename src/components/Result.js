import React from 'react';

const Result = ({result, resclass}) => {
    return (
        <div className="text-center">
            <div className={"result alert " + resclass}>
                {result ? result : ""}
            </div>
        </div>
    );
}

export default Result;