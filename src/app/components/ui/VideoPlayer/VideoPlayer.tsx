import styles from './VideoPlayer.module.css';
import cn from 'classnames';
import { IVideElement, VideoPlayerProps } from './VideoPlayer.props';
import { useVideo } from './useVideo';
import { useAuth } from '@/hooks/useAuth';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

/* https://github.com/kmoskwiak/videojs-resolution-switcher */
/* https://stackoverflow.com/questions/38626993/change-video-quality-with-sources-pointing-to-different-quality-versions */

const VideoPlayer = ({ slug, videoSources, className, ...props }: VideoPlayerProps): JSX.Element => {

    const { actions, video, videoRef } = useVideo();


    return (
        <div className={cn(styles['wrapper'], className)} {...props} >

            <video
                ref={videoRef}
                className={styles['video']}
                src={`${videoSources}#t=7`}
                preload='metadata'
            />

            <div className={styles['progressbar-container']}>
                <div className={styles['progressbar']} style={{ width: `${video.progress}%` }} />
            </div>

            <div className={styles['button-player']}>
                <div>
                    <button onClick={actions.revert}>
                        <MaterialIcon name='MdHistory' />
                    </button>

                    <button onClick={actions.toggleVideo}>
                        <MaterialIcon name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'} />
                    </button>

                    <button onClick={actions.forward}>
                        <MaterialIcon name='MdUpdate' />
                    </button>
                </div>

                <div className={styles['time-controls']}>

                    <p className={styles['controls-time']}>
                        {Math.floor(video.currentTime / 60) + ':' + ('0' + Math.floor(video.currentTime % 60)).slice(-2)} /
                    </p>

                    <p className={styles['controls-time']}>
                        {Math.floor(video.videoTime * 60) + ':' + ('0' + Math.floor(video.videoTime % 60)).slice(-2)}
                    </p>

                </div>

                <div>
                    <button onClick={actions.fullScreen}>
                        <MaterialIcon name='MdFullscreen' />
                    </button>
                </div>

            </div>

        </div >

    );
};

export default VideoPlayer;
