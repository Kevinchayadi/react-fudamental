import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm =forwardRef((props, ref) => {
    const { title, name, type, placeholder } = props;
    return (
      <div className="mb-5">
        <Label htmlFor={name}>{title}</Label>
        <Input type={type} placeholder={placeholder} name={name} ref={ref}/>
      </div>
    );
  }
) 
export default InputForm;
