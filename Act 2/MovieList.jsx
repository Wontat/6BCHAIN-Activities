import React from "react";
class MovieList extends React.Component {
    render() {
        let movieone = "Interstellar";
        let movietwo = "Inception";
        let moviethree = "Paprika";
        return(
        
         <div>
            <ul>  
                <h3> Movie List </h3>
            <li><p>{movieone}</p></li>
            <li><p>{movietwo}</p></li>
            <li><p>{moviethree}</p></li>
            </ul>
         </div>
           
    );
    }
}   

export default MovieList