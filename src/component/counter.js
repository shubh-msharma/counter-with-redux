import React, { Component } from 'react'
import './counter.css'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/index'

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
        onIncreamentEventHandler: () => dispatch(actionCreators.Increament()),
        onDecreamentEventHandler: () => dispatch(actionCreators.Decreament()),
        onAddCounterEventHandler: () => dispatch(actionCreators.Add(10)),
        onSubtractCounterEventHandler: () => dispatch(actionCreators.Subtract(10)),
        onSaveEventHandler: (counterValue) => dispatch(actionCreators.Save(counterValue)),
        onDeleteEventHandler:(id)=>dispatch(actionCreators.Delete(id))
    }
}

export default connect(mapStateToProps, mapPropsToAction)(counter)