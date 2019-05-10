import React from 'react';
import {toPosition} from "./lib";

const positions = [0,1,2];

export default (props) => (
    <table className={props.className}>
        <tbody>
        {
            positions.map(row => (
                <tr key={"row" + row}>
                    {positions.map(column => (
                        <td key={"cell"+row+column} onClick={() => props.move(row,column)}>{props.data[toPosition(row, column)]}</td>
                    ))}
                </tr>
            ))
        }
        </tbody>
    </table>
)