import React,{Component} from 'react'

class Child extends Component {
    constructor(props){
        super(props)
        this.onChange = this.props.onChangeLanguage
        this.state = {
            test: props.test,
            languageChose: props.languageChosen
        }
        console.log(props)
    }

    // onChange = () => {
    //     this.props.onChangeLanguage;
    // };

    render() {
        const { languageChosen } = this.props.state;
        console.log(this.onChange)
        return (
            <div>
                <div>test: {this.state.test.toString()}</div>
                {this.state.languageChose === "English" ? "Spanish" : "English"}
                <button onClick={this.onChange}>Change Language</button>
            </div>
        );
    }
}

export default Child
