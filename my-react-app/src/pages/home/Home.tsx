import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { httpGet } from "../ApiService/ApiService";

const Home = () => {
  // const [dataProduct, setDataProduct] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  // const [dataCompanies, setDataCompanies] = useState([]);

  // const getProducts = async () => {
  //   try {
  //     const productsData = await httpGet("/products");
  //     setDataProduct(productsData);
  //   } catch (error) {
  //     console.error("Error getting products:", error);
  //   }
  // };

  const getCategories = async () => {
    try {
      const categoriesData = await httpGet("/categories");
      setDataCategories(categoriesData);
    } catch (error) {
      console.error("Error getting categories:", error);
    }
  };

  // const getCompanies = async () => {
  //   try {
  //     const companiesData = await httpGet("/companies");
  //     setDataCompanies(companiesData);
  //   } catch (error) {
  //     console.error("Error getting companies:", error);
  //   }
  // };

  useEffect(() => {
    // getProducts();
    getCategories();
    // getCompanies();
  }, []);

  return (
    <div>
      <div className="container p-5">
        <div className="col-10">
          <div className="row">
            <div
              style={{ paddingRight: "15px" }}
              className="col-sm-12 col-md-4 col-lg-3"
            >
              <div className="row">
                <input type="text" placeholder="Search" />
              </div>
              <div>
                <h5>Category</h5>
                {dataCategories &&
                  dataCategories.map((category, index) => (
                    <div key={index} className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <input type="radio" />
                        </div>
                        <div style={{ paddingLeft: "5px" }}>
                          <span>{category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* <div>
                <h5>Compan</h5>
                {dataCompanies &&
                  dataCompanies.map((companies, index) => (
                    <div key={index} className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <input type="radio" />
                        </div>
                        <div style={{ paddingLeft: "5px" }}>
                          <span>{companies}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div> */}
              <button className="btn bg-danger text-white">
                Clear All Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
