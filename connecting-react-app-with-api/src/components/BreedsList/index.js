import React from "react";
import DOG_BREED_SERVICE from "../../services/BreedsService";

class BreedsList extends React.Component {
    state = {
        breeds: []
    }

    fetchData = () => {
        // console.log(DOG_BREED_SERVICE);

        DOG_BREED_SERVICE.listAllBreeds()
        .then(breedsFromAPI => {
            // console.log("in component: ", breedsFromAPI);

            this.setState({ breeds: breedsFromAPI })
        })
        .catch(error => console.log(error));
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            <> 
                <h1> List of Breeds </h1>

                <div>
                    { this.state.breeds.map(oneBreed => {
                        return (
                            <div key={oneBreed}>
                                <p> {oneBreed} </p>
                            </div>
                        )
                    }) }
                </div>
            </>
        )
    }
}

export default BreedsList;