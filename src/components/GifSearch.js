import React from 'react';

class GifSearch extends React.Component{

    render(){
        return(
            <div className="input-group">
                <form onSubmit={(event) => this.props.submitSearch(event)}>
                    <input type="text" className="form-control" placeholder="Search for..." onChange={(event) =>this.props.updateSearch(event)}/>
                </form>
            </div>
        )
    }
}

export default GifSearch