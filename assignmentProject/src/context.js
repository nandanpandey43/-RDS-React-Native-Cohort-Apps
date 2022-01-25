import React, {useState} from 'react';

import data from './data/warehouse.json';

const AppContext = React.createContext([]);

// const appContextProvider = ({children}) => {
//   const [data, setData] = useState(data);
//   console.log('data', data);
//   return (
//     <appContext.Provider value={(data, setData)}>
//       {children}
//     </appContext.Provider>
//   );
// };

export {AppContext};
