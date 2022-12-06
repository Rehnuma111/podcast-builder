import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "./Loader";

const ManagePodcast = () => {
  const [loading, setLoading] = useState(true);

  const [podcastArray, setPodcastArray] = useState([]);

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/podcast/getall");
    const data = await response.json();
    console.log(data);
    setPodcastArray(data);
    setLoading(false);
  };

  const deletePodcast = (id) => {
    const reOpt = {
      method: "DELETE",
    };
    fetch("http://localhost:5000/podcast/delete/" + id, reOpt)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");

          getDataFromBackend();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayPodcast = () => {
    return podcastArray.map((model) => (
      <>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src={"http://localhost:5000/images/" + model.thumbnail}
                alt=""
                style={{ width: 45, height: 45 }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{model.title}</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">{model.description}</p>
          </td>
          <td>
            <button
              onClick={() => {
                deletePodcast(model._id);
              }}
              type="button"
              className="btn btn-danger btn-sm "
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    ));
  };

  return (
    <div>
      {loading? (<Loader />) : (<table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{displayPodcast()}</tbody>
      </table>)}
    </div>
  );
};

export default ManagePodcast;
