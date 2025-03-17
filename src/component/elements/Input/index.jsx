import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-5">
      <Label htmlFor={name}>{title}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputForm;
