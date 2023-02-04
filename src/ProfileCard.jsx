import 'bulma/css/bulma.css'
function ProfileCard({ img, title, tweeter, content }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4">
                    <img
                        style={{
                            aspectRatio: '4/4'
                        }}
                        src={img} alt="" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{tweeter}</p>
                        <p className="content">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard