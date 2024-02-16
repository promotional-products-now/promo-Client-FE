import { Input, Button } from '@nextui-org/react'
import { Link, Form } from '@remix-run/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema, signUpSchemaT } from 'app/schema/signup.schema'

export default function SignUp(): JSX.Element {

  const { register, handleSubmit, formState: { errors } } = useForm<signUpSchemaT>({
    resolver: yupResolver(signUpSchema)
  })

  const onSubmit = (data: signUpSchemaT) => {
    console.log(data);

  }
  return (
    <>
      <div className='py-8'>
        <h1 className='text-2xl md:text-4xl text-dark font-bold text-center'>Welcome to Promotional Products Now</h1>
        <p className='mt-4 text-lg md:text-xl text-dark text-center'>Create your account for a smoother website and purchasing experience</p>
        <p className='mt-4 text-center text-dark text-sm md:text-base'>Have an account? {' '}
          <Link to='/login' className='text-orange font-bold'>Login</Link>
        </p>

        <Form method='post'>
          <div className='py-4 md:py-12 flex flex-col justify-center items-center'>

            <div className='flex gap-4 py-2'>
              <div className='py-4 md:w-80'>
                <p className='text-base md:text-lg text-dark'>FIRST NAME</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your first name'
                  color='primary'
                  {...register('firstName')}
                  errorMessage={errors?.firstName?.message}
                />
              </div>
              <div className='py-4  md:w-80'>
                <p className='text-base md:text-lg text-dark'>LAST NAME</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your last name'
                  color='primary'
                />
              </div>
            </div>

            <div className='flex gap-4 py-2'>
              <div className='py-4 md:w-80'>
                <p className='text-base md:text-lg text-dark'>EMAIL ADDRESS</p>
                <Input type='email' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your email'
                  color='primary'
                />
              </div>
              <div className='py-4 md:w-80'>
                <p className='text-base md:text-lg text-dark'>PHONE</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your phone'
                  color='primary'
                />
              </div>
            </div>

            <div className='flex gap-4 py-2'>
              <div className='py-4 md:w-80'>
                <p className='text-base md:text-lg text-dark'>PASSWORD</p>
                <Input type='password' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your password'
                  color='primary'
                />
              </div>
              <div className='py-4 md:w-80'>
                <p className='text-base  md:text-lg text-dark'>REPEAT PASSWORD</p>
                <Input type='password' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Confirm password'
                  color='primary'
                />
              </div>
            </div>

            <div className='py-2 w-full md:w-1/2 md:px-10'>
              <div className='py-4'>
                <p className='text-base md:text-lg text-dark'>ADDRESS 1</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your complete address'
                  color='primary'
                />
              </div>
            </div>

            <div className='py-2 w-full md:w-1/2 md:px-10'>
              <div className='py-4 '>
                <p className='text-base md:text-lg text-dark'>ADDRESS 2</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your complete address'
                  color='primary'
                />
              </div>
            </div>

            <div className='flex gap-4 py-2'>
              <div className='py-4 md:w-80'>
                <p className='text-base md:text-lg text-dark'>CITY</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your city'
                  color='primary'
                />
              </div>
              <div className='py-4 md:w-80'>
                <p className='text-base md:text-lg text-dark'>STATE</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your state'
                  color='primary'
                />
              </div>
            </div>

            <div className='py-2 w-full md:w-1/2 md:px-10'>
              <div className='py-4'>
                <p className='text-base md:text-lg text-dark'>POST CODE</p>
                <Input type='text' variant='underlined'
                  labelPlacement='outside' size='lg'
                  placeholder='Your post code'
                  color='primary'
                />
              </div>
            </div>
            <div className='py-6 w-full md:w-1/2 md:px-10'>
              <Button type='submit' variant='solid' color='primary' className='font-bold w-full' size='lg' radius='none'>CREATE YOUR ACCOUNT</Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}
