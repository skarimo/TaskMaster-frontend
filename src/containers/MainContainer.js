import React from 'react'
import { Link} from 'react-router-dom';

const MainContainer = () => {
    return (
    <form>
      <label>Employer</label>
      <Link to="/employer"><input type="radio" value="employer" /></Link>
      <label>Worker</label>
      <Link to="/worker"><input type="radio" value="worker" /></Link>

    </form>
  )
}

export default MainContainer
