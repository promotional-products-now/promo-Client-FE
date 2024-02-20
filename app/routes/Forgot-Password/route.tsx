import { Input, Button } from '@nextui-org/react'
import { Form, Link } from '@remix-run/react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPasswordSchema } from 'app/schema/forgotPassword.schema'


export default function ForgotPassword(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordSchema>({
    resolver: yupResolver(ForgotPasswordSchema)
  })

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log(data);

  }
  return (
    <>
      <div className="py-8">
        <div className='space-y-4'>
          <h1 className='text-2xl md:text-4xl text-dark font-bold text-center'>Forgot your password?</h1>
          <p className='text-lg md:text-xl text-dark text-center'>Please enter your email you use to login</p>
        </div>
        <Form method='post'>
          <div className='py-4 md:py-12 flex flex-col items-center justify-center'>
            <div className='py-2 w-full md:w-1/2'>
              <p className='text-base md:text-lg text-dark'>EMAIL ADDRESS</p>
              <Input type='email'
                variant='underlined'
                labelPlacement='outside'
                size='lg' placeholder='Your email'
                color='primary'
                {...register('email')}
                errorMessage={errors?.email?.message}
              />
            </div>

            <div className='py-8 w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-8'>
              <Button type='submit' variant='solid'
                className='bg-yellow text-white font-bold w-full'
                size='lg' radius='none'>
                <Link to="/login">Back to Login</Link>
              </Button>
              <Button type='submit' variant='solid'
                color='primary' className='font-bold w-full'
                size='lg' radius='none'
                onClick={handleSubmit(onSubmit)}
              >Request Password Reset</Button>
            </div>
          </div>
        </Form>
      </div>

    </>
  )
}