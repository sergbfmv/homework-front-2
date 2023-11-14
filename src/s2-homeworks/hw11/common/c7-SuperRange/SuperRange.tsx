import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#0C2', width: '150px', '& .MuiSlider-thumb': {
                    height: 28,
                    width: 28,
                    backgroundColor: '#fff',
                    border: '1px solid #0C2', // Зеленая окантовка
                    borderRadius: '50%', // Добавляем скругление, чтобы сделать круглый бегунок
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#0C2', // Цвет круглой части внутри бегунка
                        borderRadius: '50%',
                    },
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0px 0px 0px 8px rgba(12, 194, 0, 0.16)', // Эффект при наведении
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.5,
                    backgroundColor: '#8B8B8B',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
