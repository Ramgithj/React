import React from 'react'; 
import BoilingVerdict from './BoilingVerdict';

 class Calculator extends React.Component{
     constructor(props){
         super(props);
         this.state = {temperature:''};
         this.handleChange = this.handleChange.bind(this);
     };

     handleChange(e){
        this.setState({temperature: e.target.value});
    }
    render(){
        const temperature = this.state.temperature; 
        return(
            <fieldset>
                <legend>Enter temperature in celsius</legend>
                <input value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}
export default Calculator;