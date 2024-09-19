import React from "react";
import pageStyle from "./pages.module.css";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { userRegistration } from "../services/users/actions";
import { useForm } from "../hooks/useForm";

export function Registration() {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
    name: "",
  });
  const dispatch = useDispatch();

  const registrationOnClick = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    dispatch(userRegistration(values) as any);
  };

  return (
    <div className={pageStyle.child}>
      <form onSubmit={registrationOnClick}>
        <p className="text text_type_main-medium pb-6">Регистрация</p>

        <div className={classNames(pageStyle.input, "pb-6")}>
          <Input
            type={"text"}
            placeholder="Имя"
            onChange={handleChange}
            value={values.name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="ml-1"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <EmailInput
            onChange={handleChange}
            value={values.email}
            name={"email"}
            isIcon={false}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={"password"}
            extraClass="mb-2"
          />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className={classNames(pageStyle.action, "pt-20")}>
        <p
          className={classNames(
            pageStyle.textLeft,
            "text text_type_main-default"
          )}
          style={{ textAlign: "right" }}
        >
          Уже зарегистрированы?
        </p>

        <Link
          to="/login"
          className={classNames(
            pageStyle.textRight,
            "text text_type_main-default"
          )}
        >
          Войти
        </Link>
      </div>
    </div>
  );
}
