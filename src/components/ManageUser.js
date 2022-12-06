import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Loader from './Loader';

const ManageUser = () => {

    const [loading, setLoading] = useState(true)
    const [usersArray, setUsersArray] = useState([]);

    const getDataFromBackend = async () => {
        const response = await fetch("http://localhost:5000/user/getall");
        const data = await response.json();
        console.log(data);
        setUsersArray(data);
        setLoading(false);
      };

    const deleteUser = (id) => {
        const reOpt = {
          method: "DELETE",
        };
        fetch("http://localhost:5000/user/delete/" + id, reOpt)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire("Deleted!", "Your data has been deleted.", "success");
    
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

    const displayUsers = () => {
        return usersArray.map((model) => (
          <>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  {/* <img
                    src={"http://localhost:5000/images/" + model.thumbnail}
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  /> */}
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{model.username}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{model.email}</p>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(model._id);
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
      {loading? (<Loader />):(<table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers()}
        </tbody>
      </table>)}
    </div>
  )
}

export default ManageUser
