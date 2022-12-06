import { Formik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import app_config from "../config";


const Publish = () => {
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

  const formSubmit = (values, { setSubmitting }) => {
    values.thumbnail = thumbnail;
    setSubmitting(true);
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
        setSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className=" card col-md-6  w-75 mt-3 mb-5 mx-auto "  >
        <div className=" card-body p-5 " >
          <h1 style={{ textAlign: "center" }}>Publish Your Podcast</h1>
          <hr />
          <Formik initialValues={podcastform} onSubmit={formSubmit}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <h1 className="form-label mt-3 ">Title</h1>
                <input
                  placeholder="Title"
                  className="form-control p-3 "
                  onChange={handleChange}
                  value={values.title}
                  id="title"
                  required
                />

                <div class="mb-3">
                  <h1 className="form-label h-13 mt-3">Description</h1>
                  <textarea className="form-control p-4" placeholder="Description" onChange={handleChange} value={values.description}
                    id="description" rows="3"></textarea>
                </div>

                <h1 className="form-label mt-3">Upload Thumbnail</h1>
                <input
                  type="file"
                  className="form-control p-3"
                  onChange={uploadThumbnail}
                  required

                />
                <h1 className="form-label mt-3">Upload File</h1>

                <input
                  type="file"
                  className="form-control p-3"
                  onChange={uploadFile}
                  required
                />
                <button disabled={isSubmitting} className="btn mt-5 w-100 p-2" type="submit" style={{ backgroundColor: "#9c27b0", color: "white" }}>
                  Publish Podcast
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Publish;
