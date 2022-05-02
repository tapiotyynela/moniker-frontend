import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { ModalProps } from '../../types/components'
import { Button } from '../Button'
import { InputWithLabel } from '../Input'
import Text from '../Text'
import {customStyles} from './styles'

const CustomModal = ({ isOpen, onClose, contentLabel, children }: ModalProps) => {
    return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel={contentLabel}
                style={customStyles}
            >
                {children}
            </Modal>
    )
}

export default CustomModal