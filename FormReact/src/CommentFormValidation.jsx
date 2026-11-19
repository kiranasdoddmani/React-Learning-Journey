import { useState } from "react";
 import { useFormik } from 'formik';

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username Can Not be Empty';
   } 
   return errors;
 };

 

function Comment({addnewcomment}){
   const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });



    return(
    <>
       <form  onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="username"  value={formik.values.username} name="username" onChange={formik.handleChange} id="username"/>4
        {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
        <br /><br />

        <label htmlFor="textarea">textarea:</label>
        <textarea placeholder="add few Comments" value={formData.remarks} name="remarks"  onChange={UpdateChange} id="textarea"></textarea>
        <br /><br />

        <label htmlFor="remarks">rating:</label>
        <input type="number" max={5} min={1} value={formData.rating}  name="rating"  onChange={UpdateChange} id="remarks"/>
        <br /><br />
        <button type="submit">Submit</button>
       </form>
    </>
    )
}

export default Comment;