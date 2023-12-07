import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
  useParams,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import pdf from "../assets/images/pdf.png";
import women from "../assets/images/women.jpeg";
import axios from "axios";




var url = process.env.REACT_APP_API_KEY;
const StudentDashboard = () => {
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const SelectedCatByStudent = JSON.parse(
    localStorage.getItem("SelectedCatByStudent")
  );
  const navigate = useNavigate();
  const [MentorLecture, setMentorLecture] = useState([]);
  const [showLectures, setshowLectures] = useState(false);

  useEffect(() => {
    const getSelectedCatLecture = async () => {
      const cat = {
        category: SelectedCatByStudent,
      };

      try {
        const result = await axios.post(
          `${url}lecture/getLecturesByCategory`,
          cat
        );
        const originalArray = result?.data?.data;

        localStorage.setItem("Lectures", JSON.stringify(result?.data?.data));
        if (result?.data?.data.length > 3) {
          setMentorLecture(originalArray.slice(0, 3));
        } else {
          setMentorLecture(result?.data?.data);
        }
        setshowLectures(true);
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    };
    getSelectedCatLecture();
  }, []);

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

  const typographyStyles = {
    marginTop: 70,
    marginLeft: 70,
    fontSize: 30,

    color: "#212A3E",
    fontWeight: "700",
  };

  const iconStyles = {
    fontSize: 24,
    color: "black",
    marginLeft: 10,
  };

  const handleOpenChat = () => {
    navigate("/Messenger");
  };

  const dividerStyle = {
    width: 1,
    backgroundColor: "skyblue",
    height: "100%",
    // marginRight: 10,
  };
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <Typography style={typographyStyles}>Code Guider</Typography>
      </div>
      <Typography
        style={{
          marginTop: 10,
          marginLeft: 70,
          fontSize: 25,
          fontFamily: "Roboto",
        }}
      >
        Welcome, {userdetails?.name}
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: 10 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              width: 350,
              height: 200,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#FAF8F1",
              borderRadius: 10,
            }}
          >
            <CardContent>
              <Typography variant="h6">
                {MentorLecture ? MentorLecture.length : 0}
              </Typography>
              <Typography style={{ fontSize: 18 }} variant="body2">
                Lecture available
              </Typography>
              <Typography
                style={{ marginTop: 10, color: "GrayText" }}
                variant="body2"
              >
                All the Lectures of your Selected language will show here{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              width: 350,
              height: 200,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#FAF8F1",
              borderRadius: 10,
            }}
          >
            <CardContent>
              <Typography variant="h6">
                {SelectedCatByStudent?.length}
              </Typography>
              <Typography style={{ fontSize: 18 }} variant="body2">
                Languages Selected
              </Typography>
              <Typography
                style={{ marginTop: 10, color: "GrayText" }}
                variant="body2"
              >
                All the Lectures number of languages will show here{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              width: 350,
              height: 200,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#FAF8F1",
              borderRadius: 10,
            }}
          >
            <CardContent>
              <Typography variant="h6">4</Typography>
              <Typography style={{ fontSize: 18 }} variant="body2">
                Mentors
              </Typography>
              <Typography
                style={{ marginTop: 10, color: "GrayText" }}
                variant="body2"
              >
                All the Lecturers will show here{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <div
          style={{
            borderStyle: "groove",
            borderWidth: 1,
            borderColor: "lightgrey",
            width: "100%",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        />
      </Grid>
      {showLectures ? (
        MentorLecture.length < 1 ? (
          <p
            style={{
              textAlign: "center",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            No Lecture available in these categories
          </p>
        ) : (
          <>
            <Button
              onClick={() => navigate("/ViewAll")}
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: 70,
                marginTop: 20,
                marginBottom:20,
                backgroundColor: "ButtonShadow",
              }}
            >
              View All
            </Button>
            {/* <Grid container spacing={2} justifyContent="center"> */}
            {MentorLecture.map((data) => {
              return (
                // <Grid item xs={12} sm={6} md={4}>
                //   <Card
                //     style={{
                //       width: 350,
                //       height: 250,
                //       marginLeft: "auto",
                //       marginRight: "auto",
                //     }}
                //   >
                //     <CardContent>
                //       <Typography variant="h6">{data?.MentorName}</Typography>
                //       <Typography variant="body2">
                //         {data?.lectureName}
                //       </Typography>
                //       <Typography variant="body2">
                //         {data?.lectureDescription}
                //       </Typography>
                //       <img
                //         onClick={() =>
                //           handleDownloadPDF(
                //             data.pdfData,
                //             data.lecturePdfLocation
                //           )
                //         }
                //         src={pdf}
                //         alt="PDF"
                //         style={{
                //           width: 80,
                //           height: 80,
                //           cursor: "pointer",
                //           marginTop: 25,
                //         }}
                //       />
                //       <Button
                //         onClick={() => {
                //           CreateConversation(data?.refOfUser);
                //         }}
                //         style={{
                //           display: "flex",
                //           marginLeft: "auto",
                //           marginRight: "auto",
                //           marginTop: 15,
                //         }}
                //       >
                //         Message
                //       </Button>
                //     </CardContent>
                //   </Card>
                // </Grid>

                <div
                  style={{
                    marginTop: 20,
                    width: "90%",
                    height: 200,
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center",
                    // alignSelf: "center",
                    borderStyle: "solid",
                    borderWidth: 2,
                    flexDirection: "row",
                    borderColor: "green",
                    marginLeft: "auto",
                    marginRight: "auto",

                    padding: 20,
                  }}
                >
                  <div>
                    <img
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        borderColor: "#87CEEB",
                        borderWidth: 5,
                        borderStyle: "solid",
                      }}
                      onClick={() =>
                        handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
                      }
                      src={pdf}
                      alt="PDF"
                    />
                  </div>
                  <div style={{ width: 400, marginRight: 400 }}>
                    <Typography style={{ marginTop: 10, fontSize: 25 }}>
                      Mentor Name: {data?.MentorName}
                    </Typography>
                    <Typography style={{ fontSize: 16 }}>
                      Lecture Name: {data?.lectureName}
                    </Typography>
                    <Typography
                      style={{
                        marginTop: 30,
                        fontSize: 12,
                        color: "GrayText",
                        // marginRight: 400,
                      }}
                    >
                      Lecture Description: {data?.lectureDescription}
                    </Typography>






                  </div>
                  <Divider orientation="vertical" style={dividerStyle} />
                  <div style={{ width: 300 }}>
                    <Button
                      onClick={() => {
                        CreateConversation(data?.refOfUser);
                      }}
                      style={{
                        backgroundColor: "#FAC213",
                        width: 300,
                        borderRadius: 30,
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      Live Chat
                    </Button>

                    <Button
                      onClick={()=>navigate('/reviews')}
                      style={{
                        backgroundColor: "#87CEEB",
                        width: 300,
                        borderRadius: 30,
                        color: "black",
                        fontWeight: "600",
                        marginTop:10
                      }}
                    >
                     Give Review
                    </Button>
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: 20,
                        fontSize: 12,
                      }}
                    >
                      You can Live chat with the service Procider for any
                      further queries or Advance booking
                    </Typography>
                    <Divider style={{ marginTop: 10 }} />
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 12,
                      }}
                    >
                      Unlimited Chat, email or text
                    </Typography>
                    <Divider style={{ marginTop: 10 }} />
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 12,
                      }}
                    >
                      Up to 4 calls per month
                    </Typography>
                    <Divider style={{ marginTop: 10 }} />
                  </div>
                </div>
              );
            })}
            {/* </Grid> */}
          </>
        )
      ) : (
        <p>Please wait</p>
      )}
    </div>
  );
};

export default StudentDashboard;
