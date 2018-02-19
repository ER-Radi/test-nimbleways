import React, { Component } from 'react';
import Moment from 'moment';


import Result from './components/Result';
import Form from './components/Form';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            begin: null,
            end: null,
            result: null,
            resclass: null
        };
        this.onDate1Change = this.onDate1Change.bind(this);
        this.onDate2Change = this.onDate2Change.bind(this);
        this.calculDifference = this.calculDifference.bind(this);
    }

    onDate1Change(date){
        this.setState({begin: date});
    }

    onDate2Change(date){
        this.setState({end: date});
    }
    
    calculDifference(event){
        event.preventDefault();
        let {begin, end} = this.state;
        if ( Moment(begin).isValid() && Moment(end).isValid() ) {
            let difference = end.diff(begin, 'days');
            this.setState({
                result: difference + " Days", 
                resclass: "alert-success"
            });
        }
        else {
            this.setState({
                result: "ERROR: Date Format", 
                resclass: "alert-danger"
            });
        }
    }

    
    render(){
        let { begin, end, result, resclass } = this.state;
        return (
            <div className="container-fluid">
                <div className="jumbotron">
                    <Form 
                        begin={begin}
                        end={end}
                        calculDifference={this.calculDifference}
                        onDate1Change={this.onDate1Change}
                        onDate2Change={this.onDate2Change} />

                    <Result 
                        result={result} 
                        resclass={resclass} />
                </div>
            </div>
        )
    }
}

export default App;