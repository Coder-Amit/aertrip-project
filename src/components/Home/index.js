import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home = (props) => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    //controlled inputs

    const [from, setFrom] = useState("Mumbai")
    const [to, setTo] = useState("Pune")
    const [date, setDate] = useState()
    const navigate = useNavigate()

    const handleSearch = () => {
        console.log(from + to + date);
        navigate('/result')
    }

    //    handling top filters
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box

            sx={{
                width: `${props.w}%`,
                height: '10rem',
                mb: "20px",
                backgroundColor: '#fff',
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                position: 'sticky',
                top: 0,
                '&:hover': {
                    borderBottom: "2px solid #0066cc"
                },
            }}
        >
            <Box
                height="2.5rem"
                display='flex'
                justifyContent="space-between"
                alignItems="center"
                p="5px 1rem"
            >
                {/* ======= Top Filters  ====== */}
                <Box
                    display="flex"
                    width="50%"
                    gap="1rem"
                    alignItems="center"
                >
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Oneway">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Typography>Oneway</Typography>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Data</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="No of Passenger">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Typography>1Passenger</Typography>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Data</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Flight Type">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Typography>Economy</Typography>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Data</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Recent Searches">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Typography>Recent Searches</Typography>
                            <ExpandMoreIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >

                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">Data</Typography>
                        </MenuItem>

                    </Menu>
                </Box>
            </Box>

            {/* ====== Search Input Fields ======= */}

            <Box
                height="5rem"
                p="10px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap='8px'
            >
                <Box
                    width="90%"
                    height="5rem"
                    p="5px"
                    display="flex"
                    alignItems="center"
                    gap='5px'

                >
                    <Autocomplete

                        id="combo-box-demo"
                        options={destinations}
                        sx={{ width: "33%" }}
                        value={from}
                        onChange={(e, v) => setFrom(v.id)}
                        renderInput={(params) => <TextField variant="standard" {...params} label="From" />}
                    />
                    <Autocomplete

                        id="combo-box-demo"
                        options={destinations}
                        sx={{ width: "33%" }}
                        onChange={(e, v) => setTo(v.id)}
                        value={to}
                        renderInput={(params) => <TextField variant="standard" {...params} label="To" />}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Depart"
                            slotProps={{ textField: { variant: 'standard', } }}
                            sx={{
                                width: "33%"
                            }}
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            format="DD-MM-YYYY"
                            defaultValue={dayjs(new Date())}
                        />
                    </LocalizationProvider>
                </Box>

                <Box
                    width="10%"
                    display="flex"
                    justifyContent="center"

                >
                    <Button sx={{ p: '.8rem', }} variant="contained" onClick={handleSearch}>Search</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home

const destinations = [
    { label: 'Mumbai', id: "BOM" },
    { label: 'Pune', year: "PNQ" },
    { label: 'Nasik', year: "ISK" },
    { label: 'Surat', year: "STV" },
    { label: 'DIU', year: "DIU" },
]