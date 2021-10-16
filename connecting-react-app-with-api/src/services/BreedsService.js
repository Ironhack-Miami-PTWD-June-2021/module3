import axios from "axios";

const service = axios.create({
    baseURL: "https://dog.ceo/api"
})


const DOG_BREED_SERVICE = {
    listAllBreeds: () => {
        return service.get("/breeds/list/all")
                .then(result => {
                    // console.log("IN SERVICE: ", result.data.message);

                    const objectOfBreeds = result.data.message;
                    const breeds = Object.keys(objectOfBreeds);

                    // console.log("IN SERVICE: ", breeds);
                    return breeds;
                })
                .catch(error => console.log(error))
    },
    listSubBreeds: () => {
        return service.get("/breed/hound/list")
            .then(resultSubBreeds => {
                console.log(resultSubBreeds);
            })
            .catch(error => console.log(error))
    }
}

export default DOG_BREED_SERVICE;