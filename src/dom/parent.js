import React,{Component} from 'react'
import {NavLink,Route,BrowserRouter as Router} from 'react-router-dom'
import Child from './child'

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Path: {
                pathname: "/child/id/:id",
                state: {
                    languageChosen: "English",
                    test: true
                }
            }
        };
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
    }
    onChangeLanguage() {
        const { Path } = this.state
        Path.state.test = !Path.state.test
        Path.state.languageChosen = Path.state.test? 'Spanish' : 'English'
        this.setState({Path})

    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavLink to={this.state.Path}>ToChild</NavLink>
                        <Route
                            path={`/child/id/:id`}
                            component={props => (
                                <Child {...props} onChangeLanguage={this.onChangeLanguage} test={this.state.Path.state.test} languageChosen={this.state.Path.state.languageChosen}/>
                            )}

                        />
                    </div>
                </Router>
            </div>

        );
    }
}

export default Parent
