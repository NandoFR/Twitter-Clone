import { TextArea as Area } from './styles';

const TextArea = ({ setProgress, value, change }) => {
    const textAreaHeight = '50px';
    const resizeTextarea = (textarea) => {
        textarea.style.height = textAreaHeight;
        textarea.style.height = textarea.scrollHeight + 'px';
    };
    const handleTextArea = (e) => {
        let maxTextAreaLength = 200;
        if (
            e.target.value.length >= maxTextAreaLength &&
            e.key !== 'Backspace'
        ) {
            e.preventDefault();
        }
        resizeTextarea(e.target);
        setProgress(e.target.value.length / (maxTextAreaLength / 100));
    };
    return (
        <Area
            value={value}
            onChange={change}
            height={textAreaHeight}
            onKeyDown={handleTextArea}
            placeholder="What's happening?"
            name="content"
        ></Area>
    );
};
export default TextArea;
