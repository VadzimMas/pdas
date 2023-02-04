import ProfileCard from './ProfileCard'
import alexa from './images/alexa.png'
import cortana from './images/cortana.png'
import siri from './images/siri.png'
import 'bulma/css/bulma.css'

function App() {
    return (
        <>
            <section className="hero is-link">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistance</p>
                </div>
            </section>

            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                img={alexa}
                                title="ALEXA"
                                tweeter="@alexa"
                                content="Note that the development build is not optimized.To create a production build, use npm run build."
                            />
                        </div>

                        <div className="column is-4">
                            <ProfileCard
                                img={cortana}
                                title="CORTANA"
                                tweeter="@cortana"
                                content="Note that the development build is not optimized.To create a production build, use npm run build."

                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                img={siri}
                                title="SIRI"
                                tweeter="@siri"
                                content="Note that the development build is not optimized.To create a production build, use npm run build."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App