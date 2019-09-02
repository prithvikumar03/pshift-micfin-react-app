import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));


function createRow(productName, loanId,loanAmount,payment,interestRate,date) {
  return {productName, loanId,loanAmount,payment,interestRate,date};
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
    finalRows[0]=createRow(e.productName,e.loanId,e.loanAmount,e.payment,e.interestRate,e.date)
    finalRows[1]=createRow(e.productName,e.loanId,e.loanAmount,e.payment,e.interestRate,e.date)
    
  });
  return finalRows;
}

export default function SpanningTable(props) {
  const classes = useStyles();
  console.log('props'+JSON.stringify(props));
  let trows=getRows(props.loanRepayments);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="right">Loan Id</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Interest Rate (%)</TableCell>
            <TableCell align="right">Loan Amount ($)</TableCell>
            <TableCell align="right">Payment ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trows.map(row => (
            <TableRow key={row.desc}>
              <TableCell align="left">{row.productName}</TableCell>
              <TableCell align="right">{row.loanId}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
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