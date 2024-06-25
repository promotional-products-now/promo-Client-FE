import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import { useAtomValue } from "jotai";
import { FaStar } from "react-icons/fa6";
import { productAtom } from "app/atoms/product.atom";
import { BsCart3 } from "react-icons/bs";
import Carousel from "../Carousel";

export function PreviewProduct({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const product = useAtomValue(productAtom);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent>
        <>
          <ModalHeader className="justify-center">
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-lg md:text-xl font-semibold">{product?.title}</span>
              <div className="flex items-center space-x-4">
                <span className="text-xs">Product Code: pyun67858</span>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <FaStar key={i} className="text-xs text-orange" />
                ))}
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <Image
                  alt=""
                  radius="none"
                  src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
                  removeWrapper
                  className="object-cover h-full w-full transition aspect-square inset-0"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-lg md:text-xl font-normal">Description</span>
                  <p className="text-xs text-gray font-normal">
                    Lorem ipsum dolor sit amet consectetur. Nisi suspendisse enim mattis donec
                    mauris eget faucibus id id. Ullamcorper ante diam nibh adipiscing nisl pretium.
                    Urna quisque eget et risus lorem. Tristique scelerisque curabitur nunc viverra.
                    Faucibus sit at imperdiet nunc amet a posuere nunc elementum. Sed quis eget
                    mauris blandit facilisis. Vitae in pharetra id sit in. Nunc ultrices ultrices
                    odio tortor iaculis id. Elit purus amet porttitor enim at diam etiam tristique
                    eget.
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <Button
                    as={Link}
                    href={`/products/${product?.title}`}
                    radius="none"
                    className="bg-primary text-white"
                    startContent={<BsCart3 />}
                  >
                    View Product
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="justify-center border- border-red-600">
            <div className="border- relative w-3/5">
              <Carousel numberOfItems={3}>
                {[1, 2, 3, 4, 4].map((_, i) => (
                  <div key={i} className="h-24 relative rounded-sm flex items-center">
                    <Image
                      alt=""
                      radius="md"
                      src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"
                      removeWrapper
                      width={40}
                      // className="object-cover transition aspect-square inset-0"
                      className="absolute inset-0 h-full object-cover transition-transform transform-gpu aspect-square border-2 border-slate-500"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
