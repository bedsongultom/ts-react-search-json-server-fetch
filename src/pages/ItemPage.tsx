import React, {Component, ChangeEvent} from "react";
import ItemForm from "../components/items/ItemForm";
import ItemList from "../components/items/ItemList";
import Api from "../services/Api";
const api = new Api();

class ItemPage extends Component<{}>{
        state = {
            id:'',
            item_name:'',
            price:'',
            keywords:'',

            items:[{
                id:'',
                item_name:'',
                price:''
            }],  
        }
    componentDidMount =()=>{
        this.readItems();
        
    }    
    
    readItems = async()=>{
        await api.get()
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({ items: data });
            return this;
        })
        .catch((error)=>{
            console.error({ message: error.message });
        }) 
    }
    onChangeKeywords = (event: ChangeEvent<HTMLInputElement>)=>{   
        this.setState({ keywords: event.target.value });
    }
   
    handleOnSubmit= async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        await api.get()
        .then((res)=>res.json())
        .then((data)=>{
            let id = data.items.id;
            let item_name = data.items.items.name;
            let price     = data.items.price;
            this.setState({ id: id, item_name: item_name, price: price });
        })
        .catch((error)=>{
            console.log({ message : error.message });
        })

        this.readItems();
        this.setState({ id:'', item_name:"", price:""});
    }

    render() {
       const { items } = this.state;
        return(
            <React.Fragment>
                <div className="container py-4">
                  <div className="shadow-lg card ps-2 pe-2">   
                    <ItemForm 
                        keywords={this.state.keywords}                
                        onChangeKeywords={this.onChangeKeywords}                       
                        handleOnSubmit={this.handleOnSubmit}/>
                    
                    <div className="container">
                        <div className=" card mb-4">
                        <table className="table table-responsive table-hover">
                            <thead className="ps-2 pe-2">
                                <tr>
                                    <th>ID</th>
                                    <th>ItemName</th>
                                    <th>Price</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {items.length < 1 ? <tr className="text-center"><td colSpan={5}> Data Not Found !</td></tr>:
                                // eslint-disable-next-line array-callback-return
                                items.filter( item =>{
                                    if(this.state.keywords === ""){
                                        return item;                                                
                                    }else{
                                        if(item.item_name.toLowerCase().includes(this.state.keywords.toLowerCase())
                                            || item.id.includes(this.state.keywords)){
                                                return item;
                                            }
                                    }
                                }).map((item,index) =>{
                                    return(
                                    <ItemList key={index}
                                              id={item.id}
                                              item_name={item.item_name}
                                              price={item.price}/>
                                       
                                )})}
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
                
            </React.Fragment>
        )
    }
}
export default ItemPage;

