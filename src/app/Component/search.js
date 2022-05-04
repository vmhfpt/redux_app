import {useDispatch, useSelector} from "react-redux";
import { changeKeyBoard } from "../ReduxCore/Actions";

function Search(){
    const dispatch = useDispatch();

   // console.log(key);
    return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse" id="mynavbar">
    
      <div className="d-flex">
        <input  onChange={(e) => dispatch(changeKeyBoard(e.target.value))}  className="form-control me-2" type="text" placeholder="Search Name" />
        <button className="btn btn-primary" type="button">Tìm kiếm</button>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Search;