import { useState } from 'react';
import TableRow from './TableRow';
import './main.css';
const UserTable = () => {
  const loadData = [
    {
       nam: 'Vivek',
       cty:  9022051170,
       ctc: 'Germany',
       cmp: 'Apple',
       crs: 'Fullstack'
    },
    {
      nam: 'Pallavi',
      cty:  9370043315,
      ctc: 'Mexico',
      cmp: 'Google',
      crs: 'Python'
    },
    {
      nam: 'Swati',
      cty: 6647783456,
      ctc: 'America',
      cmp: 'Tcs',
      crs: 'Java'
    },
    {
      nam: 'Vishal',
      cty: 7890123456,
      ctc: 'UK',
      cmp: 'Wipro',
      crs: 'Salesforce'
    },
    {
      nam: 'Sakshi',
      cty: 34512678923,
      ctc: 'Canada',
      cmp: 'Capagemini',
      crs: 'Data Science'
    },
    {
      nam: 'Kartik',
      cty: 7456238910,
      ctc: 'Italy',
      cmp: 'Infosys',
      crs: 'Data Analytics'
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
          <th>Company</th>
          <th>Course</th>
        </tr>
      </thead>
      <TableRow userData={userData} />
      </table>
      </div>
    )
    };
      export default UserTable;