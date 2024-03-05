import React from 'react'
import { Link, Form } from "@remix-run/react";
import { Input, Button, Checkbox } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from 'app/schema/login.schema';


export default function Login(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = (data: LoginSchema) => {
    console.log(data);

  }
  return (
    <div>
      <div className='py-4 md:py-8'>
        <h1 className='text-3xl md:text-4xl text-dark  font-bold text-center'>Login your account</h1>
        <p className='mt-4 text-base text-dark text-center'>Fill your account details below</p>

        <Form method='post'>
          <div className='py-4 md:py-12 flex flex-col justify-center items-center space-y-6'>
            <div className='w-full md:w-1/2'>
              <p className='text-base text-dark font-bold'>EMAIL ADDRESS</p>
              <Input type='email' variant='underlined'
                labelPlacement='outside' size='lg'
                placeholder='Your Email' className='w-full'
                color='primary'
                {...register('email')}
                errorMessage={errors?.email?.message}
              />
            </div>

            <div className='w-full md:w-1/2'>
              <p className='text-base text-dark font-bold'>PASSWORD</p>
              <Input type='password' variant='underlined'
                labelPlacement='outside' size='lg'
                placeholder='Your Password' className='w-full'
                color='primary'
                {...register('password')}
                errorMessage={errors?.password?.message}
              />
            </div>

            <div className='py-6  w-full md:w-1/2'>
              <Button type='submit' variant='solid' color='primary'
                className='font-bold w-full' size='lg'
                radius='none'
                onClick={handleSubmit(onSubmit)}
              >LOGIN</Button>
            </div>

            <div className='py-4 md:w-1/2 flex justify-between items-center gap-2'>
              <Checkbox className='text-dark md:text-lg font-medium' color='primary' radius='none'>Remember me</Checkbox>

              <Link to="/forgot-password" className='text-dark md:text-lg'>Forgot your password?</Link>
            </div>

          </div>
        </Form>
        <div>
          <p className='text-center text-dark text-sm md:text-base'>You don’t have an account? {' '}
            <Link to="/signup" className='text-orange font-bold'>Create an account</Link></p>
        </div>
      </div>
    </div>

  )
}
