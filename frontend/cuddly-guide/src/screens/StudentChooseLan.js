import React, { useState } from "react";
import { Box, Card, Typography, Button, Icon, IconButton } from "@mui/material";
import Image1 from "../assets/images/6.png";
import Python from '../assets/images/python.png'
import JavaScript from '../assets/images/Js.png'
import Java from '../assets/images/java.png'
import Cpp from '../assets/images/cpppp.png'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Screen() {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language)
      );
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const isLanguageSelected = (language) => selectedLanguages.includes(language);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // height: "90vh",
        marginTop: 10,
        fontFamily: "Roboto",
        // backgroundColor: "#E6F7FF",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Select language to Continue
      </Typography>

      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginRight:30
          }}
        >
          <Card
            sx={{
              width: 250,
              height: 320,
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${JavaScript})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>

          <Button
            variant={
              isLanguageSelected("JavaScript") ? "contained" : "outlined"
            }
            color="primary"
            sx={{ marginRight: 2, marginTop: 5 }}
            onClick={() => handleLanguageClick("JavaScript")}
          >
            JavaScript
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginRight:30
          }}
        >
          <Card
            sx={{
              width: 250,
              height: 320,
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Python})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>

          <Button
            variant={isLanguageSelected("Python") ? "contained" : "outlined"}
            color="primary"
            sx={{ marginRight: 2, marginTop: 5 }}
            onClick={() => handleLanguageClick("Python")}
          >
            Python
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginRight:30
          }}
        >
          <Card
            sx={{
              width: 250,
              height: 320,
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Java})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>

          <Button
            variant={isLanguageSelected("Java") ? "contained" : "outlined"}
            color="primary"
            sx={{ marginRight: 2, marginTop: 5 }}
            onClick={() => handleLanguageClick("Java")}
          >
            Java
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Card
            sx={{
              width: 250,
              height: 320,
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Cpp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>

          <Button
            variant={isLanguageSelected("C++") ? "contained" : "outlined"}
            color="primary"
            sx={{ marginRight: 2, marginTop: 5 }}
            onClick={() => handleLanguageClick("C++")}
          >
            C++
          </Button>
        </div>
      </Box>

      <Button
        onClick={() => {
          console.log(selectedLanguages);
          localStorage.setItem(
            "SelectedCatByStudent",
            JSON.stringify(selectedLanguages)
          );
          navigate("/studentWelcome");
        }}
        style={{ marginTop: 70, backgroundColor: "#FAC213", width: 200 }}
      >
        <Typography style={{ color: "black" }}>Click to Continue</Typography>
      </Button>
    </Box>
  );
}

export default Screen;
