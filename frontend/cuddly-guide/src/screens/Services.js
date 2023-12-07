import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import chatt from "../assets/images/chatt.jpg";
import students from "../assets/images/lec.jpg";
import teacherStudentChat from "../assets/images/teacherStudentChat.jpg";
import Mujadad from "../assets/images/mujadad.jpeg";
import Bazaan from "../assets/images/bazaan1.jpeg";
import Moin from "../assets/images/moinAbba.jpg";
const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
    height: "40%",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function ContentPage() {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: "5rem" }}>
      <Typography variant="h4" gutterBottom>
        Code Guider Offers Cross Communication Portal
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis
        vel erat dapibus facilisis. Nunc euismod, justo vel accumsan malesuada,
        tortor purus auctor lorem, ut scelerisque ex ante nec est.
      </Typography>
      <div style={{ display: "flex", gap: "1rem" }}>
        <img
          src={chatt}
          alt="Image 1"
          className={classes.image}
          style={{ width: "100%", maxWidth: "30%", height: "70%" }}
        />
        <img
          src={teacherStudentChat}
          alt="Image 2"
          className={classes.image}
          style={{ width: "100%", maxWidth: "30%", height: "70%" }}
        />
        <img
          src={students}
          alt="Image 3"
          className={classes.image}
          style={{ width: "100%", maxWidth: "30%", height: "70%" }}
        />
      </div>
      <Typography variant="h4" gutterBottom marginTop={3}>
        Live Chatting
      </Typography>
      <Typography variant="body1" paragraph>
        Live chatting has become an indispensable means of communication in the
        digital age. It offers a convenient and immediate way to connect,
        whether for seeking assistance, sharing ideas, or maintaining
        relationships. In real-time text exchanges, individuals can engage in a
        dynamic conversation, seeking and providing information, clarifications,
        or just friendly banter. This mode of interaction transcends
        geographical boundaries, enabling people from different corners of the
        world to connect effortlessly. The continuous exchange of messages
        fosters a sense of connection and engagement, making it an invaluable
        tool for education, customer support, and personal communication. Live
        chat platforms provide a space for the exchange of knowledge, ideas, and
        emotions, allowing us to stay connected in a fast-paced, interconnected
        world.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Lecture Dashboard
      </Typography>
      <Typography variant="body1" paragraph>
        A lecturer dashboard is a powerful and indispensable tool in the realm
        of education. It serves as a centralized hub where educators can access
        a wealth of information and resources to enhance their teaching
        effectiveness. With this dashboard, lecturers can efficiently manage
        their courses, access student progress data, and streamline
        communication with their students. It offers a comprehensive overview of
        class performance, assignment submissions, and assessment results,
        allowing lecturers to identify areas where additional support may be
        needed. Additionally, a lecturer dashboard often integrates with
        learning management systems, making it easier to upload course
        materials, grade assignments, and engage with students through
        discussions and announcements. This multifaceted tool empowers lecturers
        to create a more engaging and tailored learning experience for their
        students, ultimately contributing to the success and satisfaction of
        both educators and learners.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>
      <Typography variant="body1" paragraph>
        A student dashboard is a crucial portal that empowers learners to take
        control of their educational journey. It serves as a personalized hub
        where students can access all the information they need to succeed in
        their academic pursuits. This digital interface provides a snapshot of a
        student's courses, assignments, and upcoming deadlines, allowing for
        efficient time management and organization. A student dashboard often
        integrates with course materials, lecture notes, and grades, enabling
        students to monitor their progress and identify areas where they can
        improve. It also serves as a gateway for communication with instructors,
        facilitating the exchange of questions, feedback, and course-related
        discussions. In essence, a student dashboard is an invaluable resource
        that fosters self-directed learning and ensures that students have all
        the tools and information at their fingertips to make the most of their
        educational experience.
      </Typography>

      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <Typography variant="h6" paragraph style={{ textAlign: "center" }}>
          Meet our dedicated team of professionals who bring expertise and
          enthusiasm to every project.
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <img
            src={Mujadad}
            alt="Image 1"
            className={classes.image}
            style={{ width: "15%", height: "25%" }}
          />

          <img
            src={Moin}
            alt="Image 2"
            className={classes.image}
            style={{ width: "100%", maxWidth: "25%", height: "100%" }}
          />
          <img
            src={Bazaan}
            alt="Image 3"
            className={classes.image}
            style={{ width: "15%", height: "25%" }}
          />
        </div>
      </Paper>
      <Typography variant="h4" gutterBottom marginTop={3}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Feel free to get in touch with us for any inquiries or to discuss your
        project. We are here to help!
      </Typography>
      <Typography variant="body1" paragraph>
        Support: mujadad@codeGuider.com
      </Typography>
      <Typography variant="body1" paragraph>
        Admin: bazaan@codeGuider.com
      </Typography>
      <Typography variant="body1" paragraph>
        Phone: +51 (34) 456-7890
      </Typography>
    </Container>
  );
}

export default ContentPage;
