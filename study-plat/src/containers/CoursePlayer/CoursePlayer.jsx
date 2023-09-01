import './CoursePlayer.css'
import Video1 from '../../assets/videos/video2.mp4'
import { useEffect } from 'react'
import Button from '../../components/Button/Button'

const CoursePlayer = () => {

    useEffect(() => {
        let listVideo = document.querySelectorAll('.video-list .vid')
        let mainVideo = document.querySelector('.main-video video')
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
    
    })

    return (
        <>

        <h3 className="heading" >video gallery</h3>

        <div className="container">

            <div className="main-video">
                <div className="video">
                    <video src={Video1} controls muted autoPlay></video>
                    <h3 className="title">01. video title</h3>
                </div>
            </div>

            <div className="video-list">
                <div className="vid active">
                    <video src={Video1} muted autoPlay></video>
                    <h3 className="title">Title 1</h3>
                </div>

                <div className="vid">
                    <video src={Video1} muted autoPlay></video>
                    <h3 className="title">Title 2</h3>
                </div>

                <div className="vid">
                    <video src={Video1} muted autoPlay></video>
                    <h3 className="title">Title 3</h3>
                </div>

                <div>
                    <Button title='Exit to menu' tapEvent={() => {
                        window.location.href = '/course'
                    }} />
                </div>
                
            </div>
            
        </div>
        </>
    )
}
export default CoursePlayer