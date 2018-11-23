import React from 'react';

function withSubscription(WrappedComponent) {
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                data: 'select'
            }
        }

        render(){
            return <WrappedComponent data={this.state.data} {...this.props}/>
        }
    }
}

export default withSubscription
