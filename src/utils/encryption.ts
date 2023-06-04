import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || '3974e5ee87bd00a56481463e957fb402128bc1824c3b3bbba231a5a3ecdccf';

export function encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
}

export function decrypt(data: string): string {
    let bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}
