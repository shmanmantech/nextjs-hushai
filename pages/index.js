// pages/index.js
import GenOTP from './components/GenOTP';
import fetch from 'node-fetch';


const Home = () => {
  return (
    <div>
      <h1>Generate New OTP</h1>
      <GenOTP />
    </div>
  );
};

export default Home;
