// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      term: "", 
      startYear: "",
      endYear: "" 
     };
  },


  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ 
      term: event.target.value,
      startYear: event.target.value,
      endYear: event.target.value
     });
   
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(
      this.state.term,
      this.state.startYear,
      this.state.endYear
      );
    //this clear the input field
    this.setState({ 
      term: "", 
      startYear: "",
      endYear: "" 
    });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Search Parameters</h3>
          </div>
          <div className="panel-body text-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="topic">Search Term</label>
                <input type ="text" maxLength = "50" className = "form-control" id="topic" required value={this.state.term} onChange={this.handleChange} />
              </div>
              <div className = "form-group">
                <label htmlFor="start-year">Start Year (optional)</label>
                <input type = "text" maxLength = "4" className = "form control" id="start-year" value={this.state.startYear} onChange={this.handleChange} />
              </div>
              <div className = "form-group">
                <label htmlFor="end-year">End Year (optional)</label>
                <input type = "text" maxLength = "4" className = "form control" id="end-year" value={this.state.endYear} onChange={this.handleChange} />
              </div>
              <br />
              <button type = "submit" id="submit" className = "btn btn-default" onClick={this.handleSubmit}>Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
