"use client"
import React, { useState } from 'react';
const MyForm = () => {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
email: ''
});
const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value
});
};
const handleSubmit = (e) => {
e.preventDefault();
console.log(formData);
};
return (
<form onSubmit={handleSubmit}>
<input 
 type="text" 
name="firstName" 
value={formData.firstName} 
onChange={handleChange} 
placeholder="First Name" 
/>
<input 
type="text" 
name="lastName" 
value={formData.lastName} 
onChange={handleChange} 
placeholder="Last Name" 
/>
<input 
type="email" 
name="email" 
value={formData.email} 
onChange={handleChange} 
placeholder="Email" 
/>
<button type="submit">Submit</button>
</form>
);
}
export default MyForm;