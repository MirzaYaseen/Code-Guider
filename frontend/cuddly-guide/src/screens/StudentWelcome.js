import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const MentorWelcome = () => {
    const navigate = useNavigate();
    return (
        <div  style={{ height:670,  alignSelf:'center', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ marginTop:150, width: 1000, height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Typography style={{ fontSize: 70, textAlign: 'center', display: 'block' ,}}>
                    Congratulations,you have been registered as a Student
                    </Typography>


                </div>
                <div style={{  width: 600, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>

                    <Typography style={{ fontSize: 18, textAlign: 'center', marginTop: 40 }}>
                    We shouldn't have to figure everything out on our own.In an age where it's easier than ever to connect,let's start trusting on other people's experience.
                    </Typography>
                </div>

                <div style={{  width: 800, height: 150, display: 'block', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 70 }}>
                   
                    <Button onClick={()=>navigate('/studentDashboard')} style={{ backgroundColor: '#FAC213', width: 300, height: 50, marginLeft: 'auto', marginRight: 'auto', display: 'flex', borderRadius:20, color:'white' }}>
                       Get Started
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default MentorWelcome;
