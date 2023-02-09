/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from "react";
import IItems from "../../interfaces/IItems";


class ItemList extends Component<IItems ,{}>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: IItems){
        super(props);
    }
    
    render(): React.ReactNode {
        return(
            <React.Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.item_name}</td>
                    <td>{this.props.price}</td>
                </tr>               
            </React.Fragment>
        )
    }
}
export default ItemList;