import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories'; // action to dispatch;

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const notice = { text: 'Under construction' };
    dispatch(checkStatus(notice));
  };
  const statusList = useSelector((state) => state.category);

  return (
    <div className="">
      <button
        type="button"
        className="check-status"
        onClick={handleClick}
      >
        check status
      </button>
      {statusList.map((status) => (
        <p key={status.id}>{status.text}</p>
      ))}
    </div>
  );
};

export default Categories;
