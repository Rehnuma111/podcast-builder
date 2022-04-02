import { Formik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import app_config from "../config";
import "../css/addpodcast.css";

const AddPodcast = () => {
  const [thumbnail, setThumbnail] = useState("");

  const getUser = () => {
    const user = sessionStorage.getItem("user");

    if (user) {
      console.log(user);
      return JSON.parse(user);
    }
  };

  // const [currentUser, setCurrentUser] = useState(getUser());

  const [file, setFile] = useState("");
  const url = app_config.api_url;

  const podcastform = {
    title: "",
    description: "",
    author: "622469ae7a8605092a6b17ea",
    thumbnail: "",
    file: "",
  };

  const uploadThumbnail = (e) => {
    let file = e.target.files[0];
    setThumbnail(file.name);
    let formdata = new FormData();
    formdata.append("file", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const uploadFile = (e) => {
    let file = e.target.files[0];
    setFile(file.name);
    let formdata = new FormData();
    formdata.append("file", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const formSubmit = (values) => {
    values.thumbnail = thumbnail;
    values.file = file;
    console.log(values);
    const req_opt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/podcast/add", req_opt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered Successfully",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="card col-md-6 ad-podcast ">
        <div className="card-body  ">
          <h1 className="head-podcast ">Add Podcast</h1>
          <Formik initialValues={podcastform} onSubmit={formSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Title"
                  className="form-control mt-3"
                  onChange={handleChange}
                  value={values.title}
                  id="title"
                />

                <input
                  placeholder="description"
                  className="form-control mt-3"
                  onChange={handleChange}
                  value={values.description}
                  id="description"
                />

                <label className="mt-3 up-thumb">Upload Thumbnail</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={uploadThumbnail}
                />

                <label className="mt-3">Upload File</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={uploadFile}
                />

                <button className="btn btn-primary mt-3 w-100" type="submit">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default AddPodcast;
