import { Modal, Box, CircularProgress } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    border: 'none',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
};

function ModalLoading({ open, title }) {
    return (
        <Modal open={open}>
            <Box sx={style}>
                <div className='flex flex-col items-center justify-center p-[20px]'>
                    <CircularProgress color="primary" />
                    <div className='mt-[20px] text-[16px] font-bold'>{title}...</div>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalLoading;
