export const getAccessToken = () => {
    const token = window.localStorage.getItem("ROCP_token");
    if (token == null) return null;
    return JSON.parse(token);
};

export const getRefreshToken = () => {
    const token = window.localStorage.getItem("auth_token");
    if (token == null) return null;
    return JSON.parse(token).refreshToken;
};

export const AuthenticationHeader = function () {
    return {
        Authorization: `Bearer ${getAccessToken()}`,
    };
};

export const setLocalStorageToken = (token) => {
    window.localStorage.setItem("ROCP_token", JSON.stringify(token));
};
export const setLocalStorageRefreshToken = (token) => {
    window.localStorage.setItem("refresh_token", JSON.stringify(token));
};

export const removeLocalStorageToken = () => {
    window.localStorage.removeItem("auth_token");
};
export const removeLocalStorageRefreshToken = () => {
    window.localStorage.removeItem("refresh_token");
};

export const caculatePrice = (price, square) => {
    return formatVietnamMoney(price * square)
};
export const caculateSquare = (dimension) => {
    return dimension[0] * dimension[1];
};
export const formatVietnamMoney = (amount) => {
    if (typeof amount !== 'number' || isNaN(amount)) return '0 đồng';

    if (amount >= 1_000_000_000) {
        return (amount / 1_000_000_000).toFixed(2).replace(/\.00$/, '') + ' tỷ';
    } else if (amount >= 1_000_000) {
        return (amount / 1_000_000).toFixed(2).replace(/\.00$/, '') + ' triệu';
    } else {
        return amount.toLocaleString('vi-VN') + ' đồng';
    }
}
export const getTimeDifferenceFromNow = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);

    const diffMs = now - created;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffDay > 0) return `${diffDay} ngày trước`;
    if (diffHour > 0) return `${diffHour} giờ trước`;
    if (diffMin > 0) return `${diffMin} phút trước`;
    return `${diffSec} giây trước`;
}
export const convertDate = (date) => {
    const iso = new Date(date);

    // Format: "MMM dd yyyy"
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(iso);
}
export const formatWithDots = (number) => {

    if (!number) return '';
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export const removeDots = (formatted) => {
    if (typeof formatted === 'string')
        return formatted.replace(/\./g, "");
    return formatted;
};
export function formatSearchParams(filterValue) {
    return Object.entries(filterValue)
        .filter(([_, value]) => value != null && value !== "")
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

}