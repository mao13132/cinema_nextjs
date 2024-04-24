'use client'
import * as MaterialIcons from 'react-icons/md';

import { MaterialIconProps } from "./MaterialIcon.props";
import { useRenderClient } from '@/hooks/useRenderClient';

export const MaterialIcon = ({ name }: MaterialIconProps): JSX.Element => {

    const { isRenderClient } = useRenderClient();

    const IconComponent = MaterialIcons[name];

    if (isRenderClient) {
        if (IconComponent) {
            return <IconComponent />
        } else {
            return <MaterialIcons.MdDragIndicator />
        }
    } else return <MaterialIcons.MdDragIndicator />



};

