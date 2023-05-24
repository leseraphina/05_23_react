import {BiTrash} from 'react-icons/bi'

export default function AddInfo({listItem,onDelete}){
  return (
    <li>
      <dl>
        <dt>{listItem.petName}</dt>
        <dd>
          <dfn>예약자명</dfn>
          {listItem.ownerName}
        </dd>
        <dd>{listItem.aptNotes}</dd>
        <dd>{listItem.aptDate}</dd>
      </dl>
      <button 
        type="text"
        onClick = {() => onDelete(listItem.id)}>
        <BiTrash />
        </button>
      </li>
  );
}