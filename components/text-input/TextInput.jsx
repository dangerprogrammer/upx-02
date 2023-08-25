import { textInput } from './TextInput.module.scss';

function TextInput({ id, placeholder, ...props }) {
    return <li className={textInput}>
        <input id={id} { ...props } required/>
        <label htmlFor={id}>{ placeholder }</label>
    </li>
};

export default TextInput;