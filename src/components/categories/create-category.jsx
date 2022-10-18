import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {


    const validateCategoryName = (value) => {
        let error;
        if (value.length < 3) {
            error = 'Name is too short!';
        }
        return error;
    }

    const navigate = useNavigate();

    return (
        <Formik
        initialValues={{
            name: '',            
        }}
        onSubmit={() => {            
            navigate('/')
        }}
        >

        {({ errors, touched }) => (
            <Form>
                <h1 className='header'>Add New Category</h1>
                <div className="form-group ">
                    <label htmlFor="name">Name</label>
                    <Field id="name" 
                           name="name" 
                           type="text" 
                           placeholder="Enter category name" 
                           validate={validateCategoryName}
                           className={'form-control' + 
                                (errors.name && touched.name ? ' is-invalid' : '')} 
                    />
                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                </div>            
                
                    <Button className="btn btn-primary mr-2" type="submit">Add</Button>                    
                
            </Form>
        )}
    </Formik>
    );
}

export default CreateCategory;
