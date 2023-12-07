import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import pdf from "../assets/images/pdf.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chatIcon from "../assets/images/chatIcon.png";
var urlBackend = process.env.REACT_APP_API_KEY;
const LecturerDashboard = () => {
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [Ask, setAsk] = useState(false);
  const [Id, setId] = useState(false);
  const [lectureName, setLectureName] = useState("");
  const [lectureLink, setLectureLink] = useState("");
  const [lectureDescription, setLectureDescription] = useState("");
  const [attachments, setAttachments] = useState("");

  const [MentorLecture, setMentorLecture] = useState([]);
  const [getLectureAgain, setgetLectureAgain] = useState(true);
  const [pdfURL, setPdfURL] = useState("");

  useEffect(() => {
    const getMentorLectures = async () => {
      const userId = {
        id: userdetails?._id,
      };

      try {
        const result = await axios.post(
          `${urlBackend}lecture/getMentorLectures`,
          userId
        );
        console.log(result?.data?.data);
        setMentorLecture(result?.data?.data);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    };
    getMentorLectures();
  }, [getLectureAgain]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownloadPDF = async (pdfData, pdfFileName) => {
    const pdfName = {
      pdfFileName: pdfFileName,
    };

    try {
      const response = await axios.post(
        `${urlBackend}lecture/downloadLeacture`,
        pdfName,
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = pdfFileName;
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };
  const dividerStyle = {
    width: 1,
    backgroundColor: "skyblue",
    height: "100%",
    // marginRight: 10,
  };
  const handleDelete = async () => {
    try {
      const result = await axios.delete(
        `${urlBackend}lecture/deleteLecture/${Id}`
      );
      setAsk(false);
      setId("");
      setgetLectureAgain(!getLectureAgain);
      toast.success("Deleted Successfully");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const handleUpload = async () => {
    console.log("Lecture Name:", lectureName);
    console.log("Lecture Description:", lectureDescription);
    console.log("Attachments:", attachments);

    if (
      lectureName.trim() === "" ||
      lectureLink.trim() === "" ||
      lectureDescription.trim() === "" ||
      attachments === ""
    ) {
      toast.error("Please enter all fields");
    } else {
      const lectureDetails = new FormData();
      lectureDetails.append("pdfFile", attachments);
      lectureDetails.append("lectureName", lectureName);
      lectureDetails.append("lectureLink", lectureLink);
      lectureDetails.append("lectureDescription", lectureDescription);
      lectureDetails.append("refOfUser", userdetails?._id);
      lectureDetails.append("category", userdetails?.subject);
      lectureDetails.append("MentorName", userdetails?.name);

      try {
        const result = await axios.post(
          `${urlBackend}lecture/addLecture`,
          lectureDetails
        );

        console.log(result);

        toast.success("Lecture added successfully");
        setgetLectureAgain(!getLectureAgain);
        setLectureName("");
        setLectureLink("");
        setLectureDescription("");
        setAttachments("");
        setOpen(false);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
  };
  const iconStyles = {
    fontSize: 30,
    color: "#1565C0",
    // marginLeft: 5,
    marginBottom: 25,
  };

  const handleOpenChat = () => {
    navigate("/Messenger");
  };
  return (
    <div
      style={{
        background: "linear-gradient(to left,  #87CEEB, #87CEEB, #F5F5F5)",
        padding: "20px",
      }}
    >
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
        theme="dark"
      />
      <div style={{ display: "flex" }}>
        <Typography
          variant="h4"
          style={{
            marginTop: 70,
            marginLeft: 50,
            fontSize: 30,

            color: "#212A3E",
            fontWeight: "700",
          }}
        >
          Code Guider
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          style={{
            marginLeft: 50,
            marginTop: 10,
            fontSize: 25,
            fontFamily: "Roboto",
          }}
        >
          Welcome, {userdetails?.name}
        </Typography>
        <div>
          <Button
            style={{
              marginTop: "10px",
              marginRight: "80px",
              fontSize: "17px",
              fontFamily: "Roboto",
              backgroundColor: "#3f51b5", // Change the button background color
              color: "#fff", // Change the button text color
            }}
            onClick={handleOpen}
          >
            Upload Lecture
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="upload-lecture-modal"
            aria-describedby="upload-lecture-description"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "linear-gradient(to left,  #87CEEB, #87CEEB, #F5F5F5)",
                padding: "20px",
                width: "400px",
              }}
            >
              <Typography variant="h6">Upload Lecture</Typography>
              <TextField
                label="Lecture Name"
                fullWidth
                value={lectureName}
                onChange={(e) => setLectureName(e.target.value)}
                margin="normal"
              />

              <TextField
                label="Lecture Link"
                fullWidth
                value={lectureLink}
                onChange={(e) => setLectureLink(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Lecture Description"
                fullWidth
                multiline
                rows={4}
                value={lectureDescription}
                onChange={(e) => setLectureDescription(e.target.value)}
                margin="normal"
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setAttachments(e.target.files[0])}
                style={{ marginTop: "16px" }}
              />
              <Button
                onClick={() => {
                  handleUpload();
                }}
                variant="contained"
                color="primary"
                style={{ marginTop: "16px" }}
              >
                Upload
              </Button>
            </div>
          </Modal>
          {/* Modal for asking if you want to delete or not */}
          <Modal
            open={Ask}
            onClose={handleClose}
            aria-labelledby="upload-lecture-modal"
            aria-describedby="upload-lecture-description"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                width: "400px",
              }}
            >
              <p
                style={{
                  margin: "5px",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Want to delete the lecture?
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  color="primary"
                  style={{ margin: "10px" }}
                >
                  Confirm
                </Button>
                <Button
                  onClick={() => {
                    setAsk(false);
                  }}
                  variant="outlined"
                  style={{ margin: "10px" }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <Typography
        style={{
          marginTop: 10,
          marginLeft: 50,
          fontSize: 30,
          fontFamily: "Roboto",
        }}
      >
        Lectures
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        {MentorLecture.length > 0 ? (
          MentorLecture.map((data, index) => {
            return (
              // <Grid item xs={12} sm={6} md={4} key={data._id}>
              //   <Card
              //     style={{
              //       width: 450,
              //       height: 300,
              //       margin: "auto",
              //     }}
              //   >
              //     <CardContent>
              //       <div
              //         style={{
              //           display: "flex",
              //           alignItems: "center",
              //           justifyContent: "space-between",
              //         }}
              //       >
              //         <Typography variant="h5">
              //           Lecture {index + 1}: {data?.lectureName}
              //         </Typography>
              //         <BiSolidTrashAlt
              //           style={{ cursor: "pointer" }}
              //           color="red"
              //           size={22}
              //           onClick={() => {
              //             setAsk(true);
              //             setId(data._id);
              //           }}
              //         />
              //       </div>
              //       <Typography variant="body2">
              //         {data?.lectureDescription}
              //       </Typography>
              //     </CardContent>
              //     <img
              //       onClick={() =>
              //         handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
              //       }
              //       src={pdf}
              //       alt="PDF"
              //       style={{ width: 80, height: 80, cursor: "pointer" }}
              //     />
              //     <br />
              //     <div style={{ marginLeft: "10px", width: 250 }}>
              //       <a href={data?.lectureLink}>Link: {data?.lectureLink}</a>
              //     </div>
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
                    Lecture {index + 1}: {data?.lectureName}
                  </Typography>

                  <Typography style={{ fontSize: 16 }}>
                    Mentor Name: {data?.MentorName}
                  </Typography>
                  <a href={data?.lectureLink}>Link: {data?.lectureLink}</a>
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
                <BiSolidTrashAlt
                  style={{ cursor: "pointer" }}
                  color="red"
                  size={22}
                  onClick={() => {
                    setAsk(true);
                    setId(data._id);
                  }}
                />
                <Divider orientation="vertical" style={dividerStyle} />
                <div style={{ width: 300 }}>
                  <Button
                    onClick={handleOpenChat}
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
                  <Typography
                    style={{
                      textAlign: "center",
                      marginTop: 20,
                      fontSize: 12,
                    }}
                  >
                    You can Live chat with the service Procider for any further
                    queries or Advance booking
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
          })
        ) : (
          <p>No Lecture yet :(</p>
        )}
      </Grid>
    </div>
  );
};

export default LecturerDashboard;
