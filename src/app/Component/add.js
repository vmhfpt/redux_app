import { useDispatch , useSelector} from "react-redux";
import { getShow } from '../ReduxCore/Selecters';
import { handleShow} from '../ReduxCore/Actions';
import { addStudent }from '../ReduxCore/Actions';
import { useState } from 'react';
function Add(){
    const getStateShow = useSelector(getShow);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [poin, setPoin] = useState('');
    const [age, setAge] = useState('');
    const handleAddStudent = () => {
        dispatch( addStudent({
            name : name,
            code : code,
            poin : poin,
            age : age
        }));
       dispatch(handleShow(!getStateShow));
    }
    return (<div className="container mt-3">
      
  <div className="mb-3 mt-3">
    <label  className="form-label">Họ và tên :</label>
    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control"  placeholder="Nhập tên"  />
  </div>
  <div className="mb-3 mt-3">
    <label  className="form-label">Mã sinh viên :</label>
    <input onChange={(e) => setCode(e.target.value)} type="text" className="form-control"  placeholder="Nhập mã"  />
  </div>
  <div className="mb-3 mt-3">
    <label  className="form-label">Tuổi :</label>
    <input  onChange={(e) => setAge(e.target.value)} type="number" className="form-control"  placeholder="Nhập tuổi"  />
  </div>
  <div className="mb-3 mt-3">
    <label  className="form-label">Điểm trung bình :</label>
    <input onChange={(e) => setPoin(e.target.value)} type="number" className="form-control"  placeholder="Nhập điểm"  />
  </div>
 
  <button onClick={handleAddStudent} className="btn btn-primary">Thêm mới</button>
  <button  onClick={() => dispatch(handleShow(!getStateShow))} className="btn btn-warning">Đóng lại</button>




    </div>)
}
export default Add;