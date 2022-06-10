import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import styles from './EnhancedTable.module.scss';
import { useHistory } from 'react-router-dom';
import EnhancedTableHead from './EnhancedTableHead/EnhancedTableHead';
import EnhancedTableBody from './EnhancedTableBody/EnhancedTableBody';

export default function EnhancedTable({ headCells, rows }, props) {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const history = useHistory();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0
            ? Math.max(0, (1 + page) * rowsPerPage - rows.length ? 0 : 0)
            : 0;
    const navigateToAsteroid = (id) => {
        history.push(`/asteroid/${id}`);
    };
    return (
        <Box sx={{ width: '100%', p: 0 }}>
            <Paper className={styles.enhancedTable} sx={{ width: '100%' }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            headCells={headCells}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length ? rows.length : 0}
                        />
                        <EnhancedTableBody
                            page={page}
                            rowHandler={navigateToAsteroid}
                            emptyRows={emptyRows}
                            rowsPerPage={rowsPerPage}
                            order={order}
                            rows={rows}
                            orderBy={orderBy}
                        />
                    </Table>
                </TableContainer>
                <TablePagination
                    className={styles.enhancedTable}
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    color="white"
                    count={rows.length ? rows.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
