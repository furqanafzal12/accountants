import React from "react";
import "./Header.css";
import { FaUserFriends } from 'react-icons/fa';
import { ImMan } from 'react-icons/im';
import { BsFillDoorOpenFill } from 'react-icons/bs';
const Header = () => {
  return (
    <div>
      <div className="container-fluid header">
        <div className="row justify-content-center">
          <div className="col-sm-4 mt-5" style={{ marginTop: "25rem" }}>
            <h1>GET 250% OF YOUR</h1>
            <h1>
              GET <span>250%</span> OF YOUR
            </h1>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text "
                  style={{ backgroundColor: "yellowgreen" }}
                >
                  search
                </span>
              </div>
              <input
                type="text"
                placeholder="enter email"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-6">
            <div class="input-group">
              <div class="custom-file" style={{ borderRadius: "5rem" }}>
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile04"
                />
                <label class="custom-file-label" for="inputGroupFile04">
                  Choose file
                </label>
              </div>
              <div class="input-group-append"></div>
            </div>
          </div>
        </div>
          </div>
          <div className="row justify-content-center mt-5">
              <div className="col-sm-4 ">
                  <h2>Its Easy To Earn Cridet</h2>
              </div>

          </div>
          <div className="container mt-5">
              <div className="row justify-content-between"style={{marginLeft:"60px"}}>
                  <div className="col-sm-3 ps-5">
                      <FaUserFriends style={{ marginLeft:"3rem",width: "6rem", height: "6rem", backgroundColor: "blue", borderRadius: "100%" }} />
                      <h2 style={{ fontSize: "25px", paddingLeft: "0" }}>REFER A FRIEND</h2>
                      <p className="mt-3 justify-content-center ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor eligendi maxime quisquam porro quam architecto!
                      </p>
                  </div>
                  <div className="col-sm-3 ps-5">
                      <ImMan style={{ marginLeft:"3rem",width: "6rem", height: "6rem", backgroundColor: "blue", borderRadius: "100%" }} />
                      <h2 style={{ fontSize: "25px", paddingLeft: "0" }}>REFER A FRIEND</h2>
                      <p className="mt-3 justify-content-center ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor eligendi maxime quisquam porro quam architecto!
                      </p>
                  </div>
                  <div className="col-sm-3 ps-5">
                      <BsFillDoorOpenFill style={{ marginLeft:"3rem",width: "6rem", height: "6rem", backgroundColor: "blue", borderRadius: "100%" }} />
                      <h2 style={{ fontSize: "25px", paddingLeft: "0" }}>REFER A FRIEND</h2>
                      <p className="mt-3 justify-content-center ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor eligendi maxime quisquam porro quam architecto!
                      </p>
                  </div>
              </div>
          </div>
          <div className="container m-5">
              <div className="row">
                  <div className="col-sm-6">
                      <img src="https://images.pexels.com/photos/6214836/pexels-photo-6214836.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  </div>
                  <div className="col-sm-6 ms-3"style={{ paddingLeft: "100px" }}>
                      <h1 >250 of  Account Fee</h1>
                      <h5>Signup And Clame Your Feture</h5>
                      <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Full Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Full Name"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Last Name</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Last Name"/>
                      </div>
                      <button type="button" class="btn btn-primary btn-lg btn-block">Signup</button>
                  </div>
              </div>
          </div>
    </div>
  );
};

export default Header;
