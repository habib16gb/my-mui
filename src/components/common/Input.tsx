interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  width: number;
  readonly: boolean;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Input = ({
  type,
  value,
  width,
  readonly = false,
  onChange,
  onClick,
  id,
}: PropsInput) => {
  return (
    <input
      style={{ width }}
      className='p-4'
      type={type}
      value={value ? value : ""}
      readOnly={readonly}
      onChange={onChange}
      onClick={onClick}
      id={id}
    />
  );
};

export default Input;
