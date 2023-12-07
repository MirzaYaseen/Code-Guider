import React, { useState, useEffect } from "react";
import women from "../assets/images/women.jpeg";
import { Typography, TextareaAutosize, Button, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
import { BiSolidTrashAlt } from "react-icons/bi";
export default function Reviews() {
    const userdetails = JSON.parse(localStorage.getItem("userdetails"));
    const userId = userdetails?._id;
  
    const [value, setValue] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [mentorName, setMentorName] = useState("");
    const [reviews, setReviews] = useState(() => {
      const storedReviews = localStorage.getItem(`reviews_${userId}`);
      return storedReviews ? JSON.parse(storedReviews) : [];
    });
  
    useEffect(() => {
      localStorage.setItem(`reviews_${userId}`, JSON.stringify(reviews));
    }, [reviews, userId]);
  
    const handleReviewSubmit = () => {
      const newReview = {
        id: reviews.length + 1,
        name: userdetails?.name,
        mentorName: mentorName,
        rating: value,
        text: reviewText,
      };
  
      setReviews((prevReviews) => [...prevReviews, newReview]);
  
      setReviewText("");
      setValue(0);
    };
  
    const handleDelete = (id) => {
      const updatedReviews = reviews.filter((review) => review.id !== id);
      setReviews(updatedReviews);
    };
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 50,
          flexDirection: "row",
          padding: 30,
          flexWrap: "wrap", // Allow cards to wrap to the next line
        }}
      >
        {reviews.map((review) => (
          <div
            style={{
              width: 300,
              height: 200,
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 30,
              padding: 30,
              backgroundColor: "#DDF2FD",
              marginTop: 70, // Adjust the margin as needed
            }}
            key={review.id}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <img
                src={women}
                alt="women"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 60,
                  marginTop: -80,
                }}
              />
              <BiSolidTrashAlt
                style={{ cursor: "pointer" }}
                color="red"
                size={22}
                onClick={() => handleDelete(review.id)}
              />
            </div>
            <Typography style={{ fontSize: 22, fontWeight: "500" }}>
             {review.name}
            </Typography>
            <Typography style={{ fontSize: 17, marginTop: 5 }}>
            Mentor: {review.mentorName}
            </Typography>
            <Rating
              style={{ marginTop: 5 }}
              name="review-stars"
              value={review.rating}
              readOnly
            />
            <Typography style={{ fontSize: 14, marginTop: 30 }}>
              "{review.text}"
            </Typography>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          marginLeft: 50,
        }}
      >
        <Rating
          style={{ marginTop: 5 }}
          name="review-stars"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <TextField
        placeholder="Enter Mentor Name"
        style={{marginTop:30, width:300}}
         value={mentorName}
         onChange={(e)=> setMentorName(e.target.value)}
        
        />
        <TextareaAutosize
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          style={{ width: "95%", marginTop: 15, height: 100, padding: 20 }}
        />
        <Button
          variant="contained"
          onClick={handleReviewSubmit}
          style={{ marginTop: 15, marginBottom: 30, marginLeft: 1220 }}
        >
          Submit Review
        </Button>
      </div>
    </div>
  );
}
