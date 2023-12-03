import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ComputerIcon from '@mui/icons-material/Computer';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';

const BrowserTable = ({data}) => {


    return (
        <TableContainer component={Paper}>
            <Table stickyHeader sx={{  width: { sm: 400, md: 700, lg: 900} }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell> Type </TableCell>
                <TableCell align="center"> Action </TableCell>
                <TableCell align="center">Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {item.type === 'button' ? (
                        <SmartButtonIcon />
                    ) : item.type === 'computer' ? (
                        <ComputerIcon />
                    ) : 
                        item.type === 'toggle' ? (
                            <ToggleOnIcon />
                    ) : item.type === 'message' ? (
                        <EmailIcon />
                    ) : item.type === 'view' ? (
                        <VisibilityIcon />
                    ) : (
                        <SmartButtonIcon />
                    )
                    
                    }
                    </TableCell>
                    <TableCell >{item.action}</TableCell>
                    <TableCell align="right">
                        {new Date(item.timestamp).toLocaleString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            })}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}
 
export default BrowserTable;