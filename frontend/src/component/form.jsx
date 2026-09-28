
const Form = ({data , changeHandle , submitHandler})=>{
    
    return (
        <form className="productform" onSubmit= {submitHandler}>
            <div  className="addform">
                <div className="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Enter product name.." value={data.name} onChange={changeHandle} name="name" className="form-control"/>
            </div>
             <div className="form-group">
                <label>Category</label>
                <select className="form-control" value={data.category} onChange={changeHandle} name="category">
                    <option value="">Select Category</option>
                    <option value="Stationary">Stationary</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Others">Others</option>
                </select>
            </div>
             <div className="form-group">
                <label>Stocks</label>
                <input type="number" placeholder="Enter stock" value={data.stock} onChange={changeHandle} className="form-control" name="stock"/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" placeholder="Enter Price" value={data.price} onChange={changeHandle} className="form-control" name="price"/>
            </div>
            <div className="form-group">
                <label>LowStockLimit</label>
                <input type="number" placeholder="Enter lowStockLimit" value={data.lowStockLimit} onChange={changeHandle} className="form-control" name="lowStockLimit"/>
            </div>
            </div>
          
            <button type="submit" className="btn">Submit</button>
        </form>
    )
}

export default Form