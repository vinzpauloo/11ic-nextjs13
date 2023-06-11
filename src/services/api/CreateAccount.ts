// "use server"
import axios from "axios";
import request from "@/lib/request";

interface BaseProps<T, U> {
    data?: T
    params?: U
}

interface RegisterData {
    device?: number
    fp?: string
    invitation_code?: string
    ipaddress?: string
    mobile?: string
    origin_url?: string
    password?: string
    password_confirmation?: string
    played_id?: string
}

export const CreateAccount = () => {

    const postRegister = async (data: BaseProps<RegisterData, unknown>) => {
        return request({
            headers: {
                'Content-Type': 'application/json',
            },
            url: '/Player/Register',
            method: 'POST',
            data: data
        })
    }



    return { postRegister }
}

// export async function postRegister(data: BaseProps<RegisterData, unknown>) {
//     return request({
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         url: '/Player/Register',
//         method: 'POST',
//         data: data
//     })
// }