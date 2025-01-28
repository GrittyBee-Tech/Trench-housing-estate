'use client';
import { closeModal, selectModal } from '../../../store/modal-slice';
// import Icon from '../../../assets/icons';
// import { ICONS } from '../../../constants/icons';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const {
    show,
    heading,
    children,
    showCancelButton,
    size,
    closeOnOutsideClick = true,
    hasBorder,
    backButton,
    showButtons,
    hasPadding = true,
    borderRadius = 10,
    onSave,
    onEdit,
  } = useSelector(selectModal);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        if (closeOnOutsideClick) {
          dispatch(closeModal());
        }
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dispatch(closeModal());
      }
    }

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, dispatch, closeOnOutsideClick]);

  if (!show) return null;

  const sizeClasses = {
    small: 'w-1/4',
    medium: 'w-1/2',
    large: 'w-3/4',
  };

  const modalStyle = {
    width: typeof size === 'number' ? `${size}px` : undefined,
    borderRadius: borderRadius,
  };

  return (
    <div
      className={`fixed inset-0 bg-[#024B1299] bg-opacity-50 flex items-center justify-center z-[9999] transition-opacity duration-300 overflow-y-auto ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-[10px] relative max-h-[90vh] overflow-y-auto ${
          hasPadding ? 'p-5' : ''
        } ${typeof size === 'string' ? sizeClasses[size] : ''}`}
        style={modalStyle}
      >
        {/* Optional Cancel Button */}
        {showCancelButton && (
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            onClick={() => dispatch(closeModal())}
          >
            {/* <Icon type={ICONS.close_fill_icon} size={25} /> */}
          </button>
        )}

        {/* Optional Back Button */}
        {backButton && (
          <button
            className="absolute top-4 left-4 text-gray-500 hover:text-gray-900"
            onClick={() => dispatch(closeModal())}
          >
            {/* <Icon type={ICONS.} size={25} /> */}
          </button>
        )}

        {/* Modal Content */}
        <div>
          <h2
            className={`text-xl font-georgia text-center font-bold ${
              hasBorder ? 'border-b-2 pb-3 border-[#00000033]' : ''
            }`}
          >
            {heading}
          </h2>
          {children}
        </div>
      </div>
      {/* Optional Buttons for images */}
      {showButtons && (
        <div className="absolute bottom-[100px] z-50">
          <div className="flex items-center gap-5 ">
            <button
              className="bg-black text-white font-medium border rounded-[92px] w-[135px] h-[45px] flex items-center justify-center"
              onClick={onSave}
            >
              Save
            </button>
            <button
              className="bg-[#DAFEE2] font-medium text-black border rounded-[92px] w-[135px] h-[45px] flex items-center justify-center"
              onClick={onEdit}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
