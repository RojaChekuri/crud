import React,{Component} from 'react';
import './App.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent : false,
            shown: true,
            button: "Mark as No Longer Required"
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.update = this.update.bind(this);
        this.handleupdate = this.handleupdate.bind(this);
    }

    handleupdate()  {
        /*var index = -1;
        var clength = this.state.details.length;
        for( var i = 0; i < clength; i++ ) {
            if( this.state.details[i].Id === rowId.Id ) {
                index = i;
                break;
            }
        }*/
        this.setState({
            shown: false,
            button: "Marked as No Longer Required"
        });
    };

    onButtonClick() {
        this.setState({
            showComponent : true,
        });
    }

    update(detail) {
        this.props.update(detail);
    }
        render() {
            var shown = {
                display: this.state.shown ? "block" : "none"
            };

            var hidden = {
                display: this.state.shown ? "none" : "block"
            }
        const details = this.props.details ;
        return (

            <div id = "Table">
                <table>

                    <thead>
                    <tr>


                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Doj</th>


                    </tr>

                    </thead>
                    <tbody>
                    {
                        details.map((detail,id) => {
                            return (
                                <tr key={detail.Id}>

                                <td>{detail.FirstName}</td>
                                <td>{detail.LastName}</td>
                                <td>{detail.Age}</td>
                                <td>{detail.Gender}</td>
                                <td>{detail.Doj}</td>
                                    <th><button style={shown}>Update</button>

                                        </th>
                                    <th><button  onClick={this.handleupdate}>{this.state.button}</button></th>

                                    <th><button style={shown} onClick={this.props.handleremove}>Delete</button></th>

                            </tr>);


                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}



export default Table;
