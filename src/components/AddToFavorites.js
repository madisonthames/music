import axios from 'axios';

function AddToFavorites( track ) {

    axios
    .post('/api/favorites', track).then((response) => {
        console.log(response)
    })
}

export default AddToFavorites;


