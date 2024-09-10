import { STATUS } from '@/constants/status';

export const getStatus = (status: string) => {
  switch (status) {
    case STATUS.NEW:
      return {
        color: '#fff',
        backgroundColor: '#69b1ff',
        label: 'Yangi',
      };
    case STATUS.WAITING:
      return {
        color: '#fff',
        backgroundColor: 'gold',
        label: 'Kutilayotgan',
      };
    case STATUS.ACCEPTED:
      return {
        color: '#fff',
        backgroundColor: '#52c41a',
        label: 'Qabul qilindi',
      };
    case STATUS.ON_THE_WAY:
      return {
        color: '#fff',
        backgroundColor: 'gold',
        label: "Yo'lda",
      };
    case STATUS.DELIVERED:
      return {
        color: '#fff',
        backgroundColor: '#52c41a',
        label: 'Yetkazib berildi',
      };
    case STATUS.CANCELLED:
      return {
        color: '#fff',
        backgroundColor: '#ff4d4f',
        label: 'Bekor qilindi',
      };
    case STATUS.RE_CALL:
      return {
        color: '#fff',
        backgroundColor: '#ff4d4f',
        label: 'Qayta aloqa',
      };
    default:
      return {
        color: '#fff',
        backgroundColor: '#ff4d4f',
        label: 'Kuryerdan qaytgan',
      };
  }
};

export const tagStatus = (status: string) => {
  switch (status) {
    case STATUS.NEW:
      return {
        color: 'blue',
      };
    case STATUS.WAITING:
      return {
        color: 'orange',
      };
    case STATUS.ACCEPTED:
      return {
        color: 'cyan',
      };
    case STATUS.ON_THE_WAY:
      return {
        color: 'orange',
      };
    case STATUS.DELIVERED:
      return {
        color: 'cyan',
      };
    case STATUS.CANCELLED:
      return {
        color: 'error',
      };
    case STATUS.RE_CALL:
      return {
        color: 'lime',
      };
    default:
      return {
        color: 'rgba(0, 0, 0, 0.5)',
      };
  }
};
