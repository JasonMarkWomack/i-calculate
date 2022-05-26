import React, { Component } from 'react';
import './App.css';
import ShowComponent from './components/ShowComponent';
import IPadComponent from "./components/IPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            show: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                show: this.state. show + button
            })
        }
    };


    calculate = () => {
        var checkShow = ''
        if(this.state.show.includes('--')){
            checkShow = this.state.show.replace('--','+')
        }

        else {
            checkShow = this.state.show
        }

        try {
            this.setState({
                
                show: (eval(checkShow) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                show: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            show: ""
        })
    };

    backspace = () => {
        this.setState({
            show: this.state.show.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calc-body">
                    <h1>I - Calculator</h1>
                    <ShowComponent show={this.state.show}/>
                    <IPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;