// pages/api/sendData.js

import fetch from 'node-fetch';


export default async function handler(req, res) {
  if (req.method === 'GET') {
	  
	  //const controller = new AbortController();



		//const timeoutId = setTimeout(() => controller.abort(), 20000);
  
    const { data } = req.query;
     console.log(req.query);
    // Send the data to the online service
    const response = await fetch('https://otptest-nkji.onrender.com/getotp/'+req.query.data, { timeout: 60000 });//.then(response => {});
	console.log(response);	
    const result = await response.json();
    res.status(200).json({ message: 'Data sent successfully!', data :result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
