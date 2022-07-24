import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { getComparator, stableSort } from '../../../common/common';

export default function EnhancedTableBody({
    page,
    rowHandler,
    emptyRows,
    rowsPerPage,
    order,
    rows,
    orderBy,
}) {
    return (
        <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                        <TableRow
                            onClick={() => rowHandler(row[0])}
                            key={row[0]}
                        >
                            {row.row.map((cell, i) => (
                                <TableCell key={cell + i} align="left">
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            {emptyRows > 0 && (
                <TableRow
                    style={{
                        height: 53 * emptyRows,
                    }}
                >
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
    );
}
