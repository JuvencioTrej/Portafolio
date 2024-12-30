import PropTypes from 'prop-types'
import '../styles/Head.css'


const Head = ({ name }) => {
    
    return (
        <>
            <div className='head'>
                <div className='head_content'>
                    <h1 className='head_content__title'>
                            Hi, I am <span className='head_content__text__gold'>{name}</span>
                    </h1>
                    <p className='head_content__text'>
                        desarrollador de software <span className='head_content__text__gold'>full stack</span> con pasión por el diseño y la funcionalidad. Mi fortaleza está en el desarrollo frontend, donde transformo ideas en interfaces intuitivas y atractivas.
                    </p>
                    <p className='head_content__text'>
                        <span className='head_content__text__gold'>Mi meta:</span> crear sistemas de calidad que simplifiquen y mejoren la vida diaria de los usuarios.
                    </p>
                </div>
            </div>
        </>
    )
}

// Uso de PropTypes para definir el uso de las props
Head.propTypes = {
    name: PropTypes.string.isRequired
}

export default Head


