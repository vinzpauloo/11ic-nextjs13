// ** Hooks Imports
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication"

// ** Hooks Imports
import useAPI from "@/hooks/useAPI";

// ** Types
interface BaseProps<T, U> {
    params?: T
    data: U
}

interface DashboardParams {

}

interface DashboardData {
    ipaddress: string | undefined
    fp: string | undefined
    device: number | undefined
    data?: {
        banner: [],
        game_platform: [],
        live_casino: [],
        lottery: [],
        rummy: [],
        support_payment: [],
        web_notice: [],
    }
}

// =================================================================
export const useHomeService = () => {
    const { bearerToken } = useCheckAuthentication();

    const { apiRequest } = useAPI({
        // ** This is where we add customizations for our headers ... **
        // 'Accept': 'application/json'
        // 'Content-Type': 'application/json',
    })

    const getHomePageInfo = (props: BaseProps<DashboardParams, DashboardData>) => apiRequest('/Web/WebInfo', 'POST', props.params, props.data)


    return {
        getHomePageInfo
    }
}