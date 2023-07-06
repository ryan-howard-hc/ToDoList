import React from 'react';

function CheckItems({ toDo, toggleCompleted }) {
  const completed = toDo && toDo.completed ? toDo.completed : false;

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(toDo.id)}
      />
      {toDo.text}
    </li>
  );
}

export default CheckItems;


// import React from 'react';
// import { useEffect, useState} from 'react';

// function CheckItems({ toDo, toggleToDo }) {
//   const completed = toDo && toDo.completed ? toDo.completed : false;
//     return (
//       <li style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>
//         <input
//           type="checkbox"
//           checked={toDo.completed}
//           onChange={() => toggleToDo(toDo.id)}
//         />
//         {toDo.text}
//       </li>
      
//     );
//   }


// export default CheckItems;