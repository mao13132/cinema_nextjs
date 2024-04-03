'use client'
import * as MaterialIcons from 'react-icons/md';

import { MaterialIconProps } from "./MaterialIcon.props";

export const MaterialIcon = ({ name }: MaterialIconProps): JSX.Element => {

    const IconComponent = MaterialIcons[name];

    if (IconComponent) {
        return <IconComponent />
    } else {
        return <MaterialIcons.MdDragIndicator />
    }

};

