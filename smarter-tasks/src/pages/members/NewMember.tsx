import React, { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useMemberDispatch } from "../../context/members/context";
import { addMembers } from "../../context/members/actions";

export type Inputs = {
  name: string;
  email: string;
  password: string;
};
const NewMember = () => {
  const dispatchMembers = useMemberDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const openModel = () => {
    setIsOpen(true);
  }
  const closeModel = () => {
    setIsOpen(false);
  }
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await addMembers(dispatchMembers, data);
    if (response.ok) {
      setIsOpen(false)
    } else {
      setError(response.error as React.SetStateAction<null>)
    }
  }
  return (
    <>
      <button
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        id="new-member-btn"
        onClick={openModel}
      >
        Add User
      </button>
      <Transition show={isOpen}>
        <Dialog
          onClose={() => closeModel()}
          className="relative z-50"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <div className="flex min-h-full items-center justify-center text-center">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New User</Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {error &&
                        <span>{error}</span>
                      }
                      <input type="text" placeholder="Enter name" id="name" className={`border w-full py-2 px-3 my-3 ${errors.name ? 'border-red-500' : ''}`}
                        autoFocus
                        {...register('name', { required: true })} />
                      <input type="email" placeholder="Enter email" id="email" className={`border w-full py-2 px-3 my-3 ${errors.email ? 'border-red-500' : ''}`}
                        autoFocus
                        {...register('email', { required: true })} />
                      <input type="password" placeholder="Enter password" id="password" className={` border w-full py-2 px-3 my-3 ${errors.password ? 'border-red-500' : ''}`}
                        autoFocus
                        {...register('password', { required: true })} />
                      <button type="submit" id="create-member-btn" className="justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Submit
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog >
      </Transition>
    </>
  )
}

export default NewMember;