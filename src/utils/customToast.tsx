import { Platform } from 'react-native';
import { useToast } from "react-native-toast-notifications";

export const CustomToast = () => {
    const toast = useToast();

    const showToast = (mensaje: string) => toast.show(mensaje, {
        type: 'success',
        duration: 4000,
        placement: 'top',
        animationType: 'slide-in',
        textStyle: {
            fontSize: 13,
            color: 'black'
        },
        style: {
            backgroundColor: 'white',
            borderRadius: 30,
            zIndex: 4,
            marginTop: Platform.OS === 'ios' ? 50 : 0
        }
    })
    return {
        showToast
    }
}