import React, { Component}  from 'react';
import { Map, TileLayer, FeatureGroup,Circle } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"

class Components extends React.Component {
    render() {
        return (
            <div>
                <FeatureGroup>
                    {/*<EditControl*/}
                        {/*position='topright'*/}
                        {/*draw={{*/}
                            {/*rectangle: false*/}
                        {/*}}*/}
                    {/*/>*/}
                    <Circle center={[51.51, -0.06]} radius={200} />
                </FeatureGroup>
            </div>
        )
    }
}

export default Components
