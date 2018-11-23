import React from 'react';
import {Stepper} from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step"
import StepButton from "@material-ui/core/StepButton"



class Render extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeStep: 0,
        }
        this.handleStep = this.handleStep.bind(this);
    }

    handleStep(step) {
        this.setState({activeStep: step});
    };

    render(){
        const { classes, match } = this.props;
        const sprints = ['sprint 1', 'sprint 2', 'sprint 3'];
        const { activeStep } = this.state;

        return (
            <div>
                <div>Test
                    {/*<Stepper nonLinear activeStep={activeStep} alternativeLabel>*/}
                        {/*{sprints.map((label,index)=>*/}
                        {/*{*/}
                            {/*return (*/}
                                {/*<Step key={label}>*/}
                                    {/*<StepButton*/}
                                        {/*onClick= {this.handleStep(index)}*/}
                                    {/*>*/}
                                        {/*{label}*/}
                                    {/*</StepButton>*/}
                                {/*</Step>*/}
                            {/*)*/}
                        {/*})*/}
                        {/*}*/}
                    {/*</Stepper>*/}
                </div>
            </div>
        )
    }
}

export default Render
