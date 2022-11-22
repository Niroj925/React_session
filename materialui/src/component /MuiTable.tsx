import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'

function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
           <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First_Name</TableCell>
            <TableCell>Last_Name</TableCell>
            <TableCell align='center'>Email</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
           {
            tableData.map((row)=>(
                <TableRow
                key={row.id}
                sx={{'&:last_child td,&:last_child th':{border:0}}}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell align='center'>{row.email}</TableCell>
                </TableRow>
            ))
           }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData=

[{
    "id": 1,
    "first_name": "Gery",
    "last_name": "Wainscot",
    "email": "gwainscot0@gov.uk",
    "gender": "Male",
    "ip_address": "162.109.167.140"
  }, {
    "id": 2,
    "first_name": "Quinn",
    "last_name": "Danser",
    "email": "qdanser1@twitpic.com",
    "gender": "Male",
    "ip_address": "145.196.139.119"
  }, {
    "id": 3,
    "first_name": "Marissa",
    "last_name": "Montel",
    "email": "mmontel2@de.vu",
    "gender": "Female",
    "ip_address": "113.166.93.108"
  }, {
    "id": 4,
    "first_name": "Amerigo",
    "last_name": "Haddacks",
    "email": "ahaddacks3@cbc.ca",
    "gender": "Male",
    "ip_address": "240.21.63.109"
  }, {
    "id": 5,
    "first_name": "Faun",
    "last_name": "Jillions",
    "email": "fjillions4@myspace.com",
    "gender": "Female",
    "ip_address": "162.196.216.140"
  }, {
    "id": 6,
    "first_name": "Minne",
    "last_name": "Bilsborrow",
    "email": "mbilsborrow5@com.com",
    "gender": "Female",
    "ip_address": "6.205.16.21"
  }, {
    "id": 7,
    "first_name": "Arnuad",
    "last_name": "Sket",
    "email": "asket6@networksolutions.com",
    "gender": "Male",
    "ip_address": "213.126.98.67"
  }, {
    "id": 8,
    "first_name": "Tally",
    "last_name": "Tayloe",
    "email": "ttayloe7@adobe.com",
    "gender": "Female",
    "ip_address": "195.75.150.17"
  }, {
    "id": 9,
    "first_name": "Boothe",
    "last_name": "Hanby",
    "email": "bhanby8@theglobeandmail.com",
    "gender": "Male",
    "ip_address": "183.138.31.237"
  }, {
    "id": 10,
    "first_name": "Wolf",
    "last_name": "Whorall",
    "email": "wwhorall9@canalblog.com",
    "gender": "Male",
    "ip_address": "87.209.101.249"
  }]
export default MuiTable
