import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';


class Lesson extends Component {

    state = {  
        isLoading : true,
        Lessons : []
    }
 
    async componentDidMount(){
        const response=await fetch('/api/lessons');
        const body = await response.json();
        this.setState({Lessons : body , isLoading: false});
    }

    render() { 
        const {Lessons , isLoading} = this.state;

        return ( 
            <div>
                <AppNav/>
                
                    <div class="table-container">
                    <h2>Lessons</h2>
                        <table className="table">
                        <tr className="tr">
                            <th className="th">Id</th>
                            <th className="th" >Lesson Name</th>
                        </tr>
                        {Lessons.map( lesson =>
                        <tr className="tr">
                            <td className="td">{lesson.id}</td>
                            <td className="td">{lesson.name}</td>
                        </tr>)
                        }
                    </table>
                    </div>

            </div>
         );
    }

}


export default Lesson;