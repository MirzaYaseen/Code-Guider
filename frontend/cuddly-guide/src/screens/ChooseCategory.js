import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const ChooseCategory = () => {
  const navigate = useNavigate();
  const handleOpenChat = () => {
    navigate("/Messenger");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 120,
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            display: "flex",
            textAlign: "center",
            alignSelf: "center",
            fontSize: 32,
            fontWeight: "600",
          }}
        >
          HOW CODE GUIDER WORKS!
        </Typography>
        <Typography
          style={{
            display: "flex",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Here what community is saying about us!
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 50,
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: 270,
            width: 250,
            backgroundColor: "#dcf0fa",
            borderRadius: 40,
          }}
        >
          <div
            style={{
              height: 60,
              width: 250,
              backgroundColor: "#84cdee",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontSize: 22, fontWeight: "500", color: "white" }}
            >
              Registration
            </Typography>
          </div>
          <div
            style={{
              height: 70,
              flexDirection: "row",
              justifyContent: "space-evenly",
              //   backgroundColor:'whitesmoke',
              padding: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 40,
                width: 40,
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "#50b8e7",
                padding: 5,
                display: "flex",
                alignItems: "center",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
            </div>
          </div>
          <Typography style={{ fontSize: 12, color: "grey", paddingLeft: 20 }}>
            Drag and Drop Picture
          </Typography>
          <div
            style={{
              height: 10,
              width: "90%",
              backgroundColor: "#50b8e7",
              alignSelf: "center",
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              height: 10,
              width: "90%",
              backgroundColor: "#50b8e7",
              alignSelf: "center",
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              height: 10,
              width: "90%",
              backgroundColor: "#50b8e7",
              alignSelf: "center",
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        </div>

        <div
          style={{
            height: 270,
            width: 250,
            backgroundColor: "#dcf0fa",
            borderRadius: 40,
          }}
        >
          <div
            style={{
              height: 60,
              width: 250,
              backgroundColor: "#84cdee",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontSize: 22, fontWeight: "500", color: "white" }}
            >
              Search
            </Typography>
          </div>
          <div
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
              //   backgroundColor:'whitesmoke',
              padding: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 40,
                width: 40,
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "#50b8e7",
                padding: 5,
                display: "flex",
                alignItems: "center",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
            </div>
          </div>

          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              //   backgroundColor:'whitesmoke',
              padding: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 40,
                width: 40,
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "#50b8e7",
                padding: 5,
                display: "flex",
                alignItems: "center",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              //   backgroundColor:'whitesmoke',
              padding: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 40,
                width: 40,
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "#50b8e7",
                padding: 5,
                display: "flex",
                alignItems: "center",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          style={{
            height: 270,
            width: 250,
            backgroundColor: "#dcf0fa",
            borderRadius: 40,
          }}
        >
          <div
            style={{
              height: 60,
              width: 250,
              backgroundColor: "#84cdee",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontSize: 22, fontWeight: "500", color: "white" }}
            >
              Connection
            </Typography>
          </div>
          <div
            style={{
              height: 70,
              flexDirection: "row",
              justifyContent: "space-evenly",
              //   backgroundColor:'whitesmoke',
              padding: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 40,
                width: 40,
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "#50b8e7",
                padding: 5,
                display: "flex",
                alignItems: "center",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
              <div
                style={{
                  height: 2,
                  width: 70,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  backgroundColor: "#50b8e7",
                  padding: 5,
                  display: "flex",
                  alignItems: "center",
                  marginTop: 5,
                }}
              ></div>
            </div>
          </div>

          <div
            style={{
              height: 10,
              width: "90%",
              backgroundColor: "#50b8e7",
              alignSelf: "center",
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              height: 10,
              width: "90%",
              backgroundColor: "#50b8e7",
              alignSelf: "center",
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              height: 10,
              width: "50%",
              backgroundColor: "#50b8e7",
              alignSelf: "center",
              marginTop: 10,
              marginRight: "auto",
              marginLeft: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 50,
          flexDirection: "row",
        }}
      >
        <Typography style={{ fontSize: 18, fontWeight: "600" }}>
          1. Choose Your Category
        </Typography>
        <Typography style={{ fontSize: 18, fontWeight: "600" }}>
          2. Serach Best Mentors
        </Typography>
        <Typography style={{ fontSize: 18, fontWeight: "600" }}>
          3. See Your Live Chat
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <Typography style={{ width: 200, fontSize: 12 }}>
          It won't take 5 minutes to put your information and get Started
        </Typography>
        <Typography style={{ width: 220, fontSize: 12 }}>
          From recommendations, search, search refferal and book a time to meet.
        </Typography>
        <Typography style={{ width: 190, fontSize: 12 }}>
          With someone who could change your life.
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <Button
        onClick={()=>navigate('/chooseSubject')}
          title="Get Started"
          style={{
            backgroundColor: "#87CEEB",
            color: "black",
            width: 120,
            height: 30,
            borderRadius: 20,
          }}
        >
          Get Started
        </Button>
        <Button
          onClick={()=>navigate('/reviews')}
          title="Get Started"
          style={{
            backgroundColor: "#87CEEB",
            color: "black",
            width: 120,
            height: 30,
            borderRadius: 20,
          }}
        >
          Search
        </Button>
        <Button
        onClick={handleOpenChat}
          title="Get Started"
          style={{
            backgroundColor: "#87CEEB",
            color: "black",
            width: 120,
            height: 30,
            borderRadius: 20,
          }}
        >
          See Chat
        </Button>
      </div>
    </div>
  );
};

export default ChooseCategory;
