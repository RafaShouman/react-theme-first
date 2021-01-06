import { useEffect, useState } from 'react'
import Loader from './Loader'
import { useSpring, animated } from 'react-spring'
import FetchModule from '../fetch/Fetch'

function GetGame(props) {

    const propsAnim = useSpring({ opacity: 1, from: { opacity: 0 } })
    const [response, setResponse] = useState([])
    const [loaderOn, setLoaderOn] = useState(true)
    const url = props.url

    async function fetchData(url) {

        let tempRes = await FetchModule(url)
        setLoaderOn(false)
        return setResponse(tempRes)
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    return (
        <>
            { loaderOn && <Loader />}
            <section className="box-content">
                {response && response.map((resp) => {
                    return (
                        <animated.div key={resp.id} style={propsAnim}>
                            <div className="box-data">
                                <h3>{resp.title.rendered}</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: resp.content.rendered
                                    }}></div>
                                {/* <img src={resp.background_image} alt="" /> */}
                            </div>
                        </animated.div>
                    );
                })}
            </section>
        </>
    )
}

export default GetGame