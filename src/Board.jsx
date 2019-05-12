import React from 'react';

export default (props) => {
    const board = props.data.length === 9 ? [[props.data[0], props.data[1], props.data[2]], [props.data[3], props.data[4], props.data[5]],[props.data[6], props.data[7], props.data[8]]] : props.data;
    return <table className={props.className}>
        <tbody>
        {
            board.map((rowData, row) => (
                <tr key={"row" + row}>
                    {rowData.map((columnData, column) => (
                        <td key={"cell"+row+column} onClick={() => props.move(row,column)}>{columnData}</td>
                    ))}
                </tr>
            ))
        }
        </tbody>
    </table>
}
