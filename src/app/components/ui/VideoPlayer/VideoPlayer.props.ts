import { DetailedHTMLProps, HTMLAttributes, VideoHTMLAttributes } from "react";

export interface VideoPlayerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    videoSources: string | undefined;
    slug: string | undefined;
};


export interface IVideElement extends HTMLVideoElement {
    msRequestFullScreen?: () => void;
    mozRequestFullScreen?: () => void;
    webkitRequestFullSceen?: () => void;
}