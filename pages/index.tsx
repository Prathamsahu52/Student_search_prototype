import Head from 'next/head'
import React from "react";
import ReactDOM from 'react-dom';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Autocomplete, Button, Divider, Stack, TextField } from '@mui/material'
import yearData from '../public/yeardata'
import hallData from '../public/halldata';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student Search Prototype| IITK</title>
        <meta name="description" content="Student Search for IITK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="http://localhost:3000/">Student Search</a>
        </h1> */}

        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            
        >
            
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Autocomplete
                  multiple
                  id="combo-box-demo"
                  options={yearData}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} 
                  
                  label={
                  <Box component="li"  >

                    <CalendarMonthIcon />
                    Year
                </Box>} />}
                
                />
                <Autocomplete
                  multiple
                  id="combo-box-demo"
                  options={hallData}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Hall" />}
                />



              </Stack>
              
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                divider={<Divider orientation="vertical" flexItem />}
                
              >
                <Autocomplete
                  multiple
                  id="combo-box-demo"
                  options={yearData}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Programme" />}
                />
                <Autocomplete
                  multiple
                  id="combo-box-demo"
                  options={hallData}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Department" />}
                />
                


              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Autocomplete
                  multiple
                  id="combo-box-demo"
                  options={yearData}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="BloodGroup" />}
                />
                <Autocomplete
                  multiple
                  id="combo-box-demo"
                  options={hallData}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Gender" />}
                />
                
                <Autocomplete
                  multiple
                  id="combo-box-demo"
                  options={hallData}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Hometown" />}
                />
                

              </Stack>

              <TextField id="outlined-basic" label="Search" variant="outlined"/>




        </Stack>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by PClubIITK
          
        </a>
      </footer>
    </div>
  )
}
