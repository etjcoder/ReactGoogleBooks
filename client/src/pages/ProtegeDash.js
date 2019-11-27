import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/Nav";
// import Header from "../components/Header";
import ProtegeCallBtnContainer from "../components/ProtegeCallBtnContainer"
// import ProtegeC1 from "../components/ProtegeC1"
// import ProtegeC2 from "../components/ProtegeC2"
// import ProtegeC3 from "../components/ProtegeC3"
// import ProtegeC4 from "../components/ProtegeC4"
// import ProtegeC5 from "../components/ProtegeC5"
// import ProtegeC6 from "../components/ProtegeC6"
// import ProtegeC7 from "../components/ProtegeC7"
// import DailyResultsProtege from "../components/DailyResultsProtege"
// import RemindersProtege from "../components/RemindersProtege"
// import ToDoInput from "../components/ToDoInput"
// import DataBasicProtege from "../components/DataBasicProtege"
// import DataAdvancedProtege from "../components/DataAdvancedProtege"



class ProtegeDash extends Component {

    state = {
        user: ""
    }

    componentDidMount() {
        console.log("Loaded Protege Page")
    }

    render() {
        return (
            <div>
                <div className="jumbotron" style={{ height: '500px' }}>
                    {/* ProtegeHeader */}
                    <h1>You're on the Protege Dashboard!</h1>
    
                    {/* Main Section 8/12 Left
                        --Has Tabbed Card
                        --Each Tab indicated a different button 
                        // Initially can list all buttons on a big ass dashboard
                    */}
                    <ProtegeCallBtnContainer />
                    

                    {/* Daily Results 4/12 Right
                        /// Top - Half ///
                        Dials: 
                        Contacts:
                        Appointments:
                        /// Bottom - Half ///
                        Todos:
                        Notes:
                    */}
                    {/* Mid Section narrow height 12/12
                        Reminder / Todo Input 
                    */}
                    {/* Lower Section 12/12
                        Data Dashboard Below
                            Basic Data Showing first:
                                Contacts / Dials
                                Appointments / Contacts
                                Appointments / Dials 
                                Chart of Call Types
                                Chart of Contact Types
                                Web of Appointment Types
                    
                    */}
                </div>
            </div>
        )
    }
}

export default ProtegeDash