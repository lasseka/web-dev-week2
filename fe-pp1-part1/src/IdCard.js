//import images from './images'
function IdCard(props){
    return(
        <div className="id-card">
            <img src={props.picture} alt="This is my image"/>
            <p>Last name: {props.lastName}</p>
            <p>First name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height} cm</p>
            <p>Date of Birth: {props.birth.toDateString()}</p>
            
            

        </div>
    );
}
export default IdCard