import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IVideElement } from "./VideoPlayer.props";

export const useVideo = () => {

    const videoRef = useRef<IVideElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const [currentTime, SetCurrentTime] = useState(0);

    const [videoTime, setVideoTime] = useState(0);

    const [progress, setProgress] = useState(0);


    /* Проставляем время фильма */
    useEffect(() => {
        if (videoRef.current?.duration) {
            setVideoTime(videoRef.current.duration)
        }
    }, [videoRef.current?.duration]);

    const toggleVideo = useCallback(() => {
        if (!isPlaying) {
            videoRef.current?.play();

            setIsPlaying(true);
        } else {
            videoRef.current?.pause();

            setIsPlaying(false);
        }
    }, [isPlaying])

    const forward = () => {
        if (videoRef.current) {
            videoRef.current.currentTime += 10;
        }
    }

    const revert = () => {
        if (videoRef.current) {
            videoRef.current.currentTime -= 10;
        }
    }

    const fullScreen = () => {
        const video = videoRef.current

        if (!video) return;

        if (video.requestFullscreen) {
            video.requestFullscreen()
        } else if (video.msRequestFullScreen) {
            video.msRequestFullScreen()
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen()
        } else if (video.webkitRequestFullSceen) {
            video.webkitRequestFullSceen()
        }
    }


    /* Вычисляем прогресс */
    useEffect(() => {
        const video = videoRef.current;

        if (!video) return

        const updateProgress = (() => {
            SetCurrentTime(video.currentTime);

            setProgress((video.currentTime / videoTime) * 100);
        })

        video.addEventListener('timeupdate', updateProgress);

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
        }


    }, [videoTime]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowRight':
                    forward()
                    break;
                case 'ArrowLeft':
                    revert();
                    break
                case ' ':
                    {

                        e.preventDefault();
                        toggleVideo();
                    }
                case 'f':
                    fullScreen();
                    break;
                default:
                    return
            }
        };

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [toggleVideo]);

    return useMemo(() => ({
        videoRef,
        actions: {
            fullScreen, revert, forward, toggleVideo
        },
        video: {
            isPlaying, currentTime, progress, videoTime
        }
    }), [currentTime, progress, isPlaying, videoTime, toggleVideo])

};