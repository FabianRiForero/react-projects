import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import ModalLoading from './ModalLoading';

export const openModal = () => {
    const Modal = lazy(() => import('./ModalSettings'));
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal';
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render(<Suspense fallback={<ModalLoading />}>
        <Modal root={root} title={'Settings'} />
    </Suspense>);
}

export const openModalAccount = () => {
    const Modal = lazy(() => import('./ModalAccount'));
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal';
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render(<Suspense fallback={<ModalLoading />}>
        <Modal root={root} title={'Account'} />
    </Suspense>);
}