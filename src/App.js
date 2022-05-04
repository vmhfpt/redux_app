import Add from "./app/Component/add";
import List from "./app/Component/list";
import Search from "./app/Component/search";
import Filter from "./app/Component/filter";
import { handleShow  } from './app/ReduxCore/Actions';
import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getShow } from './app/ReduxCore/Selecters';
function App() {
   const getStateShow = useSelector(getShow);
   const dispatch = useDispatch();
  // console.log(getStateShow);
  
   return (<div  className="container-fluid" >
      <div className="alert alert-success">
  <strong>Quản lí sinh viên !</strong> Sử dụng React Redux core và Bootrap 5.
</div>
      <Search />
      <Filter />
      {getStateShow=== false ?  <button onClick={() => dispatch(handleShow(!getStateShow))} className="btn btn-info">Thêm sinh viên mới</button> : ''}
      {getStateShow === true ? <Add /> : ''}
      <List />
    
     
   </div>)
}
export default App;