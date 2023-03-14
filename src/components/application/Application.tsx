function Application() {
  return (
    <>
      <h1>Application Form</h1>
      <h2>Section 2</h2>
      <p>please fill them out</p>
      <div data-testid="custom-element">Custom HTML element</div>
        <form>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          type="text" 
          id="name" 
          placeholder="Fullname"
          value="Jiali"/>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <textarea id="gender" name="gender"/>
        </div>
        <div>
        <label htmlFor="job-location">Name</label>
        <select id="job-location">
            <option value="US">United States</option>
        </select> 
        </div>
        <div>
            <label>
                <input type="checkbox" id="terms"/> 
                I agree to the terms and conditions
            </label>
        </div>
        <button>Submit</button>
    </form>

    </>
  )
}

export default Application
