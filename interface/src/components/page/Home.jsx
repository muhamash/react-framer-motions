import { Link } from 'react-router-dom';
import ButtonTap from '../ButtonTap';
import Stagger from '../stagger/Stagger';


export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col gap-10 py-10">
            <p className="text-xl">This is a Home Page</p>
            <Link to="/animationPage">
                <ButtonTap text={ 'Animation Page' } />
            </Link>
            <Stagger/>
        </div>
    );
}
