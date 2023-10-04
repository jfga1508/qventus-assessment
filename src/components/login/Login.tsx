import React, { useState, useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Login.scss';

interface Options {
    specialCharacters?: boolean;
    digits?: boolean;
    uppercase?: boolean;
    noConsecutive?: boolean;
}

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'specialCharacters': {
            return {
                ...state,
                specialCharacters: /[!@#$%^&*]/.test(action.password),
            };
        }
        case 'digits': {
            return {
                ...state,
                digits: /\d/.test(action.password),
            };
        }
        case 'uppercase': {
            return {
                ...state,
                uppercase: /[A-Z]/.test(action.password),
            };
        }
        case 'noConsecutive': {
            return {
                ...state,
                noConsecutive:
                    /(.)\1\1/.test(action.password) !== true ? true : false,
            };
        }
    }
};

const Login = (options: Options) => {
    const [password, setpassword] = useState('');
    const [state, dispatch] = useReducer(reducer, () => {
        let obj: any = {};
        Object.keys(options).forEach((key) => {
            obj[key] = false;
        });
        return obj;
    });

    useEffect(() => {
        for (const property in options) {
            dispatch({
                type: property,
                password: password,
            });
        }
    }, [password, options]);

    return (
        <>
            <h1 className='text-align--center'>Password Component</h1>

            <form className='form'>
                <div className='form-control'>
                    <input
                        type='text'
                        name='password'
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>

                <div className='form-info'>
                    {options.specialCharacters && (
                        <div className='form-info__label'>
                            <div className='form-info__icon'>
                                <FontAwesomeIcon
                                    icon={
                                        state.specialCharacters
                                            ? icon({ name: 'check' })
                                            : icon({ name: 'xmark' })
                                    }
                                />
                            </div>
                            <p className='form-info__para'>
                                Has one or more of these special characters:
                                !@#$%^&*
                            </p>
                        </div>
                    )}
                    {options.digits && (
                        <div className='form-info__label'>
                            <div className='form-info__icon'>
                                <FontAwesomeIcon
                                    icon={
                                        state.digits
                                            ? icon({ name: 'check' })
                                            : icon({ name: 'xmark' })
                                    }
                                />
                            </div>
                            <p className='form-info__para'>
                                Has a number / digit
                            </p>
                        </div>
                    )}
                    {options.uppercase && (
                        <div className='form-info__label'>
                            <div className='form-info__icon'>
                                <FontAwesomeIcon
                                    icon={
                                        state.uppercase
                                            ? icon({ name: 'check' })
                                            : icon({ name: 'xmark' })
                                    }
                                />
                            </div>
                            <p className='form-info__para'>
                                Has an uppercase letter
                            </p>
                        </div>
                    )}
                    {options.noConsecutive && (
                        <div className='form-info__label'>
                            <div className='form-info__icon'>
                                <FontAwesomeIcon
                                    icon={
                                        state.noConsecutive
                                            ? icon({ name: 'check' })
                                            : icon({ name: 'xmark' })
                                    }
                                />
                            </div>
                            <p className='form-info__para'>
                                Has NO consecutive letters*** (stretch goal)
                            </p>
                        </div>
                    )}
                </div>
            </form>
        </>
    );
};

export default Login;
