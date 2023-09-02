const VideoFrame = (props) => {
    return (
        <>
            <iframe width={props.width} height={props.height}
                src={props.from}
                title={props.title}
                controls="0"
            ></iframe>
        </>
    )
}

export default VideoFrame