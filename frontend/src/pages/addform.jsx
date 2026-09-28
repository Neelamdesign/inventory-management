import Form from "../component/form";
import DashboardLayout from "../component/layout"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products";

const AddForm = () => {
  const dispatch = useDispatch();
  const [ formData, setFormData] = useState({
        name:"",
        category:"",
        stock:"",
        price:"",
        lowStockLimit:""
    })
    const ChangeHandler = (e)=>{
      const  {name, value}= e.target;
        setFormData({...formData , [name] : value})
    }

    const submitHandler = (e)=>{
      e.preventDefault();
     dispatch(addProduct(formData))
     setFormData({
       name:"",
        category:"",
        stock:"",
        price:"",
        lowStockLimit:""
     });
    }
  return (
    <DashboardLayout>
         <div className="title">
            <h4>Add New Items</h4>
            <p>Fill in the details to add a new items in the inventory</p>
        </div>
      <Form data= {formData} changeHandle={ChangeHandler} submitHandler={submitHandler}/>
    </DashboardLayout>
  );
};

export default AddForm;
