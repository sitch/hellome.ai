import { Modal } from 'flowbite-react'
import React, { useState, MouseEvent, ReactNode } from 'react'
import InviteModalContent from './InviteModalContent'
import styles from './InviteModal.module.css'

export interface InviteModalProps {
  name?: string
  className?: string
  children: ReactNode
}

export default function InviteModal({ className, children }: InviteModalProps) {
  const [show, setShow] = useState<boolean>(false)

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
    setShow(!show)
  }
  const onClose = () => setShow(false)

  return (
    <>
      {/* Toggle Modal */}
      <a className={className} onClick={onClick}>
        {children}
      </a>

      {/* Modal */}
      <Modal show={show} size="md" popup={true} onClose={onClose}>
        <InviteModalContent />
      </Modal>
    </>
  )
}
