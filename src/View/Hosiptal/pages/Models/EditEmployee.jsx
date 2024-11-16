import React, { useEffect } from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../../../Components/Inputs/Input"; 
import Button from "../../../../Components/Buttons/Buttons"; 
import styles from "../../CSS/Header.module.css";


const validationSchema = Yup.object({
    name: Yup.string().required("Hospital name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
});

function HospitalUpdate({ formData, onSubmit, onCancel }) {
    useEffect(() => {
        
    }, [formData]);

    return (
        <div>
            <Formik
                initialValues={{
                    name: formData?.name || "",
                    email: formData?.email || "",
                    phone: formData?.phone || "",
                    address: formData?.address || "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => onSubmit(values)} 
            >
                {({ isSubmitting }) => (
                    <FormikForm className={styles["form-admin"]}>
                        <h2>Hospital Update</h2>

                        <div>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Enter hospital name"
                                className={styles["custom-input-class"]}
                                as={Input} 
                            />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>

                        <div>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter hospital email"
                                className={styles["custom-input-class"]}
                                as={Input} 
                            />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        <div>
                            <Field
                                type="text"
                                name="address"
                                placeholder="Enter hospital address"
                                className={styles["custom-input-class"]}
                                as={Input} 
                            />
                            <ErrorMessage name="address" component="div" className="text-danger" />
                        </div>

                        <div>
                            <Field
                                type="tel"
                                name="phone"
                                placeholder="Enter hospital phone"
                                className={styles["custom-input-class"]}
                                as={Input} 
                            />
                            <ErrorMessage name="phone" component="div" className="text-danger" />
                        </div>

                        <Button type="submit" className={styles["btn-add"]} disabled={isSubmitting}>
                            {isSubmitting ? "Updating..." : "Update"}
                        </Button>
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
}

export default HospitalUpdate;
