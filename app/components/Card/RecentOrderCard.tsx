import { Image, Button } from "@nextui-org/react";
import { GrCart } from "react-icons/gr";

type RecentOrderCardProps = {
  id: number,
  title: string,
  productImg: string,
  price: string,
  quantity: string
}

export default function RecentOrderCard(props: RecentOrderCardProps) {
  return (
    <div className='border  border-lightGray p-6 flex flex-wrap justify-between items-center gap-3 mb-4'>
      <div className='flex gap-4 items-center'>
        <Image
          className='rounded-none'
          width={150}
          alt='product image'
          src={props.productImg}
        />

        <div>
          <p className='text-gray text-base'>{props.title}</p>

          <p className='text-dark text-base font-medium'>Quantity : {props.quantity}</p>
        </div>
      </div>

      <div className='bg-lightGray w-px  h-16'></div>
      <div>
        <p className='text-gray text-base'>Price</p>
        <p className='text-primary font-medium'>{props.price}</p>
      </div>

      <div className='bg-lightGray w-px  h-16'></div>

      <div>
        <Button
          variant='solid'
          color='primary'
          radius='none'
          className='text-lg'
          startContent={<GrCart className='text-white text-xl' />}>View Product</Button>
      </div>

    </div>
  )
}
