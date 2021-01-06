import { useEffect, useState } from 'react'
import Loader from './Loader'
import { useSpring, animated } from 'react-spring'
import FetchModule from './../fetch/Fetch'

function GetGame(props) {

    const propsAnim = useSpring({ opacity: 1, from: { opacity: 0 } })
    const [response, setResponse] = useState([])
    const [loaderOn, setLoaderOn] = useState(true)
    const url = props.url
    const key = 'd32c5152044246ab83ca70dafe04e65e'

    function fetchData(url) {
        fetch(`https://api.rawg.io/api/${url}?key=${key}`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res.results)
                setResponse(res.results);
                setLoaderOn(false)
            });
    }

    useEffect(() => {
        FetchModule(url)
        fetchData(url)
    }, [url])

    return (
        <>
            { loaderOn && <Loader />}
            <section className="games">
                {response.map((cur) => {
                    return (
                        <animated.div key={cur.id} style={propsAnim}>
                            <div className="game-box">
                                <h3>{cur.name}</h3>
                                <img src={cur.background_image} alt="" />
                            </div>
                        </animated.div>
                    );
                })}
            </section>
        </>
    )
}

export default GetGame