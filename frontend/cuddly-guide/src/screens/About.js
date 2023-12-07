import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import codingCommunityImage from '../assets/images/team.jpg';
import coachingCommunityImage from '../assets/images/coaching.jpg';
import businessman from '../assets/images/bussinessman.jpg';
import students from '../assets/images/students.jpg';
import maleBussiness from '../assets/images/maleBussiness.jpg';
function AboutPage() {
  return (
    <div>
      <Container style={{ marginTop: '5rem' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <img
              src={codingCommunityImage}
              alt="Learning Code"
              style={{ width: '100%', maxWidth: '100%', height: '95%' }}
            />
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="h4" gutterBottom>
              About Code Guider
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to Code Guider, your premier destination for a dynamic and interactive learning experience in the world of programming and technology. Whether you're a student eager to explore the depths of coding or a mentor looking to share your expertise, we've created the perfect platform for you.
            </Typography>
            <Typography variant="body1" paragraph>
            At Code Guider, we believe in the power of knowledge and the importance of sharing it. Our platform brings together a diverse community of learners, educators, and enthusiasts from all corners of the globe. We offer a wide range of resources, including tutorials, articles, forums, and interactive coding challenges, to help you on your journey to becoming a coding expert.
            </Typography>
            <Typography variant="body1" paragraph>
            Our team of experienced developers and educators is dedicated to providing you with the most up-to-date and relevant content in the programming world. We cover a variety of programming languages, frameworks, and tools.
            </Typography>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 2 }}>
              <Typography variant="body1" paragraph>
                At Code Guider, we believe in the power of knowledge and the importance of sharing it. Our platform brings together a diverse community of learners, educators, and enthusiasts from all corners of the globe. We offer a wide range of resources, including tutorials, articles, forums, and interactive coding challenges, to help you on your journey to becoming a coding expert.
              </Typography>
              <Typography variant="body1" paragraph>
                Our team of experienced developers and educators is dedicated to providing you with the most up-to-date and relevant content in the programming world. We cover a variety of programming languages, frameworks, and tools, ensuring that you have access to the information you need to succeed in your coding endeavors.
              </Typography>
            </div>
            <div style={{ flex: 1, marginLeft: '1rem' }}>
              <img
                src={maleBussiness}
                alt="Coding Community"
                style={{ width: '100%', maxWidth: '100%', height: '95%' }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
            <div style={{  marginRight: '1rem' }}>
              <img
                src={businessman}
                alt="Third Image"
                style={{ width: '100%', maxWidth: '100%', height: '95%' }}
              />
              
            </div>
            <div style={{ marginRight: '1rem',}} >
            <img
                src={coachingCommunityImage}
                alt="Third Image"
                style={{ width: '100%', maxWidth: '100%', height: '95%' }}
              />
            </div>
            <div >
            <img
                src={students}
                alt="Third Image"
                style={{ width: '100%', maxWidth: '100%', height: '95%' }}
              />
            </div>
          </div>
       
        <Typography variant="body1" paragraph>
          What you can find on Code Guider:
        </Typography>
        <ul>
          <li>Tutorials on a wide range of programming languages and technologies</li>
          <li>Interactive coding challenges to test and improve your skills</li>
          <li>An active community forum for discussions and Q&A</li>
          <li>Articles and blog posts on the latest trends and best practices</li>
          <li>Regularly updated content to keep you informed and inspired</li>
        </ul>
        <Typography variant="body1" paragraph>
          Code Guider is not just a website; it's a community of learners and mentors coming together to advance their coding knowledge. We're excited to have you join us on this journey. Happy coding!
        </Typography>
        {/* You can continue adding more content and images here */}
      </Container>
    </div>
  );
}

export default AboutPage;
