import { Button, Drawer } from '@mui/material';
import { useState } from 'react';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button color='info' onClick={() => setIsOpen(!isOpen)}>
                Menu
            </Button>
            <Drawer
                onClose={() => setIsOpen(!isOpen)}
                open={isOpen}
            >
                <span>
                    Open drawer
                </span>
            </Drawer>

        </div>
    )
} 