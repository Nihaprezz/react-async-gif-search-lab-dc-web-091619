import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

let key = process.env.REACT_APP_API_KEY

class GifListContainer extends React.Component{
    constructor(){
        super()

        this.state = {
            gifs: [],
            searchText: "dolphin"
        }
    }

    fetchGifs(){
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.searchText}&api_key=${key}&rating=g&limit=3`

        fetch(url)
        .then(resp => resp.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data
            })
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }

    submitSearch = (event) =>{
        event.preventDefault();
        this.fetchGifs()
    }

    updateSearchText = (event) => {
        let newText = event.target.value
        
        this.setState({
            searchText: newText
        })
    }

    render(){
        return (
            <div className="grid-display">
                <GifList gifs={this.state.gifs}/>
                <GifSearch submitSearch={this.submitSearch} updateSearch={this.updateSearchText}/>
            </div>
        )
    }
}

export default GifListContainer