import axios from 'axios';
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

 const CateroryList = () => {

     const [categories, setCategories] = useState();
     let navigate = useNavigate();
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        await axios.get("http://laravel-2/api/categories")
                   .then(({ data })=>setCategories(data))                   
    }

    if (!categories) {
      return null
  }

  return (
    <div className='Container mt-3 '>
    <h1 className="header"> Categories</h1>
   
    <Button  className="btn btn-success btn-sm" onClick={() => navigate("/create-category")}>
          Create Category
    </Button>

      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>id</th>
            <th>Categories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <>
                <tr>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <div className="d-flex">
                      <Button  className="btn btn-warning btn-sm">Edit</Button>
                      <Button  className="btn btn-danger btn-sm">✕</Button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default CateroryList;