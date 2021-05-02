import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        console.log(history);
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        console.log(this.props);
        if (location.state){
            return (
                <div class = 'movies'>
                    <div class = 'movie'>
                        <img src = {location.state.poster} alt={location.state.title} title={location.state.title} />
                        <div class = 'movie_data'>
                            <h3 class='movie_title'>{location.state.title}</h3>
                            <h5 className = 'movie_year'>{location.state.year}</h5>
                            {location.state.genres}
                            <p className = 'movie_summary'>{location.state.summary}</p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }    
    }
}

export default Detail;