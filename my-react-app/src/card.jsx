import profilePic from './assets/images.jpg'

function Card() {

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>Dark Knight</h2>
            <p className='card-text'>
                Madness is like gravity. <br/>
                All it takes is a little Push
            </p>
        </div>
    );
}

export default Card;