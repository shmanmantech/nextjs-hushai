// components/GenOTP.js
import { useState } from 'react';
import fetch from 'node-fetch';



const GenOTP = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loadingMsg, setloadingMsg] = useState('');
  var result;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setloadingMsg(true);
    // Send the data to the online service
    const response = await fetch(`/api/sendData?data=${encodeURIComponent(inputValue)}`,{ timeout: 60000 });
     result = await response.json();
	console.log(result);
	setloadingMsg(false);
    setResponseMessage(result);
  };
  
   


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Email :
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Generate OTP</button>
		{loadingMsg && <div><label>Generating... please wait...</label></div>}
      </form>
      {responseMessage && !loadingMsg && <p>{responseMessage.data.OTP}</p>}
    </div>
  );
};

export default GenOTP;
