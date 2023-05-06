import { useState } from 'react';
import TableRow from './TableRow';
import './main.css';
const UserTable = () => {
  const loadData = [
    {
       cmp: 'Alfreds Futterkiste',
       cty: 'Maria Anders',
       ctc: 'Germany'
    },
    {
      cmp: 'Centro comercial Moctezuma',
      cty: 'Francisco Chang',
      ctc: 'Mexico'
    },
    {
      cmp: 'Ernst Handel',
      cty: 'Roland Mendel',
      ctc: 'Austria'
    },
    {
      cmp: 'Island Trading',
      cty: 'Helen Bennett',
      ctc: 'UK'
    },
    {
      cmp: 'Laughing Bacchus Winecellars',
      cty: 'Yoshi Tannamuri',
      ctc: 'Canada'
    },
    {
      cmp: 'Magazzini Alimentari Riuniti',
      cty: 'Giovanni Rovelli',
      ctc: 'Italy'
    }
];
    const [userData , setuserData] = useState(loadData)
  return(
     <div>
          <button> newData </button>
      <table>
        <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <TableRow userData={userData} />
      </table>
      </div>
    )

    };
      export default UserTable;