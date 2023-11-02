import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context';
import { useStorageUpload } from "@thirdweb-dev/react";
import { ethers } from 'ethers';
import Loading from './Loading';
import axios from 'axios';


const Publish = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [cid, setCid] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [filePath, setFilePath] = useState("");
  const { address, contractAddress, contractABI } = useStateContext();
  const { mutateAsync: upload } = useStorageUpload();
  const [isLoading, setIsLoading] = useState(false);
  const [report_data, setReportData] = useState("Dummy Data");
  const qrData = ["https://qrs.ly/sef9dvo","https://qrs.ly/sef9dvo","https://qrco.de/beRtjq","https://qrs.ly/rcf9dw1","https://qrs.ly/25f9dwx","https://qrs.ly/33f9dx5","https://qrs.ly/72f9dx2"];

  const VerfifyQR = async (qrcode) => {
    console.log(qrcode);
    for(var i=0;i<qrData.length;i++){
      if(qrData[i] === qrcode){
        return true;
      }
    }
    return false;
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  } 

  const uploadData = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress.address,
          contractABI,
          signer
        )
        console.log("contract");
        //// handleUpload
        const formData = new FormData();
        formData.append('file', file); // Assuming 'file' is your file input's ref or state
        formData.append('password', password); // Assuming 'password' is your string parameter
        formData.append('title', title); // Assuming 'password' is your string parameter
        console.log(password);
        try {
          const report_response = await axios.post('http://127.0.0.1:5000/process_pdf', formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Important for file uploads
            },
          });
            // Handle success
            if(await VerfifyQR(report_response.data.qr_code_value)){
              console.log("Verified");
              try {
                const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data', // Important for file uploads
                  },
              });
              console.log('File uploaded successfully:', response.data);
              console.log('Report Data:', report_response.data);
              console.log(JSON.stringify(report_response.data.report_data));
              setCid(response.data.cid);
              const msgTx = await contract.NewRrecord(
                `${title}`,
                `${description}`,
                `${response.data.cid}`,
                `${JSON.stringify(report_response.data.report_data)}`
              )
      
              msgTx.wait();
              alert("The data is succesfully uploaded!!");
              setIsLoading(false);
            } catch (error) {
              // Handle error
              console.error('Error uploading file:', error);
            }
          }
            else{
              alert("The QR code is not valid!! Document is Fake or tampered!!");
              setIsLoading(false);
            } 
          } catch (error) {
            // Handle error
            console.error('Error Flask Api:', error);
          }
        /////// handleUpload
      } else {
        console.log('eth object not found')
      }
    } catch (e) {
      console.log(e);
    }
  }




  return (
    <div className='pt-8  pb-20 w-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center '>
      {!isLoading ? (
        <div className='p-10 bg-[#24133d] bg-opacity-90 w-11/12  lg:w-4/6 xl:w-1/3 tracking-wide rounded-3xl mt-20 '>

          <h1 className='text-2xl text-white tracking-wider font-bold'>Post a new Record</h1>
          <div className=' h-[0.125rem] bg-slate-600 my-2'></div>
          <form action="" className='flex flex-col justify-center' onSubmit={uploadData}>
            {/* <div className='mb-4'>
              <label className='text-white ml-3'>Title</label>
              <input
                onChange={e => setTitle(e.target.value)}
                type="text" name='title' placeholder='Enter Title of a record' className='w-full p-2 rounded-lg mt-2 outline-none text-lg' required />
            </div> */}
            <div className='mb-4'>
              <label className='text-white ml-3'>Title</label>
              <select
                onChange={e => setTitle(e.target.value)}
                name='title'
                className='w-full p-2 rounded-lg mt-2 outline-none text-lg'
                required
              >
                <option value="">Select a record</option>
                <option value="Dengue">Dengue</option>
                <option value="Liver">Liver</option>
                <option value="Cholesterol">Cholesterol</option>
                <option value="Thalassemia">Thalassemia</option>
                <option value="Urine">Urine</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='text-white ml-3'>Description</label>
              <textarea
                onChange={e => setDescription(e.target.value)}
                type="text" required name='desc' rows="4" placeholder='Enter description of record' className='w-full p-2 rounded-lg mt-2 outline-none text-lg' />
            </div>

            <div>
              <h1 className='text-white mb-3'>Choose a File</h1>
              {/* <input type='file'
                className='font-semibold tracking-wide cursor-pointer text-white'
                placeholder='Select'
                onChange={e => setFilePath(e.target.files[0])}
                required
              /> */}
              <input type="file" className='font-semibold tracking-wide cursor-pointer text-white' id="input" name="file" onChange={handleFileChange} multiple />
              <div className='mb-4'>
              <label className='text-white ml-3'>Password</label>
              <input
                onChange={handlePasswordChange}
                type="text" name='password' placeholder='Enter Password for encryption' className='w-full p-2 rounded-lg mt-2 outline-none text-lg' required />
            </div>
            </div>


            <div className='h-[0.02rem] bg-gray-300 w-full mt-5'></div>

            <div className='mt-5 flex justify-center'>
              <button
                type='submit'
                className="bg-blue-600 text-white p-2 w-40 rounded-full tracking-wide font-bold text-lg hover:scale-105 transition duration-200"
              >
                Post
              </button>
            </div>

          </form>
        </div>

      ) : ( 
        <Loading value='Wait for the transaction' />
      )}
    </div>
  )
}

export default Publish