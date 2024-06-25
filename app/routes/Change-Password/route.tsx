import { Form, Link } from '@remix-run/react'
import { Input, Button } from '@nextui-org/react'
import { MetaFunction } from "@remix-run/react";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { ChangePasswordSchema } from 'app/schema/changePassword.schema'

export const meta: MetaFunction = () => {
  return [{ title: "Change password" }, { name: "", content: "" }];
};


export default function ChangePassword(): JSX.Element {

  const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordSchema>({
    resolver: yupResolver(ChangePasswordSchema)
  })
  const onSubmit = (data: ChangePasswordSchema) => {
    console.log(data);

  }
  return (
    <>
      <div className='py-8'>
        <div className='space-y-4'>
          <h1 className='text-2xl md:text-5xl text-dark font-bold text-center'>Change Password</h1>
        </div>
        <Form method='post'>
          <div className='py-4 md:py-12 flex flex-col items-center justify-center'>

            <div className='py-2 w-full md:w-1/2'>
              <p className='text-base md:text-lg text-dark font-semibold'>OLD PASSWORD</p>
              <Input type='password'
                variant='underlined' labelPlacement='outside'
                size='lg' placeholder='Enter Your Old Password'
                color='primary'
                {...register('oldPassword')}
                errorMessage={errors?.oldPassword?.message}
              />
            </div>

            <div className='py-2 w-full md:w-1/2'>
              <p className='text-base md:text-lg text-dark font-semibold'>NEW PASSWORD</p>
              <Input type='password'
                variant='underlined' labelPlacement='outside'
                size='lg' placeholder='Enter Your New Password'
                color='primary'
                {...register('newPassword')}
                errorMessage={errors?.newPassword?.message}
              />
            </div>

            <div className='py-2 w-full md:w-1/2'>
              <p className='text-base md:text-lg text-dark font-semibold'>CONFIRM PASSWORD</p>
              <Input type='password'
                variant='underlined' labelPlacement='outside'
                size='lg' placeholder='Enter Your Password'
                color='primary'
                {...register('confirmPassword')}
                errorMessage={errors?.confirmPassword?.message}
              />
            </div>

            <div className='py-8 w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-8'>
              <Button type='submit' variant='solid'
                className='bg-yellow text-white font-bold w-full'
                size='lg' radius='none' startContent={<FaArrowLeft className='text-xl' />}>
                <Link to="/">Back to Account</Link>
              </Button>
              <Button type='submit' variant='solid'
                color='primary' className='font-bold w-full'
                size='lg' radius='none' endContent={<FaArrowRight className='text-xl' />}
                onClick={handleSubmit(onSubmit)}
              >Update Password</Button>
            </div>
          </div>

        </Form>
      </div>

    </>
  )
}
