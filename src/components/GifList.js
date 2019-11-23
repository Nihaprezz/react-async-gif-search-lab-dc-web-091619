import React from 'react';

class GifList extends React.Component{

    render(){
        //creating the JSX to render
        let allGifs = this.props.gifs.map(gif => {
            return <img className="thumbnail"
            key={gif.id} src={gif.images.original.url} alt={gif.title} />
        })

        return (
            <div>
                {allGifs}
            </div>
        )
    }
}

export default GifList