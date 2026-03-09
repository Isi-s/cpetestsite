import { useState } from "react";
//import { upload } from '@vercel/blob/client';
import { handleUpload } from '@vercel/blob/client';
import uniben from './assets/uniben-logo.svg';
import './App.css';


function App() {
  
 



  
  return (
    <>
      
      
          <img src={uniben} className="logo" alt="Uniben logo" />
     
 <div className="card2">
      <h1>GET305 TEST QUESTIONS Mar 9, 2026</h1>
      <p>Welcome to GET305 Test Questions!</p>
      <p>For the following datasets listed below, 
        answer the following questions:</p>
        <table className='table'>
          <thead>
          <tr>
          <th>Study hours dataset</th>
          <th>Wine Quality Dataset</th>
          <th>Diabetes Dataset</th>
          
            </tr>
          </thead>
          
            <tbody>
          <tr>
            <td><a href="public/data/data.jpg" download ="Study-hours-data">Download image</a></td>
            <td><a href="public/data/wine.csv" download ="wine.csv">Download dataset</a></td>
            <td><a href="public/data/diabetes2.csv" download="diabetes2.csv">Download dataset</a></td>
          </tr>
              </tbody>       

        </table>

        <div className="centred">
<p>Import the dataset into your script file in R app, if your matric number
  ends with an even number, use the wine quality dataset, if it ends with an odd number, use the diabetes dataset. <br/>
  Note the Study hours dataset is compulsory for both.
  Since the dataset is in csv format, use the read.csv() function to import it into a variable in r, from the path where you saved it.
</p>
        <p>1. Save your script file with your matnumber (no spaces)</p>
        <p>2. Make sure your full name, department and matnumber appear in your 
          script file and are commented out, as well as your answers.
        </p>
        <p>3. For the study hours dataset answer the following in and show the codes for 
          in your script file:
        </p>
        <p>a.Create a dataframe in r from this image</p>
        <p>b. Summarize and create a plot of the variables in your dataframe</p>
        <p>c. What can you infer?</p>
        <p>4. For the dataset you have selected answer the following in and show the codes for 
          in your script file:
        </p>
        <p>a. What are the dimensions of the dataset?</p>
        <p>b. What are the fields with the highest and lowest values?</p>
        <p>c. Develop a linear regression model or a Decison Tree based
          model for any of following in the datasets chosen:<br/>
          1. quality vs alcohol value <br/>
          2. quality vs free.sulfur.dioxide<br/>
          <p> =========  </p>
          1. age vs class <br/>
          2. age vs plasma.glucose.concentration
      
        </p>
        <p>d. What are the values of Multiple R-squared and p-value? (For regression only)</p>
        <p>d. Do the models show any strong relationship among the variables?
          (Use predictions instead, if you used decision tree)
        </p>
        <p>f. How did you determine this?</p>
        <p>e. What can you infer from your chosen dataset?</p>
        </div>
        </div>
     <div>
      <h3>Upload your script files to:</h3>
      <p>isi.edeoghon@uniben.edu</p>
      </div>
      <footer className="centred">
       Developed by <i>ISITEC</i> &copy; 2026
      </footer>
      
    </>
  )
}

export default App
