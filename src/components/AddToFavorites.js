import axios from 'axios';

function AddToFavorites( track ) {
    console.log('madison')

    axios
    .post('/api/favorites', track).then((response) => {
        console.log(response)
    })
}

export default AddToFavorites;


