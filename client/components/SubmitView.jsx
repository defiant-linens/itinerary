class SubmitView extends React.Component {

  // onSubmit(e) {
  //   console.log(e);
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Name: 
            <input type='text'></input>
          </label>

          <label>
            Location:  
            <input type='text'></input>
          </label>

          <label>
            Number of Days: 
            <input type='text'></input>
          </label>

          <label>
            Overview: 
            <textarea type='text'></textarea>
          </label>

          <input type='submit' value='Submit'></input>
        </form>
      </div>
    );
  }

}