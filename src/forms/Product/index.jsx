import {useNavigate} from 'react-router-dom';
const AddProductForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = event.target;
    const {
      barcode,
      name,
      description,
      category,
      brand,
      price,
      cost,
      stock,
      unit,
      location,
      status,
    } = values;
    const productData = {
      barcode: barcode.value,
      name: name.value,
      description: description.value,
      category: category.value,
      brand: brand.value,
      price: price.value,
      cost: cost.value,
      stock: stock.value,
      unit: unit.value,
      location: location.value,
      status: status.value,
    };

    console.log(productData);
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
                    <h4 class="card-title d-inline-block">Add Product</h4>
                  </div>
                  <div>
                    <a
                      onClick={() => navigate('/product-list')}
                      className="btn btn-primary add-list text-white pull-right"
                    >
                      Product List
                    </a>
                  </div>
                </div>
                <div class="card-body">
                  <form
                    onSubmit={handleSubmit}
                    data-toggle="validator"
                    name="productForm"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Category *</label>
                          <select required name="category" class="form-control">
                            <option value={1}>Beans</option>
                            <option value={0}>Drinks</option>
                          </select>
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Brand *</label>
                          <select required name="brand" class="form-control">
                            <option value={1}>Coke</option>
                            <option value={0}>Pepsi</option>
                          </select>
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Name *</label>
                          <input
                            name="name"
                            type="text"
                            class="form-control"
                            placeholder="Enter Product Name"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Barcode *</label>
                          <input
                            required
                            name="barcode"
                            class="form-control"
                            type={'number'}
                            placeholder="Enter Product Barcode"
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Price *</label>
                          <input
                            required
                            name="price"
                            class="form-control"
                            type={'number'}
                            placeholder="Enter Product Sale Price"
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Cost *</label>
                          <input
                            required
                            name="cost"
                            class="form-control"
                            type={'number'}
                            placeholder="Enter Product Cost"
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Unit *</label>
                          <select required name="unit" class="form-control">
                            <option value={1}>Kg</option>
                            <option value={0}>Ltr</option>
                            <option value={0}>Pieces</option>
                          </select>
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Stock *</label>
                          <input
                            required
                            name="stock"
                            class="form-control"
                            type={'number'}
                            placeholder="Enter Product Cost"
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Description *</label>
                          <textarea
                            name="description"
                            class="form-control"
                            placeholder="Enter Description"
                            required
                          />
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Location *</label>
                          <select required name="location" class="form-control">
                            <option value={1}>AL-23</option>
                            <option value={0}>BQ-48</option>
                          </select>
                          <div
                            class="help-block with-errors"
                            style={{color: 'red'}}
                          ></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Status *</label>
                          <select required name="status" class="form-control">
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
                      Add Product
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
export default AddProductForm;
