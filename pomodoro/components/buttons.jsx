import axios from "axios";
export default function Button(){
    return (
        <button className="button" onClick={
            () => {
                axios.get('http://localhost:3000/start')
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }>
            Button
            </button>
    )
}