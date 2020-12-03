import {withFormik} from "formik";
import RegisterForm from '../components/RegisterForm';

export default withFormik({
    validate: values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        return errors;
    },
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "RegisterForm"
}) (RegisterForm);