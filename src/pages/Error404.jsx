import Header from '../components/Header';
import Error from '../components/Error404';
import Menu from '../components/Menu';

function Error404() {
    return (
        <div className='pageContainer'>
            <Header />
            <Menu />
            <div className="contentWrap">
                <Error />
            </div>
        </div>
    );
}

export default Error404;