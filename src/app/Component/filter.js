import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRank } from "../ReduxCore/Selecters";
import { changeSort } from "../ReduxCore/Actions";
import { changeRank } from "../ReduxCore/Actions";
function Filter() {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(false);

  const handleSort = (value) => {
    setSort(value);
    dispatch(changeSort(value));
  };
  const rank = useSelector(getRank);

  return (
    <div>
      <div className="form-check">
        <input
          checked={rank.includes(9) ? true : false}
          onChange={() => dispatch(changeRank(9))}
          className="form-check-input"
          type="checkbox"
        />
        <label className="form-check-label">Giỏi</label>
      </div>
      <div className="form-check">
        <input
          checked={rank.includes(7) ? true : false}
          onChange={() => dispatch(changeRank(7))}
          className="form-check-input"
          type="checkbox"
        />
        <label className="form-check-label">Khá</label>
      </div>
      <div className="form-check">
        <input
          checked={rank.includes(5) ? true : false}
          onChange={() => dispatch(changeRank(5))}
          className="form-check-input"
          type="checkbox"
        />
        <label className="form-check-label">Trung bình</label>
      </div>
      <div className="form-check">
        <input
          checked={rank.includes(1) ? true : false}
          onChange={() => dispatch(changeRank(1))}
          className="form-check-input"
          type="checkbox"
        />
        <label className="form-check-label">Yếu</label>
      </div>

      <div className="btn-group">
        <button
          onClick={() => handleSort("desc")}
          className={sort === "desc" ? "btn btn-danger" : "btn btn-primary"}
        >
          Giảm dần theo điểm
        </button>
        <button
          onClick={() => handleSort("asc")}
          className={sort === "asc" ? "btn btn-danger" : "btn btn-primary"}
        >
          Tăng dần theo điểm
        </button>
      </div>
    </div>
  );
}
export default Filter;
