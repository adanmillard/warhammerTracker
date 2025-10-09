import Navbar from '../components/Navbar'
import '../index.css'

export default function LandingPage(){
    
return(
    <div>
        <Navbar></Navbar>
        <div className='relative flex justify-center items-center'>
        <img className='w-full h-auto object-cover' src="https://i.redd.it/hows-your-literal-pile-of-shame-looking-v0-4h0bji7dbzjf1.jpg?width=5712&format=pjpg&auto=webp&s=fa33a4e889d928c3e54e134dff078d37b4362596" alt="Warhammer pile of shame" />
        <div className='absolute inset-0 bg-black/40'></div>
        <h1 className='absolute text-8xl font-bold text-white drop-shadow-lg'>Pile of Shame</h1>
        </div>
        <h1 className="font-medium text-gray-500">Pile of Fame!</h1>
        <p className="font-medium text-gray-500">This will be the landing page for the website</p>
        <p className="font-medium text-gray-500">Landing page todo:</p>
        <ul>
            <li className="font-medium text-gray-500">Add a footer</li>
            <li className="font-medium text-gray-500">Make it look good</li>
        </ul>

        <div>
            <article>
                <h2>Is your pile of shame out of control?</h2>
                <p>Join now and track progress with Pile of Frame!</p>
                <>
                <p>with progress bars, so you can turn your shame into fame!</p>
                <p>track your collection and army</p>
                <img src='https://tailwindflex.com/storage/thumbnails/simple-progress-bar-component/thumb_u.min.webp?v=1'></img>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get started</button>
                </>
            </article>
        </div>

        <footer>Created by Adan Millard 2025</footer>

    </div>
)
}