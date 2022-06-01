import {useNavigate} from 'react-router-dom';
const AddUserFrom = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = event.target;
    const {name, email, contact, role, address, isActive} = values;
    const userData = {
      name: name.value,
      email: email.value,
      contact: contact.value,
      role: role.value,
      address: address.value,
      isActive: isActive.value,
    };

    console.log(userData);
  };

  return (
    <>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex align-items-center justify-content-between">
                  <div class="d-flex justify-content-between">
                    <h4 class="card-title d-inline-block">Add Users</h4>
                  </div>
                  <div>
                    <a
                      onClick={() => navigate('/user-list')}
                      className="btn btn-primary add-list text-white pull-right"
                    >
                      User List
                    </a>
                  </div>
                </div>
                <div class="card-body">
                  <form
                    onSubmit={handleSubmit}
                    data-toggle="validator"
                    name="userForm"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Role *</label>
                          <select required name="role" class="form-control">
                            <option value={'customer'}>Customer</option>
                            <option value={'supplier'}>Supplier</option>
                            <option value={'cashier'}>Cashier</option>
                          </select>
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Name *</label>
                          <input
                            name="name"
                            type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Phone Number *</label>
                          <input
                            name="contact"
                            type="text"
                            class="form-control"
                            placeholder="Enter Phone No"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Email *</label>
                          <input
                            name="email"
                            type="text"
                            class="form-control"
                            placeholder="Enter Email"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Address</label>
                          <textarea
                            name="address"
                            class="form-control"
                            placeholder="Address"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      {/* <div class="col-md-6">
                        <div class="form-group">
                          <label>Password</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Password"
                            required
                          />
                          <div class="help-block with-errors" style={{color: 'red'}}></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Confirm Password</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Confirm Password"
                            required
                          />
                          <div class="help-block with-errors" style={{color: 'red'}}></div>
                        </div>
                      </div> */}
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Status *</label>
                          <select required name="isActive" class="form-control">
                            <option value={1}>Active</option>
                            <option value={0}>Inactive</option>
                          </select>
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add User
                    </button>
                    <button type="reset" class="btn btn-danger">
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddUserFrom;
