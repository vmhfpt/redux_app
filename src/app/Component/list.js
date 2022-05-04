import { useSelector, useDispatch } from "react-redux";
import { filterSearch } from "../ReduxCore/Selecters";
import { deleteStudent } from "../ReduxCore/Actions";
import { useState } from "react";
import Edit from "./edit";
function List() {
  const dataItem = useSelector(filterSearch);
  const dispatch = useDispatch();
  const style = {
    background: "pink",
    border: "1px solid red",
  };

  const [edit, setEdit] = useState("");
  const handleChange = (value) => {
    setEdit(() => {
      if (edit === "") {
        return value;
      } else {
        return "";
      }
    });
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Mã sinh viên</th>
            <th>Tuổi</th>
            <th> Điểm TB</th>
            <th> </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataItem.map((value, key) => (
            <tr key={key}>
              <td>{key+1}</td>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.code}</td>
              <td>{value.age}</td>
              <td>{value.poin}</td>
              <td>
                <button onClick={() => handleChange(key)} className="btn btn-primary">
                {key === edit && edit !== "" ? "Đóng lại" : "Sửa"}
                </button>
              </td>
              <td>
                <button  onClick={() => dispatch(deleteStudent(value.id))} class="btn btn-danger">
                  Xóa
                </button>{" "}
              </td>
              {key === edit ? (
              <Edit
                keySt={value.id}
                poinSt={value.poin}
                nameSt={value.name}
                codeSt={value.code}
                ageSt={value.age}
                functionChange={() => handleChange(value)}
              />
            ) : (
              ""
            )}
            </tr>
          ))}
        </tbody>
      </table>

    
    </div>
  );
}
export default List;
