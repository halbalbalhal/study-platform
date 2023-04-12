import OnboardSlider from '../../components/OnboardSlider/OnboardSlider'

import Board1 from '../../assets/images/Onboard/Board1.png'
import Board2 from '../../assets/images/Onboard/Board2.png'
import Board3 from '../../assets/images/Onboard/Board3.png'

const Onboard = () => {
    return(
        <OnboardSlider
            data={[
                {
                    title: 'Start your journey with fun learning videos',
                    text: 'explore various learning videos based on your passion',
                    image: Board1
                },
                {
                    title: 'Learn your passion, level up your skill',
                    text: 'make yourself expert your skillby studying from mentors',
                    image: Board2
                },
                {
                    title: 'Get your graduate with extraordinary skills',
                    text: 'get your certificate after finished your online course',
                    image: Board3
                },
            ]}
        />
    )
    
}

export default Onboard