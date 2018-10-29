import React from 'react';
import { render } from 'react-dom'

import {ResponsivePie} from '@nivo/pie'

var data = [
    {
        "id": "rust",
        "label": "rust",
        "value": 576,
        "color": "hsl(167, 70%, 50%)"
    },
    {
        "id": "javascript",
        "label": "javascript",
        "value": 129,
        "color": "hsl(119, 70%, 50%)"
    },
    {
        "id": "java",
        "label": "java",
        "value": 422,
        "color": "hsl(253, 70%, 50%)"
    },
    {
        "id": "hack",
        "label": "hack",
        "value": 71,
        "color": "hsl(307, 70%, 50%)"
    },
    {
        "id": "erlang",
        "label": "erlang",
        "value": 354,
        "color": "hsl(187, 70%, 50%)"
    }
];

class Chart extends React.Component {


    render() {
        return (
            <div style={{height: 200}}>
            <ResponsivePie
                data={data}
                margin={{
                    "top": 40,
                    "right": 80,
                    "bottom": 80,
                    "left": 80
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors="nivo"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
                        "id": "dots",
                        "type": "patternDots",
                        "background": "inherit",
                        "color": "rgba(255, 255, 255, 0.3)",
                        "size": 4,
                        "padding": 1,
                        "stagger": true
                    },
                    {
                        "id": "lines",
                        "type": "patternLines",
                        "background": "inherit",
                        "color": "rgba(255, 255, 255, 0.3)",
                        "rotation": -45,
                        "lineWidth": 6,
                        "spacing": 10
                    }
                ]}
            />
            </div>
        )
    }
}

export default Chart
