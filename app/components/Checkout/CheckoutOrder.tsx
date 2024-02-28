const CheckoutOrder = () => {
  return (
    <div className="flex flex-col gap-1 mt-6">
      <h1 className="text-start text-xl w-full text-black font-bold">Your order </h1>

      <div className="flex flex-row justify-between w-full py-3 border-b border-t border-t-primary border-b-gray">
        <div className="">Subtotal</div>
        <div className="">$300</div>
      </div>
      <div className="flex flex-row justify-between w-full py-3  border-b-gray g border-b">
        <div className="text-black">GST</div>
        <div className="text-black">$300</div>
      </div>
      <div className="flex flex-row justify-between w-full py-3  border-b-gray border-b">
        <div className="text-primary">Total</div>
        <div className="text-primary">$300</div>
      </div>
    </div>
  );
};

export default CheckoutOrder;
