import React, { Component } from "react";
import API from "../../utils/API";
import cogoToast from "cogo-toast";



class ProtegeCallBtnContainer extends Component {

    state = {
        username: "EvanTest"
    }

    componentDidMount() {
        console.log("Loaded Protege Page")
    }

    handleCallSubmit = (typeOfDial) => {
       var levelOfDial = "";
        if (typeOfDial === "CPD" || 
            typeOfDial === "CCD" || 
            typeOfDial === "CND") 
            {
            levelOfDial = "cashflow"
        } else {
            levelOfDial = "business"
        }
       
        var dialData = {
            dialer: this.state.username,
            type: typeOfDial,
            level: levelOfDial
        }

        API.logCall({
            dialer: this.state.username,
            type: typeOfDial,
            level: levelOfDial
        }).then(res => 
            cogoToast.info("Logged call!")
        ).catch(err => console.log())

        console.log(dialData)

        switch (dialData.type) {
            case "CPD":
                cogoToast.success("+1 Cashflow Prospect Dial")
                break;
            case "BPD":
                cogoToast.success("+1 Business Prospect Dial")
                break;
            case "CCD":
                cogoToast.success("+1 Cashflow Client Dial")
                break;
            case "BCD":
                cogoToast.success("+1 Businessowner Client Dial")
                break;
            case "CND":
                cogoToast.success("+1 Cashflow Natural Mkt Dial")
                break;
            case "BND":
                cogoToast.success("+1 Business Natural Mkt Dial");
                break;
            default:
                console.log("Error with cogoToast")
        }
    }

    findDials = () => {
        API.getDials()
            .then(res => 
                console.log(res.data)
                )
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                {/* <Nav /> */}
                <div className="card" style={{ height: '500px' }}>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="prospect-tab" data-toggle="tab" href="#prospect" role="tab" aria-controls="prospect" aria-selected="true">Prospect</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="client-tab" data-toggle="tab" href="#client" role="tab" aria-controls="profile" aria-selected="false">Client</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="natural-tab" data-toggle="tab" href="#natural" role="tab" aria-controls="natural" aria-selected="false">Natural</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" style={{ textAlign: "center", marginTop: '200px' }}>

                        <div className="tab-pane fade show active" id="prospect" role="tabpanel" aria-labelledby="prospect-tab">
                            <div className="row">
                                <div className="col-md-12">
                                    <button onClick={() => this.findDials()}>Get Dial Data</button>
                                </div>
                                <div className="col-md-6">
                                    <h3><u>Cash-Flow Prospect Dial:</u></h3>
                                    <button onClick={() => this.handleCallSubmit("CPD")} value="CPD" className="btn btn-primary">Cashflow Prospect</button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <h3><u>Business Prospect Dial:</u></h3>
                                    <button onClick={() => this.handleCallSubmit("BPD")} value="BPD" className="btn btn-primary">Business Prospect</button>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3><u>Cash-Flow Client Dial:</u></h3>
                                    <button onClick={() => this.handleCallSubmit("CCD")} value="CCD" className="btn btn-primary">Cashflow Client</button>

                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <h3><u>Business Client Dial:</u></h3>

                                    <button onClick={() => this.handleCallSubmit("BCD")} value="BCD" className="btn btn-primary">Business Client</button>

                                </div>
                            </div>


                        </div>

                        <div className="tab-pane fade" id="natural" role="tabpanel" aria-labelledby="natural-tab">
                        <div className="row">
                                <div className="col-md-6">
                                    <h3><u>Cash-Flow Natural Market Dial:</u></h3>
                                    <button onClick={() => this.handleCallSubmit("CND")} value="CND" className="btn btn-primary">Cashflow Natural</button>
                                </div>
                                <hr />
                                <br />
                                <div className="col-md-6">
                                    <h3><u>Business Natural Market Dial:</u></h3>
                                    <button onClick={() => this.handleCallSubmit("BND")} value="BND" className="btn btn-primary">Business Natural</button>
                                </div>
                            </div>


 

                        </div>
                    </div>





                    {/* Main Section 8/12 Left
                        --Has Tabbed Card
                        --Each Tab indicated a different button 
                        // Initially can list all buttons on a big ass dashboard
                    */}

                    {/* <ProtegeCallBtnContainer /> */}


                </div>
            </div>
        )
    }
}

export default ProtegeCallBtnContainer