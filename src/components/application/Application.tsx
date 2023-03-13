function Application() {
  return (
    <form>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>
        </div>
        <div>
        <label>Job location</label>
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
  )
}

export default Application
