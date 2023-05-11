const TableRow = (props) => {


   const allTableRow = props.userData.map((elem) => {
         return (
           <tr>
               <td> {elem.nam} </td>
               <td> {elem.cty} </td>
               <td> {elem.ctc} </td>
               <td> {elem.cmp} </td>
               <td> {elem.crs} </td>
           </tr>
        );
   });
 return <tbody>{allTableRow}</tbody>;
};
export default TableRow;