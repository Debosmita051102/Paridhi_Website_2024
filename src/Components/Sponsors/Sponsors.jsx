// import React from 'react'

// const Sponsors = () => {
//   return (
//     <div>Sponsors</div>
//   )
// }

// export default Sponsors









import React from 'react';
import { Container, Box } from "../Sponsors/Sponsors.styled"; // Import the styled components

function Sponsors() {
  return (
    <Container> {/* Use the Container styled component */}
      <Box> {/* Use the Box styled component */}
        <span></span>
        <div className="content">
          <h2>Card one</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
          <img 
             src="https://e0.pxfuel.com/wallpapers/66/921/desktop-wallpaper-coca-cola-coca-cola-logo.jpg" 
             alt=""
             style={{ width: '240px', borderRadius: '10px' }} 
           />
          {/* <a href="#">Read More</a> */}
        </div>
      </Box>
      <Box> {/* Use the Box styled component */}
        <span></span>
        <div className="content">
          <h2>Card two</h2>
          <img 
             src="https://e0.pxfuel.com/wallpapers/66/921/desktop-wallpaper-coca-cola-coca-cola-logo.jpg" 
             alt=""
             style={{ width: '240px', borderRadius: '10px' }} 
           />
          {/* <a href="#">Read More</a> */}
        </div>
      </Box>
      <Box> {/* Use the Box styled component */}
        <span></span>
        <div className="content">
          <h2>Card Three</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
          <img 
             src="https://e0.pxfuel.com/wallpapers/66/921/desktop-wallpaper-coca-cola-coca-cola-logo.jpg" 
             alt=""
             style={{ width: '240px', borderRadius: '10px' , alignitems: 'center'}} 
           />
          {/* <a href="#">Read More</a> */}
        </div>
      </Box>
    </Container>
  );
}

export default Sponsors;
