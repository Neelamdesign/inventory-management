import Form from "../component/form"
import DashboardLayout from "../component/layout"
import {updateProducts, getProducts} from "../features/products"
import { useDispatch } from "react-redux"
import {useParams, useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import { useState ,useEffect} from "react"

const UpdateForm = ()=>{
  
  const navigate = useNavigate();
  const {id} = useParams()
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.products.data);

  const updateProduct = products?.find((product)=>product._id === id);
  useEffect(() => {
  dispatch(getProducts());
}, [dispatch]);

  const [ updatedData, setUpdatedData] = useState({
        name:updateProduct?.name,
        category:updateProduct?.category,
        stock:updateProduct?.stock,
        price:updateProduct?.price,
        lowStockLimit:updateProduct?.lowStockLimit
    })

      const ChangeHandler = (e)=>{
      const  {name, value}= e.target;
        setUpdatedData({...updatedData , [name] : value})
    }

     const submitHandler = (e)=>{
      e.preventDefault();
      dispatch(updateProducts({updatedData: updatedData, updatedId : id}))
      navigate("/")
     }
    return (
        <DashboardLayout>
        <Form  data ={updatedData} changeHandle={ChangeHandler} submitHandler={submitHandler}/>
    </DashboardLayout>
    )
}

export default UpdateForm

