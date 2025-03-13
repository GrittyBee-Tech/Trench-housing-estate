'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

interface ModalState {
  show: boolean;
  heading?: string;
  children?: React.ReactNode;
  showCancelButton?: boolean;
  size?: 'small' | 'medium' | 'large' | number;
  closeOnOutsideClick?: boolean;
  hasBorder?: boolean;
  backButton?: boolean;
  showButtons?: boolean;
  onSave?: () => void;
  onEdit?: () => void;
  editField?: string;
  hasPadding?: boolean;
  borderRadius?: number;
}

const initialState: ModalState = {
  show: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Omit<ModalState, 'show'>>) => {
      state.show = true;
      Object.assign(state, action.payload);
    },
    closeModal: (state) => {
      state.show = false;
      state.heading = undefined;
      state.children = undefined;
      state.showCancelButton = undefined;
      state.closeOnOutsideClick = undefined;
      state.hasBorder = undefined;
      state.backButton = undefined;
      state.showButtons = undefined;
      state.onSave = undefined;
      state.onEdit = undefined;
      state.editField = undefined;
      state.hasPadding = undefined;
      state.borderRadius = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: { modal: ModalState }) => state.modal;

export default modalSlice.reducer;
