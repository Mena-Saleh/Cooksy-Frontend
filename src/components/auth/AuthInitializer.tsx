import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/slices/authSlice';
import { getCurrentUser as getCurrentUserApi } from '../../services/CooksyAPI/auth';

export default function AuthInitializer() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const initializeAuth = async () => {
            const response = await getCurrentUserApi();
            if (response.success && response.data) {
                dispatch(login(response.data));
            }
        };

        initializeAuth();
    }, [dispatch]);

    return null; // This component doesn't render anything
} 