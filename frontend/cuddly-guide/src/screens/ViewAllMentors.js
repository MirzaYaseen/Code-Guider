import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import axios from "axios";
import pdf from "../assets/images/pdf.png";

var url = process.env.REACT_APP_API_KEY;
const ViewAllMentors = () => {
  const Lectures = JSON.parse(localStorage.getItem("Lectures"));
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const navigate = useNavigate();

  const CreateConversation = async (receiver) => {
    const usersIds = {
      senderId: userdetails?._id,
      receiverId: receiver,
    };
    try {
      const result = await axios.post(`${url}conversation`, usersIds);

      console.log(result);
      navigate("/Messenger");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDownloadPDF = async (pdfData, pdfFileName) => {
    const pdfName = {
      pdfFileName: pdfFileName,
    };

    try {
      const response = await axios.post(
        `${url}lecture/downloadLeacture`,
        pdfName,
        { responseType: "blob" }
      );
      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: "application/pdf" });

      // Create a download link and trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = pdfFileName; // Set the filename for the download
      document.body.appendChild(a);
      a.click();

      // Clean up the URL object
      window.URL.revokeObjectURL(url);

      // window.location.href = url;
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <Typography
        style={{
          marginTop: 40,
          marginLeft: 70,
          fontSize: 30,
          color: "#212A3E",
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        Mentors Of All Subjects
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: 40 }}>
        {Lectures ? (
          Lectures.map((data) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  style={{
                    width: 350,
                    height: 250,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}>
                  <CardContent>
                    <Typography variant="h6">{data?.MentorName}</Typography>
                    <Typography variant="body2">{data?.lectureName}</Typography>
                    <Typography variant="body2">
                      {data?.lectureDescription}
                    </Typography>

                    <img
                      onClick={() =>
                        handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
                      }
                      src={pdf}
                      alt="PDF"
                      style={{
                        width: 80,
                        height: 80,
                        cursor: "pointer",
                        marginTop: 25,
                      }}
                    />
                    <Button
                      onClick={() => {
                        CreateConversation(data?.refOfUser);
                      }}
                      style={{
                        display: "flex",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 15,
                      }}>
                      Message
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <p>No Lecture available</p>
        )}
      </Grid>
    </div>
  );
};

export default ViewAllMentors;
