// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      searchTerm: "", 
      startYear: "",
      endYear: "" 
     };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ searchTerm: event.target.value });
    this.setState({ startYear: event.target.value });
    this.setState({ endYear: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    var title = this.state.searchTerm.trim();
    var start = this.state.startYear;
    var end = this.state.endYear;
    // this.setState({ searchTerm: "" });
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
                <label htmlFor="topic">title</label>
                <input type ="text" maxLength = "50" className = "form-control" id="topic" required value={this.state.searchTerm} onChange={this.handleChange} />
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
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
