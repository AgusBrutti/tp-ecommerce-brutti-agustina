import './home.css'

function Home() {

    return (
        <>
        <h3 className="titleHome">Bienvenidos a Zombificate</h3>
        <div className='divImageHome'>
        <img className="imageHome" src= {process.env.PUBLIC_URL +'/images/zombies-home.jpg'} alt="zombies"/>
        <p> JUEGOS PARA DISFRUTAR EN FAMILIA Y AMIGOS, TODAS LAS EDADES!</p>
        </div>
        </>
    )
}

export default Home;