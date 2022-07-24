import React, { useEffect, useState } from 'react';

import BubbleChart from '@weknow/react-bubble-chart-d3';
import { useAsteroidContext } from '../../context/asteroidsContext';
import { round } from '../../common/common';
function AsteroidChart({ innerRef }) {
    const { asteroids } = useAsteroidContext();
    const [chartData, setChartData] = useState([]);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const asteroidsData = asteroids.map((asteroid) => {
            return {
                label: `Diameter ${round(
                    asteroid.estimated_diameter.meters.estimated_diameter_max,
                    0.1
                )} m, distance to Earth ${round(
                    asteroid.close_approach_data[0].miss_distance.kilometers
                )} km, speed ${round(
                    asteroid.close_approach_data[0].relative_velocity
                        .kilometers_per_second
                )} m/s`,
                value: round(
                    asteroid.estimated_diameter.meters.estimated_diameter_max,
                    0.1
                ),
            };
        });
        setChartData(asteroidsData);
        function handleResize() {
            setWidth(innerRef.current.offsetWidth - 48);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [asteroids, setWidth, innerRef]);

    return (
        chartData.length && (
            <BubbleChart
                width={width}
                height={1200}
                overflow={true}
                showLegend={false}
                data={chartData}
                labelFont={{
                    family: 'Arial',
                    size: 12,
                    color: '#fff',
                    weight: 'bold',
                }}
            />
        )
    );
}

export default AsteroidChart;
