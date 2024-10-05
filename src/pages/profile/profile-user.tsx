import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import pageStyle from "./profile.module.css";
import classNames from "classnames";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "../../hooks/selectorDispatch";
import { updateInformation } from "../../services/users/actions";

export function ProfileUser() {
  const dispatch = useDispatch();

  const { name, email } = useSelector((store) => ({
    name: store.user.user.name,
    email: store.user.user.email,
  }));

  const reset = () => {
    setValues({
      name: name,
      email: email,
      password: "",
    });
  };

  const updateInfo = () => {
    dispatch(updateInformation(values));
  };

  const { values, handleChange, setValues } = useForm({
    name: name,
    email: email,
    password: "",
  });

  return (
    <div className={pageStyle.editItem}>
      <div className={classNames(pageStyle.input, "pb-6")}>
        <Input
          type={"text"}
          placeholder="Имя"
          onChange={handleChange}
          value={values.name}
          name={"name"}
          error={false}
          icon={"EditIcon"}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
      <div className={classNames(pageStyle.input, "pb-6")}>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={"email"}
          placeholder="Логин"
        />
      </div>
      <div className={classNames(pageStyle.input, "pb-6")}>
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={"password"}
          placeholder="Пароль"
          icon={"EditIcon"}
        />
      </div>
      {(values.password != "" ||
        values.name != name ||
        values.email != email) && (
        <div className={pageStyle.buttonDiv}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={reset}
          >
            Отмена
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            onClick={updateInfo}
          >
            Сохранить
          </Button>
        </div>
      )}
    </div>
  );
}
