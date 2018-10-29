import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import CardHeader from '@material-ui/core/CardHeader'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

const cardStyle = {
    display: 'block',
    width: '250px',
    height: '325px'
}

const screenProps = {
    title: '0', // main calculation
    titleTypographyProps: {align: 'right'},
    subheader: '0', // last calculated result
    subheaderTypographyProps: {align: 'right'}
}

function SimpleCard(props) {
    const { classes } = props;

    return (
        <ExpansionPanel style={{width: '270px'}}>
            <ExpansionPanelSummary>
                <Card raised style={cardStyle}>
                    {/*Screen*/}
                    <CardHeader {...screenProps}/>
                    <Divider/>
                    {/*Buttons*/}
                    <CardContent>
                        <Button size="small">0</Button>
                        <Button size="small">+</Button>
                        <Button size="small">=</Button>
                        {/*etc*/}
                    </CardContent>
                </Card>
                {/*Screen*/}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={cardStyle}>
                <Card raised style={cardStyle}>
                    {/*Screen*/}
                    <CardHeader {...screenProps}/>
                    <Divider/>
                    {/*Buttons*/}
                    <CardContent>
                        <Button size="small">0</Button>
                        <Button size="small">+</Button>
                        <Button size="small">=</Button>
                        {/*etc*/}
                    </CardContent>
                </Card>
                {/*Buttons*/}
            </ExpansionPanelDetails>
        </ExpansionPanel>
        // <Card rasised style={cardStyle}>
        //     <CardHeader {...screenProps}/>
        //     <Divider/>
        //     {/*Buttons*/}
        //     <CardContent>
        //         <Button size="small">0</Button>
        //         <Button size="small">+</Button>
        //         <Button size="small">=</Button>
        //         {/*etc*/}
        //     </CardContent>
        // </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SimpleCard;
