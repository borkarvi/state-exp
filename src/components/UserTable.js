import { useState } from 'react';
import TableRow from './TableRow';
import './main.css';
const UserTable = () => {
  const loadData = [
    {
       nam: 'Vivek',
       cty:  9022051170,
       ctc: 'Germany'
    },
    {
      nam: 'Pallavi',
      cty:  9370043315,
      ctc: 'Mexico'
    },
    {
      nam: 'SWati',
      cty: 6647783456,
      ctc: 'Austria'
    },
    {
      nam: 'Vishal',
      cty: 7890123456,
      ctc: 'UK'
    },
    {
      nam: 'Sakshi',
      cty: 34512678923,
      ctc: 'Canada'
    },
    {
      nam: 'Kartik',
      cty: 7456238910,
      ctc: 'Italy'
    }
];
    const [userData , setuserData] = useState(loadData)
  return(
     <div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
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