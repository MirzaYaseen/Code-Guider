import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import lang from "../assets/images/langSelect.jpg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "92vh",
  //   backgroundColor: 'red',
  overflow: "hidden", // Hide overflow to prevent scrollbars
};

const formContainerStyle = {
  flex: 1,
  padding: "20px",
};

const imageContainerStyle = {
  flex: 1,
  backgroundImage: `url(${lang})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: 400,
};
var url = process.env.REACT_APP_API_KEY;
function MentorRegistrationForm() {
  const navigate = useNavigate();

  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const [mentorName, setMentorName] = useState("");
  const [subject, setSubject] = useState("C++");
  const [subjectDescription, setSubjectDescription] = useState("");
  const [verificationEmail, setVerificationEmail] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mentorData = {
      mentorName,
      subject,
      subjectDescription,
      verificationEmail,
    };
    if (subjectDescription.trim() !== "") {
      const userCredentials = {
        id: userdetails?._id,
        subject: subject,
        subjectDescription: subjectDescription,
      };
      try {
        const result = await axios.patch(
          `${url}users/updateMe`,
          userCredentials
        );

        localStorage.setItem(
          "userdetails",
          JSON.stringify(result?.data?.data?.user)
        );

        navigate("/lecturerDashboard");
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Enter Subject description");
    }
  };

  return (
    <div style={centerStyle}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex">
            <Box style={formContainerStyle}>
              <Typography variant="h4" align="center" gutterBottom>
                Mentor Registration
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Mentor Name"
                      variant="outlined"
                      fullWidth
                      value={userdetails?.name}
                      onChange={(e) => setMentorName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Subject</InputLabel>
                      <Select
                        label="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required>
                        <MenuItem value="C++">C++</MenuItem>
                        <MenuItem value="Python">Python</MenuItem>
                        <MenuItem value="JavaScript">JavaScript</MenuItem>
                        <MenuItem value="Java">Java</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Subject Description"
                      variant="outlined"
                      fullWidth
                      multiline
                      minRows={3}
                      value={subjectDescription}
                      onChange={(e) => setSubjectDescription(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Verification Email"
                      variant="outlined"
                      type="email"
                      fullWidth
                      value={userdetails?.email}
                      onChange={(e) => setVerificationEmail(e.target.value)}
                      required
                    />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth>
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
            <Box style={imageContainerStyle}></Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default MentorRegistrationForm;
