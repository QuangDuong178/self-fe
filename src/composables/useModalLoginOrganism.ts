import { useRef, useState } from 'react';
import { validateEmail, validateEmpty } from '@/utils/commonUtils.ts';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTE } from '@/constant/routes.ts';
import { ErrorType } from '@/types/models/error.ts';

export const useModalLoginOrganism = () => {
  const navigate = useNavigate();
  const emailValue = useRef<HTMLInputElement>(null);
  const passwordValue = useRef<HTMLInputElement>(null);
  const [remember, setRemember] = useState<boolean>(false);
  const [errors, setErrors] = useState<Array<ErrorType>>([]);

  const handleClickLogin = async () => {
    // const ctx = getCurrentInstance().appContext.config.globalProperties;
    const errorList: Array<ErrorType> = [];
    if (!validateEmpty(emailValue.current.input.value) || !validateEmail(emailValue.current.input.value)) {
      errorList.push({
        name: 'email',
        message: '有効なメールアドレスを入力してください',
      });
    }
    if (!validateEmpty(passwordValue.current.input.value)) {
      errorList.push({
        name: 'password',
        message: '有効なパスワードを入力してください',
      });

    }


    if (errorList.length === 0) {
      // const response: AxiosResponse<any> = await getRepository("login").login({
      //     email: emailValue,
      //     password: passwordValue
      // })
      navigate(APP_ROUTE.HOME);
    }
    setErrors(errorList);
  };
  return {
    emailValue,
    passwordValue,
    remember,
    errors,
    setRemember,
    handleClickLogin,
  };
};
