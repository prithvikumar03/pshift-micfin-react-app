import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;

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

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(productName, loanId,loanAmount,payment,interestRate,date) {
  return {productName, loanId,loanAmount,payment,interestRate,date};
}


function avg(items) {
  return items.map(({ interestRate }) => interestRate).reduce((sum, i) => sum + i, 0);
}


function subtotal(items) {
  return items.map(({ payment }) => payment).reduce((sum, i) => sum + i, 0);
}

/* const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];
 */
const getRows=(data,header)=>{
  var finalRows=[];
  data.forEach(e => {
    finalRows[0]=createRow(e.productName,e.loanId,e.loanAmount,e.payment,e.interestRate,e.date)
    finalRows[1]=createRow(e.productName,e.loanId,e.loanAmount,e.payment,e.interestRate,e.date)
    
  });
  alert('final rows'+ JSON.stringify(finalRows));
  return finalRows;
}


/* const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal; */

export default function SpanningTable(props) {
  const classes = useStyles();
  console.log('props'+JSON.stringify(props));
  let trows=getRows(props.loanRepayments);
  alert('trows'+trows);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="right">Loan Id</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Loan Amount</TableCell>
            <TableCell align="right">Interest Rate</TableCell>
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trows.map(row => (
            <TableRow key={row.desc}>
              <TableCell align="left">{row.productName}</TableCell>
              <TableCell align="right">{row.loanId}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
               <TableCell align="right">{row.loanAmount}</TableCell>
              <TableCell align="right">{row.interestRate}</TableCell>
              <TableCell align="right">{row.payment}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={3}>Effective Interest Rate</TableCell>
            <TableCell align="right">{avg(trows)}</TableCell>
          </TableRow>
        {/*   <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell colSpan={3}>Total Payment</TableCell>
            <TableCell align="right">{subtotal(trows)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}