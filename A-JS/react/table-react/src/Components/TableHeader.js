import React from 'react';

const TableHeader = (props) => {



    let Titles = Object.keys(props.list[0]);
    return (
        <React.Fragment>
            <tr>
                <th>{Titles[0].toUpperCase()}</th>
                <th>{Titles[1].toUpperCase()}</th>
                <th>{Titles[2].toUpperCase()}</th>
                <th>{Titles[3].toUpperCase()}</th>
            </tr>
        </React.Fragment>
        
    );



}




export default TableHeader;