import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {buttonSelected,incrimentValue} from '../actions'



 class ButtonList extends Component {
    render() {
        //console.log(this.props.select,"displayed")
        return (
            <div style={{width:"100%"}}>
                 <Grid container spacing={3}>
                <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={()=>this.props.buttonSelected("Number 1")}>
                    clicked button 1
                </Button>
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={()=>this.props.buttonSelected("Number 2")}>
                    clicked button 2
                </Button>
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={()=>this.props.buttonSelected("Number 3")}>
                    clicked button 3
                </Button>
                </Grid>

                <Grid item xs={3}>
                {this.props.select}
                </Grid>

                <Grid item xs={12}>

                <Button variant="contained" color="primary" onClick={this.props.incrimentValue} >
                   incriment
                </Button>

                </Grid>
                 <Grid item xs={3}>
                  {this.props.newValue}
                 </Grid>
                
                </Grid>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    buttonSelected,
    incrimentValue
  };

const mapToStateProps=(state)=>{                                                                                                                                                                                  

   //console.log(state.incrimentValue,"button")
    return {
        select:state.buttons,
        newValue:state.incrimentValue.value
    }
};

export default connect(mapToStateProps,mapDispatchToProps)(ButtonList);
