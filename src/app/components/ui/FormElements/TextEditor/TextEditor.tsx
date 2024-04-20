import { Editor } from 'react-draft-wysiwyg';
import { EditorTextProps } from "./TextEditor.props";
import styles from './TextEditor.module.css';
import cn from 'classnames';
import { useEffect, useState } from "react";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MaterialIcon } from '../../MaterialIcon/MaterialIcon';

const TextEditor = ({ onChange, placeholder, value, error, className, ...props }: EditorTextProps): JSX.Element => {

    const [editerState, setEditState] = useState(EditorState.createEmpty());

    const [isUpdated, setIsUpdate] = useState(false);

    useEffect(() => {
        if (isUpdated) return;

        const defaultValue = value || '';

        const SpecialBlockFormatHTML = htmlToDraft(defaultValue);

        const contentState = ContentState.createFromBlockArray(
            SpecialBlockFormatHTML.contentBlocks,
            SpecialBlockFormatHTML.entityMap,
        );

        const newEditorState = EditorState.createWithContent(contentState);

        setEditState(newEditorState)

    }, [value, isUpdated]);

    const inEditorStateChange = (editorState: EditorState) => {
        setIsUpdate(true);

        setEditState(editorState)

        return onChange(draftToHtml(convertToRaw(editerState.getCurrentContent())))

    };

    return (
        <div className={cn(styles['text-editor'], className)} {...props}>

            <label>

                <span>{placeholder}</span>

                <div className={styles['wrapper']}>

                    <Editor

                        toolbarClassName={styles['toolbar']}
                        editorClassName={styles['editor']}
                        editorState={editerState}
                        onEditorStateChange={inEditorStateChange}
                        spellCheck /* Проверка на ошибки */
                        toolbar={{
                            options: ['inline', 'blockType', 'emoji'],
                            inline: {
                                inDropdown: false,
                                className: undefined,
                                component: undefined,
                                dropdownClassName: undefined,
                                options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
                            },
                            blockType: {
                                inDropdown: true,
                                options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                                className: undefined,
                                component: undefined,
                                dropdownClassName: undefined,
                            },
                            list: {
                                inDropdown: false,
                                options: ['unordered', 'ordered'],
                            },
                            fontSize: {
                                icon: <MaterialIcon name='MdSearch' />,
                                options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                                className: undefined,
                                component: undefined,
                                dropdownClassName: undefined,
                            },
                            emoji: {
                                icon: 'emoji',
                                className: undefined,
                                component: undefined,
                                popupClassName: undefined,
                                emojis: [
                                    '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                                    '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                                    '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                                    '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                                    '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                                    '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                                    '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                                    '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                                    '✅', '❎', '💯',
                                ],
                            },
                        }}

                    />

                </div>

                {error && <div className={styles['error']}>{error.message}</div>}

            </label>

        </div>
    );
};

export default TextEditor;