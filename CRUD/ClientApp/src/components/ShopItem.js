import axios from "axios";
import { useEffect, useState } from "react";

function ShopItem() {

    const [id, setId] = useState("");
    const [itemname, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [sellprice, setSell]   = useState("");
    const [stock, setStock] = useState("");
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => await Load())();
    }, []);
    async function Load() {

        const result = await axios.get("http://localhost:5212/api/Shop/GetItem");
        setItems(result.data);
        console.log(result.data);
    }
    async function save(event) {

        event.preventDefault();
        try {
            await axios.post("http://localhost:5212/api/Shop/AddItem", {

                itemname: itemname,
                price: price,
                sellprice: sellprice,
                stock: stock, 


            });
            alert("Item Added Successfully");
            setId("");
            setItemName("");
            setPrice("");
            setSell("");
            setStock("");


            Load();
        } catch (err) {
            alert(err);
        }
    }

    async function editItem(items) {
        setItemName(items.itemname);
        setPrice(items.price);
        setSell(items.sellprice);
        setStock(items.stock);

        setId(items.id);
    }

    async function DeleteItem(id) {
        await axios.delete("http://localhost:5212/api/Shop/DeleteItem/" + id);
        alert("Item deleted Successfully");
        setId("");
        setItemName("");
        setPrice("");
        setSell("");
        setStock("");
        Load();
    }

    async function updateItem(event) {
        event.preventDefault();
        try {

            await axios.patch("http://localhost:5212/api/Shop/UpdateItem/" + items.find((u) => u.id === id).id || id,
                {
                    id: id,
                    itemname: itemname,
                    price: price,
                    sellprice: sellprice,
                    stock: stock, 

                }
            );
            alert("Item Updated Successfully");
            setId("");
            setItemName("");
            setPrice("");
            setSell("");
            setStock("");

            Load();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <h1>Shop Items</h1>
           <div class="container mt-6">
             <form>
               <div class="form-group">

                <label>Item Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="itemname"
                    value={itemname}
                    onChange={(event) => {
                        setItemName(event.target.value);
                    }}
                />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input
                            type="text"
                            class="form-control"
                            id="price"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Sell</label>
                        <input
                            type="text"
                            class="form-control"
                            id="sellprice"
                            value={sellprice}
                            onChange={(event) => {
                                setSell(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Stock</label>
                        <input
                            type="text"
                            class="form-control"
                            id="stock"
                            value={stock}
                            onChange={(event) => {
                                setStock(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button class="btn btn-primary mt-6" onClick={save}>
                            Add Item
                        </button>
                        <button class="btn btn-warning mt-6" onClick={updateItem}>
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
            <br></br>

            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Item Id</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">sell price</th>
                        <th scope="col">Stock</th>


                        <th scope="col">Option</th>
                    </tr>
                </thead>
                {items.map(function fn(item) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{item.id} </th>
                                <td>{item.itemname}</td>
                                <td>{item.price}</td>
                                <td>{item.sellprice}</td>
                                <td>{item.stock}</td>

                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                        onClick={() => editItem(item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => DeleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>

        </div>
    );
}

export default ShopItem;
