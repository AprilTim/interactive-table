export const required = value => ( value ? undefined : 'Это обязательное поле!' );

export const num = value => ( !isNaN( value ) ? undefined : 'Допустимы только числа!' );

const checkEmail = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
export const email = value => value && checkEmail.test( value )
  ? undefined
  : 'Некорректный Email';

export const phone = value =>  value && /\(\d{3}\)\d{3}-\d{4}/.test( value )
  ? undefined
  : 'Номер телефона дожен быть ввида: \'(333)666-4444\'';



