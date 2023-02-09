import React, { Component } from "react";
type Props = {
    keywords:string;
    onChangeKeywords:(event: any)=> void;
    handleOnSubmit:(event: any) =>void;
}

class ItemForm extends Component<Props ,{}>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: Props){
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="container center py-3">
                    <label className="center text-warning"><h2>TYPESCRIPT-REACT-SEARCH-JSON-SERVER-FETCH</h2></label>
                    <form onSubmit={this.props.handleOnSubmit}>
                        <div className="text-left">
                            <div className="form-group">
                                <div className="col-lg-12">
                                    <div className="row ">
                                        <div className="col-lg-12 pt-1">                                        
                                            <div className="form-group">
                                                                                      
                                                <input type="text"  className="form-control"
                                                    value={this.props.keywords} name="keywords"
                                                    placeholder="Enter Keywords ..."
                                                    onChange={this.props.onChangeKeywords}/>
                                            </div> 
                                        </div>                                       
                                        
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default ItemForm;