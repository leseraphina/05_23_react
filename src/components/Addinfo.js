import {BiTrash} from 'react-icons/bi'

export default function AddInfo({listItem}){
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
      <button type="text"><BiTrash /></button>
      </li>
  );
}