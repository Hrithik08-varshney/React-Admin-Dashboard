import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";
import { useState } from "react";

export default function New({ inputs, title }) {
  const [file, setFile] = useState("");

  const handleImage=(e)=>{
    setFile(e.target.files[0]);
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file?URL.createObjectURL(file) : "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="}
              alt="no pic"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={handleImage}/>
              </div>

              {inputs?.map((item) => {
                return (
                  <div key={item.id} className="formInput">
                    <label>{item.label}</label>
                    <input type={item.text} placeholder={item.placeholder} />
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
