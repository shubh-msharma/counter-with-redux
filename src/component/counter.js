import React, { Component } from 'react'
import './counter.css'
import { connect } from 'react-redux'
class counter extends Component {

    render() {
        return (
            <div className = "main">
                <div className="display">{this.props.counterValue}</div>
                <div className="pannel">
                    <div className="counterControl">
                        <div className="button" onClick={this.props.onIncreamentEventHandler}>increament</div>
                        <div className="button" onClick={this.props.onDecreamentEventHandler}>decreament</div>
                        <div className="button" onClick={this.props.onAddCounterEventHandler}>add counter:10</div>
                        <div className="button" onClick={this.props.onSubtractCounterEventHandler}>subtract counter:10</div>
                    </div>
                    <div className="">
                        <div className="button" onClick={()=>this.props.onSaveEventHandler(this.props.counterValue)}>save value</div>
                    </div>
                </div>
                <hr/>
                <h2>saved results</h2>
                <p>click on results to delete</p>
                <ul>
                    {
                        this.props.results.map(result => {
                            return <li onClick = {()=>this.props.onDeleteEventHandler(result.id)} key = {result.id}>{result.value}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counterValue: state.ctrReducer.counter,
        results: state.resReducer.results
    }
}

const mapPropsToAction = (dispatch) => {
    return {
        onIncreamentEventHandler: () => dispatch({ type: "INCREAMENT" }),
        onDecreamentEventHandler: () => dispatch({ type: "DEACREAMENT" }),
        onAddCounterEventHandler: () => dispatch({ type: "ADD", value: 10 }),
        onSubtractCounterEventHandler: () => dispatch({ type: "SUBTRACT", value: 10 }),
        onSaveEventHandler: (counterValue) => dispatch({ type: "SAVE" ,counterValue:counterValue}),
        onDeleteEventHandler:(id)=>dispatch({type:"DEL_RES",id:id})
    }
}

export default connect(mapStateToProps, mapPropsToAction)(counter)