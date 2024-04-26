import { UploadFieldProps } from "./UploadField.props";
import styles from './UploadField.module.css';
import cn from 'classnames';
import { useUpload } from "./useUpload";
import { SkeletonLoader } from "../../Skeleton/SkeletonLoader";
import Image from "next/image";

export const UploadFiled = ({ className, onChange, placeholder, error, folder, isNoImage = false, style, value, ...props }: UploadFieldProps): JSX.Element => {

    const { isLoading, uploadFile } = useUpload(onChange, folder);



    return (
        <div className={cn(className, styles['field'], styles['upload-field'])} style={style} >
            <div className={styles['upload-box']}>

                <label className={styles['label']}>

                    <span className={styles['span']}>{placeholder}</span>

                    <input className={styles['input']} type="file" onChange={uploadFile} />

                    {error && <div className={styles['error']}>{error.message}</div>}

                </label>

                {!isNoImage && <div className={styles['upload-image-container']}>

                    {isLoading ? <SkeletonLoader count={1} className={styles['skeleton']} /> : value && <Image
                        className={styles['img']}
                        alt=''
                        sizes="100%"
                        src={`${value}`}
                        fill
                        unoptimized />}

                </div>}

            </div>
        </div>
    );
};

UploadFiled.displayName = 'UploadFiled';
