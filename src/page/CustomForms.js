import { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const CustomForms = () => {

    const formInitialSchema = {
        name: '',
        email: '',
        password: '',
        confirmPassword: "",
        website: '',
        comment: '',
        termsAndCond: false,
        gender: "",
        picked: ""
    }

    const formValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
        website: yup.string().required('Website is required'),
        comment: yup.string().required('Comment is required'),
        termsAndCond: yup.boolean().oneOf([true], "Terms and condition is required"),
    });


    const handleFormSubmit = (values) => {
        console.log("Submitted values", values)
    }

    return (
        <Fragment>

            <div className="container">
                <div className="col-md-12">
                    <h1 className="text-center"> Formilk with Yup Form Validation</h1>
                </div>

                <div className="col-md-8 offset-md-2 card shadow p-5">
                    <Formik initialValues={formInitialSchema}
                        validationSchema={formValidationSchema}
                        onSubmit={(values => handleFormSubmit(values))}>
                        {({ values }) =>
                            <Form>
                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="name"
                                        placeholder="Enter your Name"
                                        className="form-control" />

                                    <p className="text-danger">
                                        <ErrorMessage name="name" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="email"
                                        placeholder="Enter your Email"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field component="select" name="gender"
                                        className={"form-control"}>
                                        <option value="" disabled>Please select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Field>
                                    <p className="text-danger">
                                        <ErrorMessage name="gender" />
                                    </p>
                                </div>

                                <div className="col-md-12 mt-4">
                                    <label>
                                        <Field type="radio" name="picked" value="One" />
                                        Male
                                    </label>
                                    <br />
                                    <label>
                                        <Field type="radio" name="picked" value="Two" />
                                        Female
                                    </label>
                                    <div>Picked: {values.picked}</div>

                                </div>


                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="password"
                                        placeholder="Enter your Password"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>

                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="confirmPassword"
                                        placeholder="Enter your Password"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="confirmPassword" />
                                    </p>
                                </div>

                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="website"
                                        placeholder="Enter your Website Address"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="website" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="comment"
                                        placeholder="Enter your Comment"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="comment" />
                                    </p>
                                </div>

                                <div className="col-md-12 mt-4">
                                    <label className="form-inline">
                                        <Field type="checkbox"
                                            name="termsAndCond"
                                            placeholder="Enter your Comment"
                                            className="form-control">

                                        </Field>
                                        Terms and condition
                                    </label>
                                    <p className="text-danger">
                                        <ErrorMessage name="termsAndCond" />
                                    </p>
                                </div>


                                <div className="col-md-12 mt-4">
                                    <button className="btn btn-primary btn-block"
                                        type="submit"
                                    >
                                        Submit Details
                                    </button>
                                </div>


                            </Form>
                        }

                    </Formik>
                </div>


            </div>


        </Fragment >

    )
}

export default CustomForms
