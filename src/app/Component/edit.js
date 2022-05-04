import { useState } from "react";
import {  useDispatch } from "react-redux";
import { updateStudent } from "../ReduxCore/Actions";
function Edit ({keySt, poinSt, nameSt, codeSt, ageSt, functionChange }){
    
    const dispatch = useDispatch();
    const [name, setName] = useState( nameSt);
    const [code, setCode] = useState(codeSt);
    const [poin, setPoin] = useState( poinSt);
    const [age, setAge] = useState(ageSt);
    const handleSave = () => {
        dispatch(updateStudent({
          name : name,
          code : code,
          poin : poin,
          age : age
        }, keySt));
        functionChange('');
    
   
  }
    return (<div>
 <div className="mb-3 mt-3">
    <label  className="form-label">Họ và tên :</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control"  placeholder="Nhập tên"  />
  </div>
  <div className="mb-3 mt-3">
    <label  className="form-label">Mã sinh viên :</label>
    <input  value={code} onChange={(e) => setCode(e.target.value)} type="text" className="form-control"  placeholder="Nhập mã"  />
  </div>
  <div className="mb-3 mt-3">
    <label  className="form-label">Tuổi :</label>
    <input  value={age} onChange={(e) => setAge(e.target.value)} type="number" className="form-control"  placeholder="Nhập tuổi"  />
  </div>
  <div className="mb-3 mt-3">
    <label  className="form-label">Điểm trung bình :</label>
    <input value={poin} onChange={(e) => setPoin(e.target.value)} type="number" className="form-control"  placeholder="Nhập điểm"  />
  </div>

  <button onClick={handleSave} className="btn btn-warning">Lưu lại</button>


    </div>);
}
export default Edit;