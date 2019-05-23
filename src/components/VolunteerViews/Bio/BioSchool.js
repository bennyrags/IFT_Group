import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import Nav from '../../Nav/Nav'


class BioSchool extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('School searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_SCHOOL', payload: searchObject.id });
        console.log('GET_SCHOOL', this.props.reduxState.bioReducer);
    }

    render() {
        return (
            <div>
        <Nav pageName='SCHOOL' volunteer home='/home' /> 
                <center>

<div>{this.props.reduxState.schoolReducer.map(school =>
                <div>
<p className="bioDivs">SCHOOL NAME: {school.name}</p>
<p className="bioDivs">PHONE: {school.phone}</p>
<p className="bioDivs">EMAIL: {school.email}</p>
                </div>
)}
</div>



                    {/* <label>SCHOOL NAME: </label> <br/>
                    <div className="bioDivs" />
                    <label> SCHOOL CONTACT</label> <br/>
                    <div className="bioDivs" />
                    <label> PHONE </label> <br/>
                    <div className="bioDivs" />
                    <label> EMAIL </label> <br/>
                    <div className="bioDivs" /> */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioSchool);