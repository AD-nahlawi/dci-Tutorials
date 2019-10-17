import React from 'react';

const TableBody = (props) => {

    // const body = props.list.map(map_of_List =>
    //     <tr>
    //                     <td> {map_of_List.id} </td>
    //                     <td> {map_of_List.name} </td>
    //                     <td> {map_of_List.age} </td>
    //                     <td> {map_of_List.email} </td>
    //                 </tr>  
    //             );

    // return (body);




    return props.list.map(function(map_of_List){
            return (

                        <tr key={map_of_List.id}>
                            <td> {map_of_List.id} </td>
                            <td> {map_of_List.name} </td>
                            <td> {map_of_List.age} </td>
                            <td> {map_of_List.email} </td>
                        </tr>  

            )
    }
    ) // map()
    





}





export default TableBody;










