import '../CoursePlayer.css'
import { useEffect } from 'react'
import Button from '../../../components/Button/Button'
import { htmlCourse } from '../../../data/CoursePlayers'
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle'

const CoursePlayerHTML = () => {

    const switchPlayList = () => {

        let listVideo = document.querySelectorAll('.video-list .vid')
        let mainVideo = document.querySelector('.main-video iframe')
        let title = document.querySelector('.main-video .title')
    
        listVideo.forEach(video => {
            video.onclick = () => {
                listVideo.forEach(vid => vid.classList.remove('active'))
                video.classList.add('active')
                if (video.classList.contains('active')) {
                    let src = video.children[0].getAttribute('src')
                    mainVideo.src = src
                    let text = video.children[1].innerHTML
                    title.innerHTML = text
                }
            }
        })
    
    }

    useEffect(switchPlayList)

    return (
        <>

        <h3 className="heading">HTML course</h3>

        <div className="container">

            <div className="main-video">
                <div className="video">
                    <iframe width={'95%'} height={'100%'} allowFullScreen></iframe>
                </div>
                <h3 className="title">Choose your lesson</h3>
            </div>

            <div className="video-list">
                {
                    htmlCourse.map(r => (
                        <div className="vid">
                            <iframe allowFullScreen width="100" height="67" src={r.cource_link} ></iframe>
                            <h3 allowFullScreen className="title">{r.cource_title}</h3>
                        </div>
                    ))
                }
                <ThemeToggle />
            </div>

            <div className='video__button'>
                <Button title='Exit to menu' tapEvent={() => {
                    window.location.href = '/course'
                }} />
            </div>
            
        </div>
        </>
    )
}


export default CoursePlayerHTML