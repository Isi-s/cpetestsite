import { useState } from 'react'
import uniben from './assets/uniben-logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  //Upload file to file.io;

  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return alert("Please select a file first!");

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      const response = await axios.post('https://limewire.com/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLink(response.data.link);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Error uploading file.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      
      
          <img src={uniben} className="logo" alt="Uniben logo" />
     
 <div className="card2">
      <h1>GET305 TEST QUESTIONS Mar 9, 2026</h1>
      <p>Welcome to GET305 Test Questions!</p>
      <p>For the following datasets listed below, 
        answer the following questions:</p>
        <table className='table'>
          <tr>
          <th>Wine Quality Dataset</th>
          <th>Diabetes Dataset</th>
            </tr>
          <tr>
            <td><a href="/downloads/winequality.csv" download ="winequality.csv">Download dataset</a></td>
            <td><a href="/downloads/diabetes2.csv" download="diabetes2.csv">Download dataset</a></td>
          </tr>
                     

        </table>

        <div class="centred">
<p>Import the dataset into your script file in R app, if your matric number
  ends with an even number, use the wine quality dataset, if it ends with an odd number, use the diabetes dataset. 
  Since the dataset is in csv format, use the read.csv() function to import it into a variable in r, from the path where you saved it.
</p>
        <p>1. Save your script file with your matnumber (no spaces)</p>
        <p>2. Make sure your full name, department and matnumber appear in your 
          script file and are commented out, as well as your answers.
        </p>
        <p>3. For each dataset answer the following in and show the codes for 
          in your script file:
        </p>
        <p>a. What are the dimensions of the dataset?</p>
        <p>b. What are the fields with the highest and lowest values?</p>
        <p>c. Develop a linear regression model or a Decison Tree based
          model for any of following in the datasets chosen:<br/>
          1. quality vs alcohol value <br/>
          2. age vs class
      
        </p>
        <p>d. What is the value of Multiple R-squared and p-value? (For regression only)</p>
        <p>d. Does the model show any strong relationship among the variables?
          (Use predictions instead, if you used decision tree)
        </p>
        <p>f. How did you determine this?</p>
        <p>e. What can you infer?</p>
        </div>
        </div>
      <div className="">
        <p>Submission Section</p>
        <small>Upload your script file here, and 
          click the submit button</small>
          <br/>
      <input type="file" onChange={handleFileChange} />
        <br/>
        <br/>
        <button onClick={uploadFile} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Submit Script File'}
        </button>
        <p>
         
        </p>
      </div>
      <footer className="centred">
       Developed by ISITEC &copy; 2026
      </footer>
      
    </>
  )
}

export default App
