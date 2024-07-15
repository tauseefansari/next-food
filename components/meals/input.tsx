import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import classes from "./input.module.css";

type CommonProps = {
  label?: string;
};

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type Props<Type> = Type extends "textarea"
  ? CommonProps & { type?: Type } & TextareaProps
  : CommonProps & { type?: Type } & InputProps;

export default function Input<
  Type extends
    | "text"
    | "password"
    | "email"
    | "number"
    | "url"
    | "textarea" = "text"
>({ label, type = "text", name, className = "", ...rest }: Props<Type>) {
  return (
    <>
      {label && (
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          className={`${className} ${classes.textArea}`}
          placeholder={label}
          name={name}
          id={name}
          {...(rest as TextareaProps)}
        />
      ) : (
        <input
          className={`${className} ${classes.input}`}
          placeholder={label}
          type={type}
          id={name}
          name={name}
          {...(rest as InputProps)}
        />
      )}
    </>
  );
}
