import { useModalLoginOrganism } from '@/composables/useModalLoginOrganism';
import './style.scss';
import { Title } from '@/components/atoms/Title';
import { CommonCheckbox } from '@/components/atoms/CommonCheckbox';
import { CommonButton } from '@/components/atoms/CommonButton';
import { InputWithTitle } from '@/components/molecules/InputWithTitle';
import { InputType } from '@/types/enums/input-type.ts';
// import { InputType } from '@/types/enums/input-type.ts';
// import { InputWithTitle } from '@/components/molecules/InputWithTitle';

export const ModalLoginOrganism = () => {
  const {
    emailValue,
    passwordValue,
    remember,
    errors,
    setRemember,
    handleClickLogin,
  } =
    useModalLoginOrganism();
  return (
    <div className={'bg-white p-10 modal-login-organism '}>
      <Title text={'ログイン'} className='mb-10' />
      <InputWithTitle
        type={InputType.TEXT}
        name='email'
        title='メールアドレス'
        placeHolder=''
        ref={emailValue}
        error={errors.find(item => item.name === 'email')}
        className='mb-6'
      />
      <InputWithTitle
        type={InputType.PASSWORD}
        name='password'
        title='パスワード'
        placeHolder=''
        ref={passwordValue}
        error={errors.find(item => item.name === 'password')}
      />

      <div className={'text-center'}>
        <CommonCheckbox className={'mt-10'} label={'ログイン状態を保存する'} value={remember}
          handleClick={() => setRemember(!remember)} />
      </div>
      <div className={'text-center'}>
        <CommonButton className={'btn-login mt-4'} content={'ログイン'} handleClick={handleClickLogin} />
      </div>


    </div>
  );
};
