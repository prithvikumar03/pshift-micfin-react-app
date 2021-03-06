import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  
}));


function createRow(loanId,date,paymentDelayedInMonths,interestRate,loanAmount,payment) {
  return {loanId,date,paymentDelayedInMonths,interestRate,loanAmount,payment};
}

function remaining(items) {
  return items.map(({ interestRate }) => interestRate).reduce((sum, i) => sum + i, 0);
}

function avg(items) {
  let total = items.map(({ interestRate }) => interestRate).reduce((sum, i) => (sum + i), 0);
   return (total/items.length);
}


function subtotal(items) {
  return items.map(({ payment }) => payment).reduce((sum, i) => sum + i, 0);
}


const getRows=(data,header)=>{
  var finalRows=[];
  data.forEach(e => {
    finalRows.push(createRow(e.loanId,e.date,e.paymentDelayedInMonths,e.interestRate,e.loanAmount,e.payment))
     });
  return finalRows;
}

export default function PaymentHistory(props) {
  const classes = useStyles();
  //console.log('props'+JSON.stringify(props));
  let tpropsData=[];
  if(props.data){
    tpropsData=props.data;
   
  }else{
    tpropsData.push({loanId:"0",date:"",paymentDelayedInMonths:0,interestRate:0,loanAmount:0,payment:0,});
    //tpropsData.push({loanId:"2",loanAmount:20,payment:20,date:"",interestRate:20,paymentDelayedInMonths:0});
  }
  let trows=getRows(tpropsData);
  return (
    <Paper className={classes.root}>
       <Typography variant="body" noWrap >
           Payment History
        </Typography>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
         
            <TableCell align="right">Loan Id</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Payment Delay</TableCell>
            <TableCell align="right">InterestRate</TableCell>
            <TableCell align="right">Loan Amount</TableCell>
            <TableCell align="right">Payment</TableCell>
         
         
          </TableRow>
        </TableHead>

        
        <TableBody>
          {trows.map(row => (
            <TableRow key={row.desc}>
             
              <TableCell align="right">{row.loanId}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.paymentDelayedInMonths}</TableCell>
              <TableCell align="right">{row.interestRate}</TableCell>
              <TableCell align="right">{row.loanAmount}</TableCell>
              <TableCell align="right">{row.payment}</TableCell>
                           
            </TableRow>
          ))}
 
          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={4}><b>Total Repayment</b></TableCell>
            <TableCell align="right"><b>{`$${subtotal(trows)} `}</b></TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell colSpan={2}><b>Remaining Amount</b></TableCell>
            <TableCell align="right">{`${avg(trows)} %`}</TableCell>
            <TableCell align="right"><b>{`$${remaining(trows)} `}</b></TableCell>
          </TableRow> 
        </TableBody>
      </Table>
    </Paper>
  );
}