import React from 'react';


const Rank = ({name, entries}) => {

    return ( 
        <div>
            <div className= ''>
                { `${name}, your current entry count is...` }
            </div>
            <div className= ''>
                { entries }
            </div>
            
        </div>
    );
}

export default Rank;