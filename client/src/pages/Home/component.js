import React from 'react';
import { Header } from 'components';
import 'pages/Home/style.css';


const Component = () => (
  <div>
    <Header />
  <div className="formdiv-1">
    <iframe src='http://localhost:3000/render?id=form1' className="formCenter">
    
      </iframe>
  </div>
  <div className="formdiv-2">
  <iframe src='http://localhost:3000/render?id=form2' className="formCenter">
    
    </iframe>
</div>

{/* <div className="formdiv-2">

  </div>
  <div className="formdiv-1">
  
</div> */}
  </div>
)

export default Component;