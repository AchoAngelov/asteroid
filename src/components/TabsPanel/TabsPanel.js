import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './TabsPanel.module.scss';
import EnhancedTable from '../EnhancedTable/EnhancedTable';
import { useAsteroidContext } from '../../context/asteroidsContext';
import AsteroidChart from '../AsteroidChart/AsteroidChart';
import { createRowData, round } from '../../common/common';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div" variant="div">
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function tabProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function TabsPanel(props) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const { asteroids } = useAsteroidContext();
    const [rows, setRows] = React.useState([]);
    const innerRef = React.useRef();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        setRows(
            asteroids.map((asteroid) =>
                createRowData([
                    asteroid.id,
                    asteroid.name,
                    round(
                        asteroid.estimated_diameter.meters
                            .estimated_diameter_max,
                        0.1
                    ),
                    round(
                        asteroid.estimated_diameter.meters
                            .estimated_diameter_min,
                        0.1
                    ),
                ])
            )
        );
    }, [asteroids]);
    const headCells = [
        {
            id: 0,
            numeric: false,
            disablePadding: true,
            label: 'ID',
        },
        {
            id: 1,
            numeric: false,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 2,
            numeric: false,
            disablePadding: false,
            label: 'Max diameter (meters)',
        },
        {
            id: 3,
            numeric: false,
            disablePadding: false,
            label: 'Min diameter (meters)',
        },
    ];
    return (
        <Box className={styles.tabsPanel} sx={{ p: 0 }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {asteroids && (
                        <Tab label={props.label[0]} {...tabProps(0)} />
                    )}
                    {asteroids && (
                        <Tab label={props.label[1]} {...tabProps(1)} />
                    )}
                </Tabs>
            </AppBar>

            <div ref={innerRef}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <EnhancedTable rows={rows} headCells={headCells} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <AsteroidChart innerRef={innerRef} />
                </TabPanel>
            </div>
        </Box>
    );
}
