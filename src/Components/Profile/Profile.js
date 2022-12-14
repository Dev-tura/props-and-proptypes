import React from "react";
import Props from "../Props/Props";
import Cartoon from "../Images/cartoon.png";
import Graphics from "../Images/graphics.png";
import Web from "../Images/web-design.png";
import Software from "../Images/sofware.png";
import App from "../Images/app.png";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <div>
        <img src={Cartoon} aLt="" />
        <h3>I'm happy to inform you that I have over 200+ Projects done successfully!</h3>
      </div>
      <Props
        bgColor={"#fff"}
        Image={<Graphics />}
        Title="Graphics Design"
        // Bio="I'm happy to inform you that i have over 200+ Projects done successfully!"
      />
      <Props
        bgColor={"#fff"}
        Image={<Web />}
        Title="Web Design"
        // Bio="I'm happy to inform you that i have over 200+ Projects done successfully!"
      />
      <Props
        bgColor={"#fff"}
        Image={<Software />}
        Title="Software"
        // Bio="I'm happy to inform you that i have over 200+ Projects done successfully!"
      />
      <Props
        bgColor={"#fff"}
        Image={<App />}
        Title="Application"
        // Bio="I'm happy to inform you that i have over 200+ Projects done successfully!"
      />
    </Container>
  );
};

export default Profile;
const Container = styled.div`
  width: 600px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
